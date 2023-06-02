import React from "react";
import { Link } from "react-router-dom";
import './Skincare.css'

function SkinCare() {
    return (
        <div>
            <h1 className='skincare-title'>Skin Care</h1>
            <div className='skincare '>

                <Link to={'/productDetails'} className="products">
                    <div className='card'>

                        <img src='https://images.beautycounter.com/product-images%2F100000239%2Fimgs%2FCOUNTERTIME_TRIPEPTIDE_RADIANCE_SERUM_PDP.jpg?alt=media&auto=format&lossless=false&q=60&w=900' className='offersImg' />
                        <h2 className='skincare-name'>Radiance Serum </h2>
                        <h3 className='price'>17 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>

                        <img src='https://www.sephora.com/productimages/sku/s2418846-main-zoom.jpg?imwidth=2000' className='offersImg' />
                        <h2 className='skincare-name'>Radiance Serum </h2>
                        <h3 className='price'>17 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>
                    <img src='https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png' className='saleImg' />
                        <img src='https://maatbeauty.com/wp-content/uploads/2021/10/JLo-Beauty-That-JLo-Glow-Serum-with-Olive-Complex.jpg' className='offersImg' />
                        <h2 className='skincare-name'>Radiance Serum </h2>
                        <h3 className='price'>17 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card' s>

                        <img src='https://media1.popsugar-assets.com/files/thumbor/UChT-j6VHY-s6ipsahSqqkj8EdE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/12/01/674/n/1922153/e51b7f32863b5710_JL1_That_Star_Filter_SHADE-RICH_BRONZE-1oz_FINAL_50_110420_NoReflection_2000x2000/i/JLo-Beauty-That-Star-Filter.jpg' className='offersImg' />
                        <h2 className='skincare-name'>Radiance Serum </h2>
                        <h3 className='price'>17 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                </Link>

            </div>
            <button className='see-more-but'>See more</button>
        </div>
    )
}

export default SkinCare;