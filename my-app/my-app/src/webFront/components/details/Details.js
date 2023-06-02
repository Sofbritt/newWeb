import React from "react";
import { Link } from 'react-router-dom';
import "./Details.css";
import Header from '../header/Header'
import Footer from "../footer/Footer";

function Details() {

    // const remove = (id) => {

    //     axios.delete('http://localhost:4500/movieDelete/' + id).then((res) => {
    //         console.log(res)
    //         navigate('/')
    //     })
    // };


    return (
        <div>
            <Header />
<br/>
            <div className="link">
                <Link to={'/'}> <h5 className="linkPath">Main Page</h5> </Link>
                <Link to={'/clothes'}> <h5 b className="linkPath">Clothes</h5> </Link>
                <Link to={'/cosmetics'}><h5 className="linkPath">Cosmetics</h5></Link>
            </div> <hr/>
            <br/>

            <div className="details">
                <img src="https://www.famousfootwear.com/blob/product-images/20000/29/02/6/29026_single_feed800.jpg" className="details-img" />
                <h2 className="name-of-product">Name of product</h2> <br />
                <h2 className="price-of-product">price</h2> <br />
                <h3 className="category">Category</h3>
                <h3 className="country-of-product">Country</h3>
                <button className="add-in-basket">Add in Basket</button>
                {/* <button className='delete' type='button' onClick={() => remove(data._id)} >delete</button> */}
            </div>  <hr/>
            <Footer/>

        </div>
    )
}

export default Details;