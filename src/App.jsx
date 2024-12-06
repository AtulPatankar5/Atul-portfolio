import './App.scss';
import NavBar from './components/NavBar/navBar';
import SideBar from './components/SideBar/SideBar';
import Test from './Test';

const App = () => {
  return <div>
    <section><NavBar/></section>
    <section><SideBar/></section>
    <section>Services</section>
    <section>Portfolio</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
 
  {/* <Test/> */}
    </div>;
};

export default App;
