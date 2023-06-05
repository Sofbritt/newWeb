import React from "react";
import { Link } from "react-router-dom";
import './Others.css'
import Carousel from "react-multi-carousel";
 import "react-multi-carousel/lib/styles.css";

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
    let arr = [
        {
            id: 1,
            title: "WHITE & PINK Y2K DRESS",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-white-halter-dress-1-E00922871_1512x.jpg?v=1679778582",
            price: "60",
            sale: "50",
        },
        {
            id: 2,
            title: "LIGHT BLUE Y2K TOP ",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-abstract-printed-top-1-E00840753_720x.jpg?v=1679951097",
            price: "40",
            sale: "35",
        },
        {
            id: 3,
            title: "Y2K  JEANS",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-zip-front-straight-fit-jeans-1-E00822278_720x.jpg?v=1674680515",
            price: "55",
            sale: "45",
        },
        {
            id: 4,
            title: "DENIM MAXI SKIRT",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-indigo-denim-skirt-1-E00867522_1512x.jpg?v=1685221570",
            price: "35",
            sale: "25",
        },
    ];
    return (
        <div>
        <h1 className="special-offers">Others</h1>
        <div className="offers ">
            <Carousel showDots={false} responsive={responsive} className="products">
                {arr.map((item) => (
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