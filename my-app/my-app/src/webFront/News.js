import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from "react-bootstrap-icons";

function News() {
    return (
        <div>
            <div className="news">
                <h1 className="new-title">Latest News</h1>

                <img src='' className='news-img' />
                <h2 className='news-title'>Latest News</h2>

                <button className='show-moreBtn'>Show More</button>  <Icon.ArrowRight className='arrowRight-icon' />

            </div>
        </div>
    )
}

export default News;