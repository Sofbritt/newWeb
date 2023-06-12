import React from "react";
import { Link } from "react-router-dom";
import './Others.css'
import Carousel from "react-multi-carousel";
 import "react-multi-carousel/lib/styles.css";
 import { useEffect, useState } from "react";
 import axios from "axios";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1100 },
        items: 4,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1100, min: 800 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function Others() {
    const [data, setData] = useState([]);

  
    useEffect(() => {
        axios.get("http://localhost:4500/api/item?category=others")
            .then((response) => setData(response.data))
    })
  
    return (
        <div>
        <h1 className="special-offers">Others</h1>
        <div className="offers ">
            <Carousel showDots={false} responsive={responsive} className="products">
                {data.map((item) => (
                    <div className="card">
                        <Link to={"/productDetails"} className="card-link">
                            <img
                                alt=""
                                src="https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png"
                                className="saleImg"
                            />
                            <img alt="" src={item.img} className="offersImg" />
                            <h2 className="offersTitle">{item.title}</h2>
                            <h3 className="price">{item.price} $</h3>
                            <h3 className="price-sale">{item.sale} $</h3>
                            <button className="add">Add in Basket</button>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>
        <div className="see-more">
            <button className="see-more-but">See more</button>
        </div>
    </div>

    )
}

export default Others;