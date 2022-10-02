
import './App.css';
import Autumn from './Components/Autumn';
import Back from './Components/Back';
import Bottom from './Components/Bottom';
import BrandBlock from './Components/BrandBlock';
import BrandPage from './Components/BrandPage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Landed from "./Components/Landed";
import Nav from "./Components/Nav";
import Product from './Components/Product';

function App() {
  return (
    <>
    <Navbar />
    <Nav />
    <Slider />
    <BrandPage />
    <Landed />
    <Autumn />
    <Product />
    <BrandBlock />
    <Back />
    <Bottom />
    <Footer />
    </>
  );
}

export default App;
