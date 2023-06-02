import React from "react";
import { Link } from "react-router-dom";
import "./Cosmetics.css";

function Cosmetics() {
    return (
        <div>
            <h1 className='special-offers'>Cosmetics</h1>
            <Link to={'/productDetails'}>
                <div className='offers products'>
                    <div className='card'>

                        <img src='https://cdn.shopify.com/s/files/1/0598/6975/7628/products/33A75330-E5C9-4DFF-84D4-BD956CB4295A_533x.webp?v=1674786643' className='offersImg' />
                        <h2 className='offersTitle'>Fenty Glow</h2>
                        <h3 className='price'>9900 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>

                        <img src='https://media.ulta.com/i/ulta/2592391?w=1020&h=1020' className='offersImg' />
                        <h2 className='offersTitle'>Fenty Glow</h2>
                        <h3 className='price'>9900 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>
                        <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />
                        <img src='https://m.hng.io/catalog/product/6/4/644890_gngr_bnge_mscw_mle_1_1.jpg?io=PDP' className='offersImg' />
                        <h2 className='offersTitle'>Fenty Glow</h2>
                        <h3 className='price'>9900 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>
                        <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />
                        <img src='https://i5.walmartimages.com/asr/ab69bb64-ccfa-4cba-b929-c6bea34b8932.1ab967569f36435f951673c97f87fcea.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' className='offersImg' />
                        <h2 className='offersTitle'>Fenty Glow</h2>
                        <h3 className='price'>9900 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>

                </div>
            </Link>


            <button className='see-more-but'>See more</button>
        </div>
    )
}


export default Cosmetics;