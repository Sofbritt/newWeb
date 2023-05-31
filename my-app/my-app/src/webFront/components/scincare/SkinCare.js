import React from "react";
import { Link } from "react-router-dom";
import './Skincare.css'

function SkinCare() {
    return (
        <div>
            <div className='skincare'>
                <h1 className='skincare-title'>Skin Care</h1>
                <Link to={'/productDetails'}>
                    <div>

                        <img src='https://images.beautycounter.com/product-images%2F100000239%2Fimgs%2FCOUNTERTIME_TRIPEPTIDE_RADIANCE_SERUM_PDP.jpg?alt=media&auto=format&lossless=false&q=60&w=900' className='offersImg' />
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