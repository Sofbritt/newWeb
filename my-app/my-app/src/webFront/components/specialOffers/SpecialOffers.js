import React from 'react'
import { Link } from 'react-router-dom';
import "./SpecialOffers.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

function SpecialOffers() {
    return (
        <div>
            <h1 className='special-offers'>Special Offers</h1>
            <div className='offers '>
                <Link to={'/productDetails'} className="products">
                    <div className='card'>
                        <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />
                        <img src='https://cdn.cliqueinc.com/posts/296013/shoe-trends-2022-296013-1639946999768-product.700x0c.jpg' className='offersImg' />
                        <h2 className='offersTitle'>Steve Madden Sandals</h2>
                        <h3 className='price'>12 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-diamonte-detail-y2k-leather-baguette-bag-1-E00916387_280x.jpg?v=1682456919' className='offersImg' />
                        <h2 className='offersTitle'>Shiny Gray Bag</h2>
                        <h3 className='price'>14 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>
                        <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-guess-rocker-for-life-printed-t-shirt-1-E00805486_280x.jpg?v=1681592880' className='offersImg' />
                        <h2 className='offersTitle'>Y2K Blue T-Shirt</h2>
                        <h3 className='price'>10 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>
                        <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-white-y2k-three-quarter-cargo-pants-1-E00824954_280x.jpg?v=1672347845' className='offersImg' />
                        <h2 className='offersTitle'>White Cargo </h2>
                        <h3 className='price'>10 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                </Link>


            </div>
            <button className='see-more-but'>See more</button>

            {/* 
            <Carousel>
        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-white-y2k-three-quarter-cargo-pants-1-E00824954_280x.jpg?v=1672347845' className='offersImg' />
        </Carousel> */}
        </div>
    )


}

export default SpecialOffers;