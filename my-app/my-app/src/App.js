// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from './pages/Web.js';
import Details from './webFront/components/details/Details';
import Footer from "./webFront/components/footer/Footer.js";
import Header from "./webFront/components/header/Header.js";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Basket from "./pages/basket/Basket.js";
import Cosmetics from "./webFront/components/cosmetics/Cosmetics.js";
import ShowMore from "./webFront/components/showmore/Showmore.js";
import SkinCare from "./webFront/components/scincare/SkinCare.js";
import Clothes from "./webFront/components/clothes/Clothes.js";
import News from "./webFront/components/news/News.js";
import Others from "./webFront/components/others/Others.js";
import SpecialOffers from "./webFront/components/specialOffers/SpecialOffers.js";
import SeasonsOffers from "./webFront/components/seasonsOffers/SeasonsOffers.js";



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Web />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/basket" element={<Basket />} />
          <Route path='/showmore' element={<ShowMore />} />
          <Route path="/seasonsoffers" element={<SeasonsOffers />} />
          <Route path="/specialoffers" element={<SpecialOffers />} />
          <Route path="/others" element={<Others />} />
          <Route path='/cosmetics' element={<Cosmetics />} />
          <Route path='/skincare' element={<SkinCare />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path="/news" element={<News />} />


          
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>

  );
}

export default App;