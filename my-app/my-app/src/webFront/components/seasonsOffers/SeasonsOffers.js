import React from 'react'
import { Link } from "react-router-dom";
import "./Seasons.css";

function SeasonsOffers() {
    return (
        <div>
            <h1 className='seasons-title'>Seasons  Offers</h1>
            <div className='seasons-offers '>

                <Link to={'/productDetails'} className='products' >
                    <div className='card'>
                    <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />
                        <img src='https://2ndaddictz.com/cdn/shop/products/PhotoRoom_20220522_153540_300x300.jpg?v=1653233320' className='offersImg' />
                        <h2 className='offersTitle'>Hard Rock Y2K T-Shirt</h2>
                        <h3 className='price'>7900 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>
                        

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-abstract-printed-top-1-E00840753_280x.jpg?v=1679951098' className='offersImg' />
                        <h2 className='offersTitle'>Hard Rock Y2K T-Shirt</h2>
                        <h3 className='price'>7900 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-black-sequined-cowl-neck-asymmetric-hem-evening-dress-1-E00906232_280x.jpg?v=1679865207' className='offersImg' />
                        <h2 className='offersTitle'>Hard Rock Y2K T-Shirt</h2>
                        <h3 className='price'>7900 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>
                    <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-brown-snakeskin-halterneck-top-1-E00901031_280x.jpg?v=1680037718' className='offersImg' />
                        <h2 className='offersTitle'>Hard Rock Y2K T-Shirt</h2>
                        <h3 className='price'>7900 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                </Link>

            </div>
            <button className='see-more-but'>See more</button>
        </div>
    )
}






export default SeasonsOffers;