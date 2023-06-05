import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './RelatedProducts.css';

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

function RelatedProducts() {
    let arr = [
        {
            id: 1,
            title: "FLORAL PRINT BLUE DRESS ",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-floral-print-blue-dress-1-E00897474_1512x.jpg?v=1685653545",
            price: "45",
            sale: "37",
        },
        {
            id: 2,
            title: "LIGHT BLUE DRESS",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-asymmetric-light-blue-dress-1-E00897737_d7b749c4-9cc7-4bce-8b36-9f38a55ec105_720x.jpg?v=1685604669",
            price: "45",
            sale: "40",
        },
        {
            id: 3,
            title: "HARLEY DAVIDSON  Y2K VEST",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-harley-davidson-embroidered-vest-1-E00825495_d2144ef6-837b-48a0-81ba-9695b43e5917_720x.jpg?v=1685511633",
            price: "45",
            sale: "38",
        },
        {
            id: 4,
            title: "Y2K BAGUETTE BAG ",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-diamonte-detail-y2k-leather-baguette-bag-1-E00916387_1512x.jpg?v=1682456919",
            price: "47",
            sale: "30",
        }

        
    ];
    return (
        <div>
        <h1 className="special-offers">Related  Products</h1>
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
    </div>
    )
}

export default RelatedProducts;