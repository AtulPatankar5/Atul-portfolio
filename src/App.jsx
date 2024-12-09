import "./App.scss";
import Contacts from "./components/Contacts/Contacts";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/navBar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import SideBar from "./components/SideBar/SideBar";
import Test from "./Test";

const App = () => {
  return (
    <div>
      {/* <Cursor/> */}
      <section id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      {/* <Portfolio />
      <section id="Contact"><Contacts/></section> */}
      {/* <section id="About">About</section> */}
    </div>
  );
};

export default App;
