import "./App.scss";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/navBar";
import Parallax from "./components/Parallax/Parallax";
import SideBar from "./components/SideBar/SideBar";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <NavBar />
        <Hero className='hero'/>
      </section>
      <section id="Services" className="services"><Parallax type='services'/></section>
      <section id="Portfolio" className="portfolio"><Parallax type='portfolio'/></section>
      <section id="Contact">Contact</section>
      <section id="About">About</section>
    </div>
  );
};

export default App;
