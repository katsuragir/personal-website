import About from "../component/layout/about";
import Contact from "../component/layout/contact";
import Footer from "../component/layout/footer";
import Navbar from "../component/layout/navbar";
import Portofolio from "../component/layout/portofolio";
import Resume from "../component/layout/resume";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Portofolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
