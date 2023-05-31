import React from "react";
import { Link } from "react-router-dom";
import './Others.css'

function Others() {
    return (
        <div>
              <h1 className='othersTitle'>Others</h1>
            <div className='others-offers'>
              
                <Link to={'/productDetails'}>
                    <div>

                        <img src='https://di2ponv0v5otw.cloudfront.net/posts/2023/04/01/6428c97d2fbf1a2a29820887/s_6428c98b87a2f5ca5e75d220.jpg' className='othersImg' />
                        <h2 className='others-name'>Others</h2>
                        <h3 className='price'>23000 dr</h3>
                        <button className='add'>Add in Basket</button>



                    </div>
                </Link>


                <button className='see-more-but'>See more</button>
            </div>
        </div>

    )
}

export default Others;