import React from "react";
import { Link } from 'react-router-dom';
import "./Details.css";
import Header from '../header/Header'
import Footer from "../footer/Footer";
import RelatedProducts from '../relatedProducts/RelatedProducts';

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
            <br />
            <div className="link">
                <Link to={'/'}> <h5 className="linkPath">Main Page</h5> </Link>
                <Link to={'/clothes'}> <h5 b className="linkPath">Clothes</h5> </Link>
                <Link to={'/cosmetics'}><h5 className="linkPath">Cosmetics</h5></Link>
            </div> <hr />
            <br />

            <div className="details">
                <img src="https://www.famousfootwear.com/blob/product-images/20000/29/02/6/29026_single_feed800.jpg" className="details-img" />
                <div className="details-info">
                    <h2 className="name-of-product">Name of product</h2>
                    <h3 className="category">Category</h3>
                    <h3 className="country-of-product">Country</h3>
                    <h3 className="price">50 $</h3>
                    <h3 className="price-sale">40 $</h3>
                    <button className="add-in-basket">Add in Basket</button>
                </div>
                {/* <button className='delete' type='button' onClick={() => remove(data._id)} >delete</button> */}
            </div>  <hr />
            <RelatedProducts/> <br/>
            <Footer />

        </div>
    )
}

export default Details;