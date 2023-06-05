import React from 'react'
import { Link } from 'react-router-dom';
import "./SpecialOffers.css";
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
function SpecialOffers() {
    let arr = [
        {
            id: 1,
            title: "STEVE MADDEN SANDANLS",
            img: "https://cdn.cliqueinc.com/posts/296013/shoe-trends-2022-296013-1639946999768-product.700x0c.jpg",
            price: "12 000",
            sale: "100",
        },
        {
            id: 2,
            title: "PINK FLORAL BLOUSE ",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-pink-floral-blouse-1-E00905259_9d036c11-b0c6-4066-aca2-f0ddec4c8efa_720x.jpg?v=1685604707",
            price: "35$",
            sale: "28",
        },
        {
            id: 3,
            title: "FLORAL HAWAIIAN SHIRT",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-floral-hawaiian-shirt-1-E00907060_1512x.jpg?v=1685654004",
            price: "28$",
            sale: "18",
        },
        {
            id: 4,
            title: "BLUE MIDI SKIRT ",
            img: "https://shop.beyondretro.com/cdn/shop/products/beyond-retro-label-womens-blue-midi-skirt-1-E00836105_1512x.jpg?v=1685654034",
            price: "30",
            sale: "24",
        },
    ];

    return (
        <div>
            <h1 className="special-offers">Special Offers</h1>
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

export default SpecialOffers;