import React from "react";

function Cosmetics() {
    return (
        <div>
            <h1 className='special-offers'>Cosmetics</h1>
            <div className='offers'>
                <div>

                    <img src='https://m.media-amazon.com/images/I/41rByyM+-NL.jpg' className='offersImg' />
                    <h2 className='offersTitle'>Fenty Glow</h2>
                    <h3 className='price'>9900 dr</h3>
                    <button className='add'>Add</button>

                </div>

            </div>
            <button className='see-more-but'>See more</button>
        </div>
    )
}


export default Cosmetics;