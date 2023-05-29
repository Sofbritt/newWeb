import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from "react-bootstrap-icons";
import Carousel from './Carousel';
import SpecialOffers from './SpecialOffers';
import SeasonsOffers from './SeasonsOffers';
import Cosmetics from './Cosmetics';
import News from './News';


function Web() {
    return <div>
        <div className='header'>
            <img className='logo' src='https://i.fbcd.co/products/resized/resized-750-500/sf-fs-modern-logo-designs-2-f6a94cb89c415dc12a346af7ca2e5d2e5077f0687cdc5184030fd397aa46b777.jpg' />
            <input type='text' name='search' className='search-inp' placeholder='search' />  <Icon.Search className='search-icon' />
            <h4 className='menu'>Menu</h4>
            <button className='sign-in'>Sign in</button>

            <Icon.Basket className='basket-icon' />
            <select className='choose-language'>
                <option value='Eng'>Eng</option>
                <option value='Rus'>Rus</option>
                <option value='Arm'>Arm</option>
            </select>

        </div> <br />


        <Carousel />
        <SpecialOffers />
        <SeasonsOffers />
        <Cosmetics />
        <News />

    </div>
}

export default Web;