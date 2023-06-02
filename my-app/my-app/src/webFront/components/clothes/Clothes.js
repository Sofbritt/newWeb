import React from "react";
import { Link } from "react-router-dom";
import "./Clothes.css";

function Clothes() {
    return (
        <div className="clothes">
            <h1 className='clothes-title'>Clothes</h1>
            <Link to={'/productDetails'}>
                <div className='clothes products'>

                    <div className='card'>

                        <img src='https://ae01.alicdn.com/kf/H76cb17075fc041a4aee85fb76f17ea87D/Vintage-2000s-Aesthetic-Low-Rise-Jeans-Woman-2021-Casual-Straight-Denim-Pants-Capris-Fashion-Skinny-Blue.jpg' className='offersImg' />
                        <h2 className='clothes-name'>Low Rise Jeans</h2>
                        <h3 className='price'>15 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-white-halter-dress-1-E00922871_280x.jpg?v=1679778583' className='offersImg' />
                        <h2 className='clothes-name'>Dress</h2>
                        <h3 className='price'>25 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-pale-yellow-light-green-floral-dress-1-E00893883_280x.jpg?v=1679865473' className='offersImg' />
                        <h2 className='clothes-name'>Yellow Evening Dress</h2>
                        <h3 className='price'>15 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                    <div className='card'>

                        <img src='https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-denim-midi-skirt-1-E00763414_280x.jpg?v=1676063171' className='offersImg' />
                        <h2 className='clothes-name'>Y2K Denim Mini Skirt</h2>
                        <h3 className='price'>22 000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                </div>
            </Link>

            <button className='see-more-but'>See more</button>
        </div>
    )
}

export default Clothes;