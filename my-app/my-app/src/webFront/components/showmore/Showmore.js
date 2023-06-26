import React from "react";
import "./Showmore.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from "axios"
import { BsArrowLeft } from "react-icons/bs";



function ShowMore({ category }) {
    const [data, setData] = useState([]);

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        axios.get("http://localhost:4500/api/item?category" + category)
            .then(response => setData(response.data))
    }, [category])
    return (
        <div className="show-more">

            <div className="link">

                <Link className="link-titles" style={{ order: "-1" }} to={"/clothes"}>
                    Clothes
                </Link>
                <Link className="link-titles" style={{ order: "-2" }} to={"/"}>
                    Main Page
                </Link>

            </div>
            <h3 className="name-of-category">Category Name </h3>


            <Link to={'/'}>
                <BsArrowLeft className="left-icon" />
            </Link>
            <div className="show-more-div">
                <div className="categories">
                    <div className="filtr">
                        <h3 className="title-filtr">Filtr</h3>
                        <label class="switch" for="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <div class="slider round"></div>
                        </label>
                        <h4>Sale</h4>
                        <br />
                    </div>
                    <h3 className="title-category"> Cateogries</h3>
                    <Link to={"/cosmetics"} className="link-in-show">
                        <h5>Cosmetics</h5>
                    </Link>
                    <Link to={'/skincare'} className="link-in-show">
                        <h5>Skin Care</h5>

                    </Link>

                </div>
                {/* {data.map((item) => {
                    <div>
                        <img src={item.img} className="offersImg" />
                        <h2 className="offersTitle">{item.title}</h2>
                        <h3 className="price">{item.price} $</h3>
                        <h3 className="price-sale">{item.sale} $</h3>
                        <button className="add">Add in Basket</button>

                    </div>
                })} */}

                <div className="showmore-products">
                    <h2>img</h2>
                    <h5>55$</h5>
                    <button className="add-showmore">Add</button>
                </div>
                <div className="showmore-products">
                    <h2>img</h2>
                    <h5>55$</h5>
                    <button className="add-showmore">Add</button>
                </div>
                <div className="showmore-products">
                    <h2>img</h2>
                    <h5>55$</h5>
                    <button className="add-showmore">Add</button>
                </div>





            </div>


        </div>
    )
}

export default ShowMore;