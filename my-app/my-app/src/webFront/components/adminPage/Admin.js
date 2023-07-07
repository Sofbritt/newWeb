import React from "react";
import "./Admin.css"
import { useState } from "react";
import axios from "axios";


function Admin() {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [category, setCategory] = useState('')
    const [country, setCountry] = useState('')
    const [price, setPrice] = useState('')
    const [sale, setSale] = useState('')
    const [manufacturer, setManufacturer] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:4500/api/item/", { title, img, category, country, price, sale, manufacturer })
            .then((res) => {
                console.log(res.data)
                setTitle("")
                setCategory("")
                setImg("")
                setCountry("")
                setPrice("")
                setSale("")
                setManufacturer("")
                {
                    if (res.status === 200) {
                        setOpen(true)
                        setTimeout(() => {
                            setOpen(false)
                        }, 3000)
                    }
                }
            })


    }


    return (
        <div> <br />
       
        
            <div className="title-of-post" ><h4>Post a new item</h4></div>
            {open === true && (
                <div className="div-of-postAlert"> 
                    <div className="alert-posted">Posted </div>
                </div>
            )}

            <div className="admin-form"  >
                <form onSubmit={handlesubmit} >
                    <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" placeholder="img" value={img} onChange={(e) => setImg(e.target.value)} />
                    <input type="text" placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <input type="text" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                    <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" placeholder="sale" value={sale} onChange={(e) => setSale(e.target.value)} />
                    <input type="text" placeholder="manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
                    <div className="postBtn-div">
                        <button className="post-btn" type="submit">POST</button>
                    </div>
                </form>

            </div>

        </div>

    )
}


export default Admin;