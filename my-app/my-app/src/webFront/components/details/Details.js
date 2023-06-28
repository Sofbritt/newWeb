import React from "react";
import { Link } from 'react-router-dom';
import "./Details.css";
import { BsArrowRight } from "react-icons/bs";
import RelatedProducts from '../relatedProducts/RelatedProducts';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState({});
    const params = useParams()



    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        axios
            .get("http://localhost:4500/api/item/" + params.id)
            .then((response) => setData(response.data))
    }, [params.id])


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
                    src={data.img}
                    className="details-img"
                />


                <div className="details-info">
                    <h2 className="name-of-product">{data.title} </h2>
                    <hr />
                    <div className="titles-of-details">
                        <p>Category</p>
                        <p className="p-of-category">
                            {data.category}
                            <BsArrowRight className="short-arrow" />
                        </p>
                    </div>
                    <div className="titles-of-details">
                        <p>Country</p>
                        <p className="p-of-category">
                            {data.country} <BsArrowRight className="short-arrow" />
                        </p>
                    </div>
                    <div className="titles-of-details">
                        <p> Manufacturer</p>
                        <p className="p-of-category">
                            {data.manufacturer}   <BsArrowRight className="short-arrow" />

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
                                <p className="prices-sale"> {data.price} $</p>
                                <p className="prices"> {data.sale} $</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <RelatedProducts category={data.category} /> <br />

        </div>
    );
}

export default Details;