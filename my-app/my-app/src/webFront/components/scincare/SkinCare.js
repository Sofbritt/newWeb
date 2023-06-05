import React from "react";
import { Link } from "react-router-dom";
import './Skincare.css'
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

function SkinCare() {
    let arr = [
        {
            id: 1,
            title: "SERUM CLEANSER CREAM",
            img: "https://m.media-amazon.com/images/I/61YprWhNcCL._AC_UF1000,1000_QL80_.jpg",
            price: "80",
            sale: "65",
        },
        {
            id: 2,
            title: "SERUM",
            img: "https://www.sephora.com/productimages/sku/s2418846-main-zoom.jpg?imwidth=2000",
            price: "45",
            sale: "38",
        },
        {
            id: 3,
            title: "CLEANSER",
            img: "https://www.sephora.com/productimages/sku/s2418796-main-zoom.jpg",
            price: "45",
            sale: "40",
        },
        {
            id: 4,
            title: "CREAM",
            img: "https://media1.popsugar-assets.com/files/thumbor/jTCmafpfBOQcrj5KSZgNh_v9vz0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/12/01/715/n/1922153/08ee366a5fc66b1075dce8.67674551_/i/jlo-beauty-products-first-look.jpg",
            price: "55",
            sale: "45",
        },
    ];
    return (
        <div>
        <h1 className="special-offers">Skin Care</h1>
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

export default SkinCare;