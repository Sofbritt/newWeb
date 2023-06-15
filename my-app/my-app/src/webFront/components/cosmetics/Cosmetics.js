import React from "react";
import "./Cosmetics.css";
import Slide from '../slide/Slide';
import { useEffect, useState } from "react";
import axios from "axios";



function Cosmetics() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:4500/api/item?category=skincare")
            .then((response) => setData(response.data))
    },[])

    return (
        <div>
            <h1 className="special-offers">Cosmetics</h1>
            <div className="offers ">
            <Slide arr={data} />
            </div>
            <div className="see-more">
                <button className="see-more-but">See more</button>
            </div>
        </div>
    )
}


export default Cosmetics;