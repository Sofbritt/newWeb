import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from "react-bootstrap-icons";
import "./News.css";

function News() {
    return (
        <div>
            <div className="news">
                <h1 className="new-title"> News</h1>

                <img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16928090/2022/2/4/3974fdfe-e3ca-4b31-9963-905f54ebd3a21643969263404GilletteMach3ShavingRazorwithDuracomfortBladesShavingBrushRa1.jpg' className='news-img' />
                <h2 className='news-title'>Latest News</h2>

                <button className='show-moreBtn'>Show More</button>  <Icon.ArrowRight className='arrowRight-icon' />

            </div>
        </div>
    )
}

export default News;