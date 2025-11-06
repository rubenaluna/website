"use client";

import React, { forwardRef, useEffect, useRef } from "react";
// @ts-ignore
import { cn } from "@/lib/utils";
import { Mesh, Program, Renderer, Triangle, Vec2 } from "ogl";

const vertex = `
attribute vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}
`;

const fragment = `
#ifdef GL_ES
precision lowp float;
#endif
uniform vec2 uResolution;
uniform float uTime;
uniform float uHueShift;
uniform float uNoise;
uniform float uScan;
uniform float uScanFreq;
uniform float uWarp;
uniform float uScrollOffset;
uniform vec2 uMouse;
uniform float uMouseIntensity;
#define iTime uTime
#define iResolution uResolution

vec4 buf[8];
float rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}

mat3 rgb2yiq=mat3(0.299,0.587,0.114,0.596,-0.274,-0.322,0.211,-0.523,0.312);
mat3 yiq2rgb=mat3(1.0,0.956,0.621,1.0,-0.272,-0.647,1.0,-1.106,1.703);

vec3 hueShiftRGB(vec3 col,float deg){
    float gray = dot(col, vec3(0.2126, 0.7152, 0.0722));
    float gammaGray = sqrt(gray);
    // Lighten the grayscale value - raise the minimum brightness
    gammaGray = gammaGray + 0.025; // Scale and add offset to make it lighter
    return vec3(gammaGray, gammaGray, gammaGray);
}

vec4 sigmoid(vec4 x){return 1./(1.+exp(-x));}

vec4 cppn_fn(vec2 coordinate,float in0,float in1,float in2){
    buf[6]=vec4(coordinate.x,coordinate.y,0.3948333106474662+in0,0.36+in1);
    buf[7]=vec4(0.14+in2,sqrt(coordinate.x*coordinate.x+coordinate.y*coordinate.y),0.,0.);
    buf[0]=mat4(vec4(6.5404263,-3.6126034,0.7590882,-1.13613),vec4(2.4582713,3.1660357,1.2219609,0.06276096),vec4(-5.478085,-6.159632,1.8701609,-4.7742867),vec4(6.039214,-5.542865,-0.90925294,3.251348))*buf[6]+mat4(vec4(0.8473259,-5.722911,3.975766,1.6522468),vec4(-0.24321538,0.5839259,-1.7661959,-5.350116),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(0.21808943,1.1243913,-1.7969975,5.0294676);
    buf[1]=mat4(vec4(-3.3522482,-6.0612736,0.55641043,-4.4719114),vec4(0.8631464,1.7432913,5.643898,1.6106541),vec4(2.4941394,-3.5012043,1.7184316,6.357333),vec4(3.310376,8.209261,1.1355612,-1.165539))*buf[6]+mat4(vec4(5.24046,-13.034365,0.009859298,15.870829),vec4(2.987511,3.129433,-0.89023495,-1.6822904),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-5.9457836,-6.573602,-0.8812491,1.5436668);
    buf[0]=sigmoid(buf[0]);buf[1]=sigmoid(buf[1]);
    buf[2]=mat4(vec4(-15.219568,8.095543,-2.429353,-1.9381982),vec4(-5.951362,4.3115187,2.6393783,1.274315),vec4(-7.3145227,6.7297835,5.2473326,5.9411426),vec4(5.0796127,8.979051,-1.7278991,-1.158976))*buf[6]+mat4(vec4(-11.967154,-11.608155,6.1486754,11.237008),vec4(2.124141,-6.263192,-1.7050359,-0.7021966),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-4.17164,-3.2281182,-4.576417,-3.6401186);
    buf[3]=mat4(vec4(3.1832156,-13.738922,1.879223,3.233465),vec4(0.64300746,12.768129,1.9141049,0.50990224),vec4(-0.049295485,4.4807224,1.4733979,1.801449),vec4(5.0039253,13.000481,3.3991797,-4.5561905))*buf[6]+mat4(vec4(-0.1285731,7.720628,-3.1425676,4.742367),vec4(0.6393625,3.714393,-0.8108378,-0.39174938),vec4(0.,0.,0.,0.),vec4(0.,0.,0.,0.))*buf[7]+vec4(-1.1811101,-21.621881,0.7851888,1.2329718);
    buf[2]=sigmoid(buf[2]);buf[3]=sigmoid(buf[3]);
    buf[4]=mat4(vec4(5.214916,-7.183024,2.7228765,2.6592617),vec4(-5.601878,-25.3591,4.067988,0.4602802),vec4(-10.57759,24.286327,21.102104,37.546658),vec4(4.3024497,-1.9625226,2.3458803,-1.372816))*buf[0]+mat4(vec4(-17.6526,-10.507558,2.2587414,12.462782),vec4(6.265566,-502.75443,-12.642513,0.9112289),vec4(-10.983244,20.741234,-9.701768,-0.7635988),vec4(5.383626,1.4819539,-4.1911616,-4.8444734))*buf[1]+mat4(vec4(12.785233,-16.345072,-0.39901125,1.7955981),vec4(-30.48365,-1.8345358,1.4542528,-1.1118771),vec4(19.872723,-7.337935,-42.941723,-98.52709),vec4(8.337645,-2.7312303,-2.2927687,-36.142323))*buf[2]+mat4(vec4(-16.298317,3.5471997,-0.44300047,-9.444417),vec4(57.5077,-35.609753,16.163465,-4.1534753),vec4(-0.07470326,-3.8656476,-7.0901804,3.1523974),vec4(-12.559385,-7.077619,1.490437,-0.8211543))*buf[3]+vec4(-7.67914,15.927437,1.3207729,-1.6686112);
    buf[5]=mat4(vec4(-1.4109162,-0.372762,-3.770383,-21.367174),vec4(-6.2103205,-9.35908,0.92529047,8.82561),vec4(11.460242,-22.348068,13.625772,-18.693201),vec4(-0.3429052,-3.9905605,-2.4626114,-0.45033523))*buf[0]+mat4(vec4(7.3481627,-4.3661838,-6.3037653,-3.868115),vec4(1.5462853,6.5488915,1.9701879,-0.58291394),vec4(6.5858274,-2.2180402,3.7127688,-1.3730392),vec4(-5.7973905,10.134961,-2.3395722,-5.965605))*buf[1]+mat4(vec4(-2.5132585,-6.6685553,-1.4029363,-0.16285264),vec4(-0.37908727,0.53738135,4.389061,-1.3024765),vec4(-0.70647055,2.0111287,-5.1659346,-3.728635),vec4(-13.562562,10.487719,-0.9173751,-2.6487076))*buf[2]+mat4(vec4(-8.645013,6.5546675,-6.3944063,-5.5933375),vec4(-0.57783127,-1.077275,36.91025,5.736769),vec4(14.283112,3.7146652,7.1452246,-4.5958776),vec4(2.7192075,3.6021907,-4.366337,-2.3653464))*buf[3]+vec4(-5.9000807,-4.329569,1.2427121,8.59503);
    buf[4]=sigmoid(buf[4]);buf[5]=sigmoid(buf[5]);
    buf[6]=mat4(vec4(-1.61102,0.7970257,1.4675229,0.20917463),vec4(-28.793737,-7.1390953,1.5025433,4.656581),vec4(-10.94861,39.66238,0.74318546,-10.095605),vec4(-0.7229728,-1.5483948,0.7301322,2.1687684))*buf[0]+mat4(vec4(3.2547753,21.489103,-1.0194173,-3.3100595),vec4(-3.7316632,-3.3792162,-7.223193,-0.23685838),vec4(13.1804495,0.7916005,5.338587,5.687114),vec4(-4.167605,-17.798311,-6.815736,-1.6451967))*buf[1]+mat4(vec4(0.604885,-7.800309,-7.213122,-2.741014),vec4(-3.522382,-0.12359311,-0.5258442,0.43852118),vec4(9.6752825,-22.853785,2.062431,0.099892326),vec4(-4.3196306,-17.730087,2.5184598,5.30267))*buf[2]+mat4(vec4(-6.545563,-15.790176,-6.0438633,-5.415399),vec4(-43.591583,28.551912,-16.00161,18.84728),vec4(4.212382,8.394307,3.0958717,8.657522),vec4(-5.0237565,-4.450633,-4.4768,-5.5010443))*buf[3]+mat4(vec4(1.6985557,-67.05806,6.897715,1.9004834),vec4(1.8680354,2.3915145,2.5231109,4.081538),vec4(11.158006,1.7294737,2.0738268,7.386411),vec4(-4.256034,-306.24686,8.258898,-17.132736))*buf[4]+mat4(vec4(1.6889864,-4.5852966,3.8534803,-6.3482175),vec4(1.3543309,-1.2640043,9.932754,2.9079645),vec4(-5.2770967,0.07150358,-0.13962056,3.3269649),vec4(28.34703,-4.918278,6.1044083,4.085355))*buf[5]+vec4(6.6818056,12.522166,-3.7075126,-4.104386);
    buf[7]=mat4(vec4(-8.265602,-4.7027016,5.098234,0.7509808),vec4(8.6507845,-17.15949,16.51939,-8.884479),vec4(-4.036479,-2.3946867,-2.6055532,-1.9866527),vec4(-2.2167742,-1.8135649,-5.9759874,4.8846445))*buf[0]+mat4(vec4(6.7790847,3.5076547,-2.8191125,-2.7028968),vec4(-5.743024,-0.27844876,1.4958696,-5.0517144),vec4(13.122226,15.735168,-2.9397483,-4.101023),vec4(-14.375265,-5.030483,-6.2599335,2.9848232))*buf[1]+mat4(vec4(4.0950394,-0.94011575,-5.674733,4.755022),vec4(4.3809423,4.8310084,1.7425908,-3.437416),vec4(2.117492,0.16342592,-104.56341,16.949184),vec4(-5.22543,-2.994248,3.8350096,-1.9364246))*buf[2]+mat4(vec4(-5.900337,1.7946124,-13.604192,-3.8060522),vec4(6.6583457,31.911177,25.164474,91.81147),vec4(11.840538,4.1503043,-0.7314397,6.768467),vec4(-6.3967767,4.034772,6.1714606,-0.32874924))*buf[3]+mat4(vec4(3.4992442,-196.91893,-8.923708,2.8142626),vec4(3.4806502,-3.1846354,5.1725626,5.1804223),vec4(-2.4009497,15.585794,1.2863957,2.0252278),vec4(-71.25271,-62.441242,-8.138444,0.50670296))*buf[4]+mat4(vec4(-12.291733,-11.176166,-7.3474145,4.390294),vec4(10.805477,5.6337385,-0.9385842,-4.7348723),vec4(-12.869276,-7.039391,5.3029537,7.5436664),vec4(1.4593618,8.91898,3.5101583,5.840625))*buf[5]+vec4(2.2415268,-6.705987,-0.98861027,-2.117676);
    buf[6]=sigmoid(buf[6]);buf[7]=sigmoid(buf[7]);
    buf[0]=mat4(vec4(1.6794263,1.3817469,2.9625452,0.),vec4(-1.8834411,-1.4806935,-3.5924516,0.),vec4(-1.3279216,-1.0918057,-2.3124623,0.),vec4(0.2662234,0.23235129,0.44178495,0.))*buf[0]+mat4(vec4(-0.6299101,-0.5945583,-0.9125601,0.),vec4(0.17828953,0.18300213,0.18182953,0.),vec4(-2.96544,-2.5819945,-4.9001055,0.),vec4(1.4195864,1.1868085,2.5176322,0.))*buf[1]+mat4(vec4(-1.2584374,-1.0552157,-2.1688404,0.),vec4(-0.7200217,-0.52666044,-1.438251,0.),vec4(0.15345335,0.15196142,0.272854,0.),vec4(0.945728,0.8861938,1.2766753,0.))*buf[2]+mat4(vec4(-2.4218085,-1.968602,-4.35166,0.),vec4(-22.683098,-18.0544,-41.954372,0.),vec4(0.63792,0.5470648,1.1078634,0.),vec4(-1.5489894,-1.3075932,-2.6444845,0.))*buf[3]+mat4(vec4(-0.49252132,-0.39877754,-0.91366625,0.),vec4(0.95609266,0.7923952,1.640221,0.),vec4(0.30616966,0.15693925,0.8639857,0.),vec4(1.1825981,0.94504964,2.176963,0.))*buf[4]+mat4(vec4(0.35446745,0.3293795,0.59547555,0.),vec4(-0.58784515,-0.48177817,-1.0614829,0.),vec4(2.5271258,1.9991658,4.6846647,0.),vec4(0.13042648,0.08864098,0.30187556,0.))*buf[5]+mat4(vec4(-1.7718065,-1.4033192,-3.3355875,0.),vec4(3.1664357,2.638297,5.378702,0.),vec4(-3.1724713,-2.6107926,-5.549295,0.),vec4(-2.851368,-2.249092,-5.3013067,0.))*buf[6]+mat4(vec4(1.5203838,1.2212278,2.8404984,0.),vec4(1.5210563,1.2651345,2.683903,0.),vec4(2.9789467,2.4364579,5.2347264,0.),vec4(2.2270417,1.8825914,3.8028636,0.))*buf[7]+vec4(-1.5468478,-3.6171484,0.24762098,0.);
    buf[0]=sigmoid(buf[0]);
    return vec4(buf[0].x,buf[0].y,buf[0].z,1.);
}

void mainImage(out vec4 fragColor,in vec2 fragCoord){
    vec2 uv=fragCoord/uResolution.xy*2.-1.;
    uv.y*=-1.;
    
    // Store original UV for mouse distance calculation (before scroll transforms)
    vec2 uvOriginal = uv;
    
    // Mouse position is already correctly normalized based on canvas dimensions
    vec2 mousePos = uMouse;
    
    // Calculate distance from current pixel to mouse position
    float distToMouse = length(uvOriginal - mousePos);
    
    // Create a localized warp effect around the mouse
    // The effect falls off with distance using a smooth falloff function
    float warpRadius = 2.0 * uMouseIntensity;
    float warpFalloff = smoothstep(warpRadius, 0.0, distToMouse);
    // Apply multiple layers of smoothing for an extremely gradual falloff
    warpFalloff = warpFalloff * warpFalloff * (3.0 - 2.0 * warpFalloff);
    warpFalloff = warpFalloff * warpFalloff; // Extra easing
    
    // Apply radial warp around mouse position
    vec2 dirFromMouse = uvOriginal - mousePos;
    float warpStrength = warpFalloff * 0.08 * uMouseIntensity;
    
    // Create swirling/twisting effect around cursor
    float twist = warpFalloff * 0.5 * uMouseIntensity;
    float ms = sin(twist);
    float mc = cos(twist);
    mat2 mouseRot = mat2(mc, -ms, ms, mc);
    vec2 warpedDir = mouseRot * dirFromMouse;
    
    // Apply the localized warp to UV
    vec2 mouseWarpOffset = (warpedDir - dirFromMouse) * warpStrength;
    uv += mouseWarpOffset;
    
    // Add subtle pulsing warp effect at mouse position
    float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
    vec2 pulseOffset = normalize(dirFromMouse) * warpFalloff * pulse * 0.02 * uMouseIntensity;
    uv += pulseOffset;
    
    // Apply scroll-based parallax and rotation effect
    float scrollEffect = uScrollOffset * 0.001;
    uv.x += scrollEffect * 0.3;
    uv.y += scrollEffect * 0.15;
    
    // Add scroll-based rotation
    float angle = scrollEffect * 0.2;
    float s = sin(angle);
    float c = cos(angle);
    mat2 rot = mat2(c, -s, s, c);
    uv = rot * uv;
    
    // Enhanced warp with scroll influence
    float scrollWarp = uWarp + abs(sin(scrollEffect * 0.5)) * 0.5;
    uv+=scrollWarp*vec2(sin(uv.y*6.283+uTime*0.5+scrollEffect),cos(uv.x*6.283+uTime*0.5+scrollEffect))*0.05;
    
    // Add subtle extra localized distortion based on mouse proximity
    uv += vec2(
        sin(uv.y * 10.0 + uTime) * warpFalloff * 0.01 * uMouseIntensity,
        cos(uv.x * 10.0 + uTime) * warpFalloff * 0.01 * uMouseIntensity
    );
    
    // Scale the pattern to match the original appearance
    // This compensates for the resolution fix while keeping mouse coordinates accurate
    float patternScale = uResolution.x / (uResolution.x / (uResolution.y / uResolution.y * 2.0));
    vec2 patternUV = uv * 2.0;
    
    // Animate CPPN inputs with scroll influence
    float input0 = 0.1*sin(0.3*uTime + scrollEffect * 0.1);
    float input1 = 0.1*sin(0.69*uTime + scrollEffect * 0.15);
    float input2 = 0.1*sin(0.44*uTime + scrollEffect * 0.2);
    
    fragColor=cppn_fn(patternUV, input0, input1, input2);
}

void main(){
    vec4 col;mainImage(col,gl_FragCoord.xy);
    col.rgb=hueShiftRGB(col.rgb,uHueShift);
    float scanline_val=sin(gl_FragCoord.y*uScanFreq)*0.05+0.5;
    col.rgb*=1.-(scanline_val*scanline_val)*uScan;
    col.rgb+=(rand(gl_FragCoord.xy+uTime)-0.5)*uNoise;
    gl_FragColor=vec4(clamp(col.rgb,0.0,1.0),1.0);
}
`;

export interface Background extends React.HTMLAttributes<HTMLDivElement> {
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
  scrollEffect?: boolean;
  scrollIntensity?: number;
  mouseEffect?: boolean;
  mouseIntensity?: number;
}

export const Background = forwardRef<HTMLDivElement, Background>(
  (
    {
      className,
      hueShift = 0,
      noiseIntensity = 0,
      scanlineIntensity = 0,
      speed = 0.5,
      scanlineFrequency = 0,
      warpAmount = 0,
      resolutionScale = 1,
      scrollEffect = true,
      scrollIntensity = 1,
      mouseEffect = true,
      mouseIntensity = 1,
      ...props
    },
    ref
  ) => {
    const domProps = props;

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scrollOffsetRef = useRef<number>(0);
    const targetScrollOffsetRef = useRef<number>(0);
    const mousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const parent = canvas.parentElement as HTMLElement;

      const dpr = Math.min(window.devicePixelRatio, 2);
      const renderer = new Renderer({
        dpr,
        canvas,
      });

      const gl = renderer.gl;
      const geometry = new Triangle(gl);

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: new Vec2() },
          uHueShift: { value: hueShift },
          uNoise: { value: noiseIntensity },
          uScan: { value: scanlineIntensity },
          uScanFreq: { value: scanlineFrequency },
          uWarp: { value: warpAmount },
          uScrollOffset: { value: 0 },
          uMouse: { value: new Vec2() },
          uMouseIntensity: { value: mouseIntensity },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });

      const resize = () => {
        const w = parent.clientWidth,
          h = parent.clientHeight;
        const renderW = w * resolutionScale;
        const renderH = h * resolutionScale;
        renderer.setSize(renderW, renderH);
        // Account for both resolutionScale AND DPR that renderer applies
        const actualW = renderW * dpr;
        const actualH = renderH * dpr;
        program.uniforms.uResolution.value.set(actualW, actualH);
      };

      window.addEventListener("resize", resize);
      resize();

      // Add scroll event listener
      const handleScroll = () => {
        if (scrollEffect) {
          targetScrollOffsetRef.current = window.scrollY * scrollIntensity;
        }
      };

      if (scrollEffect) {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initialize scroll position
        scrollOffsetRef.current = targetScrollOffsetRef.current; // Initialize current position
      }

      // Add mousemove event listener
      const handleMouseMove = (e: MouseEvent) => {
        if (mouseEffect && canvas) {
          // Get canvas bounding rect for accurate positioning
          const rect = canvas.getBoundingClientRect();

          // Calculate mouse position relative to canvas
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Normalize to -1 to 1 range based on canvas dimensions
          const normalizedX = (x / rect.width) * 2 - 1;
          const normalizedY = (y / rect.height) * 2 - 1;

          // Update mouse position directly
          mousePositionRef.current = {
            x: normalizedX,
            y: normalizedY,
          };
        }
      };

      if (mouseEffect) {
        window.addEventListener("mousemove", handleMouseMove, {
          passive: true,
        });
      }

      const start = performance.now();
      let frame = 0;

      const loop = () => {
        program.uniforms.uTime.value =
          ((performance.now() - start) / 1000) * speed;
        program.uniforms.uHueShift.value = hueShift;
        program.uniforms.uNoise.value = noiseIntensity;
        program.uniforms.uScan.value = scanlineIntensity;
        program.uniforms.uScanFreq.value = scanlineFrequency;
        program.uniforms.uWarp.value = warpAmount;

        // Apply smooth interpolation (lerp) to scroll offset for momentum/inertia effect
        // Lower lerp factor = more momentum/lag
        const scrollLerpFactor = 0.08;
        scrollOffsetRef.current +=
          (targetScrollOffsetRef.current - scrollOffsetRef.current) *
          scrollLerpFactor;
        program.uniforms.uScrollOffset.value = scrollOffsetRef.current;

        program.uniforms.uMouse.value.set(
          mousePositionRef.current.x,
          mousePositionRef.current.y
        );
        program.uniforms.uMouseIntensity.value = mouseIntensity;
        renderer.render({ scene: mesh });
        frame = requestAnimationFrame(loop);
      };

      loop();

      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        if (scrollEffect) {
          window.removeEventListener("scroll", handleScroll);
        }
        if (mouseEffect) {
          window.removeEventListener("mousemove", handleMouseMove);
        }
      };
    }, [
      hueShift,
      noiseIntensity,
      scanlineIntensity,
      speed,
      scanlineFrequency,
      warpAmount,
      resolutionScale,
      scrollEffect,
      scrollIntensity,
      mouseEffect,
      mouseIntensity,
    ]);

    return (
      <div
        ref={ref}
        className={cn("w-screen h-screen relative", className)}
        {...domProps}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    );
  }
);

Background.displayName = "DarkVeilBackground";
