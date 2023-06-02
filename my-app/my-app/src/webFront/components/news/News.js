import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from "react-bootstrap-icons";
import "./News.css";

function News() {
    return (
        <div>
            <h1 className="new-title"> News</h1>

            <div className="news">
                <div className='card'>


                    <img src='https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTYPkD3oh5BQGFs4-AU9m2_QGQ6IiFsJE-lWkx456cpe-fvGWOkqjNaUEayr3pR0Z4m' className='news-img' />
                    <h2 className='news-title'>World Children's Day</h2>
                    <button className='show-moreBtn'>Show More</button>  <Icon.ArrowRight className='arrowRight-icon' />
                </div>
                <div className='card'>


                    <img src='https://www.jlobeauty.com/dw/image/v2/BHCW_PRD/on/demandware.static/-/Sites-JL-master/default/dwf4943ebb/images/pdp/dailly_glow_essentials/pdp_dailyglow_hero.jpg?sw=1000&sh=1160&sm=fit' className='news-img' />
                    <h2 className='news-title'>Get this for 20 000dr </h2>
                    <button className='show-moreBtn'>Show More</button>  <Icon.ArrowRight className='arrowRight-icon' />
                </div>
                <div className='card'>


                    <img src='https://i.pinimg.com/736x/5e/31/8e/5e318e1a603192650b6f3ebb9548f1a9.jpg' className='news-img' />
                    <h2 className='news-title'>90s 00s Vintage Clothing</h2>
                    <button className='show-moreBtn'>Show More</button>  <Icon.ArrowRight className='arrowRight-icon' />
                </div>
                <div className='card'>


                    <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16928090/2022/2/4/3974fdfe-e3ca-4b31-9963-905f54ebd3a21643969263404GilletteMach3ShavingRazorwithDuracomfortBladesShavingBrushRa1.jpg' className='news-img' />
                    <h2 className='news-title'>Latest News</h2>
                    <button className='show-moreBtn'>Show More</button>  <Icon.ArrowRight className='arrowRight-icon' />
                </div>




            </div>
            {/* <div className='seasons-offers products'>

<Link to={'/productDetails'}>
    <div>

        <img src='https://2ndaddictz.com/cdn/shop/products/PhotoRoom_20220522_153540_300x300.jpg?v=1653233320' className='offersImg' />
        <h2 className='offersTitle'>Hard Rock Y2K T-Shirt</h2>
        <h3 className='price'>7900 dr</h3>
        <button className='add'>Add in Basket</button>

    </div> */}


        </div>
    )
}

export default News;