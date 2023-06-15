import React from "react";
import "react-multi-carousel/lib/styles.css";
import './RelatedProducts.css';
import Slide from "../slide/Slide";



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
            <Slide arr={arr} />
        </div>
    </div>
    )
}

export default RelatedProducts;