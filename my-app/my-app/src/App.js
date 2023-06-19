// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from './pages/Web.js';
import Details from './webFront/components/details/Details';
import Cosmetics from './webFront/components/cosmetics/Cosmetics';
import Clothes from './webFront/components/clothes/Clothes';
import News from './webFront/components/news/News'
import Footer from "./webFront/components/footer/Footer.js";
import Header from "./webFront/components/header/Header.js";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";


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


          {/* <Route path='/cosmetics' element={<Cosmetics />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path="/news" element={<News />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>

  );
}

export default App;