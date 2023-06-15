import React from "react";
import './Others.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Slide from '../slide/Slide';



function Others() {
    const [data, setData] = useState([]);

  
    useEffect(() => {
        axios.get("http://localhost:4500/api/item?category=others")
            .then((response) => setData(response.data))
    },[])
  
    return (
        <div>
        <h1 className="special-offers">Others</h1>
        <div className="offers ">
            <Slide arr={data}/> 
        </div>
        <div className="see-more">
            <button className="see-more-but">See more</button>
        </div>
    </div>

    )
}

export default Others;