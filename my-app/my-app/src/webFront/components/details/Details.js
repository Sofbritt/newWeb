import React from "react";
import { Link } from 'react-router-dom';
import "./Details.css";

function Details() {

    // const remove = (id) => {

    //     axios.delete('http://localhost:4500/movieDelete/' + id).then((res) => {
    //         console.log(res)
    //         navigate('/')
    //     })
    // };


    return (
        <div>
            <div className="link">
                <Link to={'/'}> <h2>Main Page</h2> </Link>
                <Link to={'/cosmetics'}><h2>Cosmetics</h2></Link>
                <Link to={'/clothes'}> <h2>Clothes</h2> </Link>
            </div>

            <div className="details">
                <img src="https://www.famousfootwear.com/blob/product-images/20000/29/02/6/29026_single_feed800.jpg" className="details-img" />
                <h2 className="name-of-product">Name of product</h2> <br />
                <h2 className="price-of-product">price</h2> <br />
                <h3 className="category">Category</h3>
                <h3 className="country-of-product">Country</h3>
                <button className="add-in-basket">Add in Basket</button>
                {/* <button className='delete' type='button' onClick={() => remove(data._id)} >delete</button> */}
            </div>
        </div>
    )
}

export default Details;