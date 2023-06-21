import React from "react";
import "./Basket.css";
import Others from "../../webFront/components/others/Others";
import { BsXCircle } from "react-icons/bs";
import { useState } from "react";



function Basket() {
    const [count, setCount] = useState(0)
    return (
        <div>

            <Others /> <br />
            <h3 className="basket-title">Basket</h3> <h5 className="clean-basket-title">Clean Basket</h5>
            <div className="clean-basket-div">
                <div className="basket">


                    <img className="basket-img" src="https://static.thcdn.com/images/large/original//productimg/1600/1600/11434754-8895036866079892.jpg" />
                    <div className="basket-product-info" >
                        <h5>basket product info</h5>

                    </div>
                    <div className="basket-counter">
                        <button className="add-btn" onClick={() => setCount(count + 1)}>+</button>
                        <span>{count} </span>
                        <button className="minus-btn" onClick={() => setCount(count - 1)}>-</button>
                    </div>
                    <div className="bonus">
                        <h5> 0 Bonus</h5>
                    </div>
                    <div className="prices">
                        <h5 className="price"> 1645</h5>
                        <h5 className="sale-price"> 1500</h5>
                    </div>
                    <div className="x-icon">
                        <BsXCircle />
                    </div>

                </div>
                <div className="total-div">
                    <div className="total1-div">
                        <h4 className="title-total">Total</h4>
                        <h5 className="total-price"> 4990$</h5>
                    </div>
                    <div className="bonus-points">
                        <h5 className="bonus">Accumulated bonus</h5>
                        <h5 className="points">0 Points</h5>
                    </div>
                    <button className="next-btn">NEXT</button>

                </div>

            </div>



        </div>
    )
}

export default Basket;