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
import Header from '../header/Header'
import Details from '../details/Details';
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom';


function Web() {
    return <div>
        <Header /> <br />
        <Carousel />
        <SpecialOffers/>
         <SeasonsOffers />
         <Cosmetics />
        <Clothes />
        <SkinCare />
        <Others />
        <News />
        <Feedback /> 
        <Link className='link-to-details' to={'/productDetails'}>
            Details
        </Link>
        <Footer />



    </div>
}

export default Web;