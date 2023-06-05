import React from "react";
import { Link } from "react-router-dom";
import "./Cosmetics.css";
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

function Cosmetics() {
    let arr = [
        {
            id: 1,
            title: "FENTY GLOW",
            img: "https://londonlovesbeauty.com/wp-content/uploads/2022/11/fenty-beauty-lip-luminizer-fenty-beauty-gloss-bomb-universal-lip-luminizer-sweet-mouth-13617046945886.jpg",
            price: "34",
            sale: "25",
        },
        {
            id: 2,
            title: "FENTY HIGHLIGHTER",
            img: "https://cdn.shopify.com/s/files/1/0079/5384/2257/products/diamond-bomb.png?v=1662558134",
            price: "50",
            sale: "40",
        },
        {
            id: 3,
            title: "GLOSS BOMB ICE",
            img: "https://www.sephora.com/productimages/sku/s2616613-main-zoom.jpg?imwidth=315",
            price: "30",
            sale: "24",
        },
        {
            id: 4,
            title: "GLOS LIP LUMINIZER",
            img: "https://media.ulta.com/i/ulta/2592391?w=1020&h=1020",
            price: "32",
            sale: "27",
        },
    ];
    return (
        <div>
            <h1 className="special-offers">Cosmetics</h1>
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


export default Cosmetics;