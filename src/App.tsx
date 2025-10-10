import { Layout } from "@/components/layout";
import { Home } from "@/pages/Home/Home";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
