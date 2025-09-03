import gsap from "gsap";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";

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
