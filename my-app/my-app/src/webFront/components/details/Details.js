import React from "react";
import { Link } from 'react-router-dom';
import "./Details.css";
import RelatedProducts from '../relatedProducts/RelatedProducts';
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";

function Details() {
    const [count, setCount] = useState(0);
    // const remove = (id) => {

    //     axios.delete('http://localhost:4500/movieDelete/' + id).then((res) => {
    //         console.log(res)
    //         navigate('/')
    //     })
    // };


    return (
        <div>
            <div className="link">
                <Link className="link-titles" style={{ order: "0" }} to={"/cosmetics"}>
                    Cosmetics
                </Link>
                <Link className="link-titles" style={{ order: "-1" }} to={"/clothes"}>
                    Clothes
                </Link>
                <Link className="link-titles" style={{ order: "-2" }} to={"/"}>
                    Main Page
                </Link>
            </div>
            <div>
                <Link className="back-link" to={""}></Link>
            </div>
            <div className="details">
                <img
                    alt=""
                    src="https://png.pngtree.com/png-vector/20221003/ourmid/pngtree-15-discount-tag-png-image_6262158.png"
                    className="saleImg"
                /> <br />

                <img
                    alt=""
                    src="https://www.famousfootwear.com/blob/product-images/20000/29/02/6/29026_single_feed800.jpg"
                    className="details-img"
                />


                <div className="details-info">
                    <h2 className="name-of-product">Name of product</h2>
                    <hr />
                    <div className="titles-of-details">
                        <p>Category</p>
                        <p className="p-of-category">
                            Others
                            <Icon.ArrowRightShort className="short-arrow" />
                        </p>
                    </div>
                    <div className="titles-of-details">
                        <p>Country</p>
                        <p className="p-of-category">
                            Others <Icon.ArrowRightShort className="short-arrow" />
                        </p>
                    </div>
                    <div className="titles-of-details">
                        <p> Manufacturer</p>
                        <p className="p-of-category">
                            Manufacturer   <Icon.ArrowRightShort className="short-arrow" />
                        </p>
                    </div>

                    <div className="counter">
                        <div className="counter-div">
                            <button className="count-btn" onClick={() => setCount(count - 1)} >-</button>
                            <span>{count}</span>
                            <button className="count-btn" onClick={() => setCount(count + 1)}>+</button>
                            <button className="add-in-basket">Add in Basket</button>
                        </div>
                        <div className="price-main-div">
                            <div className="prices-div">
                                <p className="prices-sale">33 500$</p>
                                <p className="prices">31 490$</p>
                            </div>
                            <div>
                                <p className="last-price">last month's price</p>
                                <p className="latest-price">33 444$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <RelatedProducts /> <br />

        </div>
    );
}

export default Details;