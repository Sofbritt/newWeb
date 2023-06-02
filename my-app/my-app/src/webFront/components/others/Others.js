import React from "react";
import { Link } from "react-router-dom";
import './Others.css'

function Others() {
    return (
        <div>
            <h1 className='othersTitle'>Others</h1>

            <div className='others-offers'>

                <Link to={'/productDetails'} className="products">
                    <div className='card'>
                    <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />

                        <img src='https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-halterneck-metallic-evening-top-1-E00936248_720x.jpg?v=1682716364' className='othersImg' />
                        <h2 className='others-name'>Black Top</h2>
                        <h3 className='price'>12 000 dr</h3>
                        <button className='add'>Add in Basket</button>



                    </div> <br/> <br/> <hr/>
                    <div className='card'>

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-pencil-shape-denim-skirt-1-E00822691_280x.jpg?v=1672262032' className='othersImg' />
                        <h2 className='others-name'> Y2k Denim Skirt</h2>
                        <h3 className='price'>23 000 dr</h3>
                        <button className='add'>Add in Basket</button>



                    </div>
                    <div className='card'>
                    <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />
                        <img src='https://di2ponv0v5otw.cloudfront.net/posts/2023/04/01/6428c97d2fbf1a2a29820887/s_6428c98b87a2f5ca5e75d220.jpg' className='othersImg' />
                        <h2 className='others-name'>Von Dutch Y2K T-Shirt</h2>
                        <h3 className='price'>10 000 dr</h3>
                        <button className='add'>Add in Basket</button>



                    </div>
                    <div className='card'>
                    <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />

                        <img src='https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-etienne-agner-black-shiny-faux-leather-shiny-baguette-bag-1-E00916776_720x.jpg?v=1682888839' className='othersImg' />
                        <h2 className='others-name'>SHINY BAGUETTE BAG</h2>
                        <h3 className='price'>20 000 dr</h3>
                        <button className='add'>Add in Basket</button>



                    </div>
                </Link>
            </div>

            <button className='see-more-but'>See more</button>
        </div>

    )
}

export default Others;