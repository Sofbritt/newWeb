// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from './webFront/components/mainComponent/Web.js'
import Details from './webFront/components/details/Details';
import Cosmetics from './webFront/components/cosmetics/Cosmetics';
import Clothes from './webFront/components/clothes/Clothes';
import News from './webFront/components/news/News'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Web />} />
          <Route path='/productDetails' element={<Details />} />
          <Route path='/cosmetics' element={<Cosmetics />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path="/news" element={<News/>} />
       

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;