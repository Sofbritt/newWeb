import React from "react";
import { Link } from "react-router-dom";
import "./Clothes.css";

function Clothes() {
    return (
        <div className="clothes">
            <h1 className='clothes-title'>Clothes</h1>
            <Link to={'/productDetails'}>
                <div className='clothes'>

                    <div>

                        <img src='https://ae01.alicdn.com/kf/H76cb17075fc041a4aee85fb76f17ea87D/Vintage-2000s-Aesthetic-Low-Rise-Jeans-Woman-2021-Casual-Straight-Denim-Pants-Capris-Fashion-Skinny-Blue.jpg' className='offersImg' />
                        <h2 className='clothes-name'>Low Rise Jeans</h2>
                        <h3 className='price'>15 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                </div>
            </Link>

            <button className='see-more-but'>See more</button>
        </div>
    )
}

export default Clothes;