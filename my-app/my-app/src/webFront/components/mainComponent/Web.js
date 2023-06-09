import React from 'react'
import Carousel from '../carousel/Carousel';
import SpecialOffers from '../specialOffers/SpecialOffers';
import SeasonsOffers from '../seasonsOffers/SeasonsOffers';
import Cosmetics from '../cosmetics/Cosmetics';
import News from '../news/News';
import Clothes from '../clothes/Clothes';
import SkinCare from '../scincare/SkinCare';
import Feedback from '../feedback/Feedback';
import Others from '../others/Others';
import Details from '../details/Details';
import Header from '../header/Header';
import Footer from '../footer/Footer';



function Web() {
    return <div>
        
       
        <Carousel />
        <SpecialOffers/>
         <SeasonsOffers />
         <Cosmetics />
        <Clothes />
        <SkinCare />
        <Others />
        <News />
        <Feedback /> 
   



    </div>
}

export default Web;