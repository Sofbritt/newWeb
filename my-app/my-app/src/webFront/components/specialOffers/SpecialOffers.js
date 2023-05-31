import React from 'react'
import { Link } from 'react-router-dom';
import "./SpecialOffers.css";

function SpecialOffers() {
    return (
        <div>
            <h1 className='special-offers'>Special Offers</h1>
            <div className='offers'>
                <Link to={'/productDetails'}>
                    <div>

                        <img src='https://cdn.cliqueinc.com/posts/296013/shoe-trends-2022-296013-1639946999768-product.700x0c.jpg' className='offersImg' />
                        <h2 className='offersTitle'>Steve Madden Sandals</h2>
                        <h3 className='price'>12000 dr</h3>
                        <button className='add'>Add in Basket</button>

                    </div>
                </Link>


            </div>
            <button className='see-more-but'>See more</button>

        </div>
    )


}

export default SpecialOffers;