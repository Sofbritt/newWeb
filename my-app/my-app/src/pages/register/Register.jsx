import React from "react";
import "./Register.css"
import { useState } from "react"
import axios from 'axios'

const url = "http://localhost:4500/api/auth/register"



export default function Register(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, { name, email, password })
            console.log(response.data)

        } catch (e) {
            console.log('error')
        }
    }



    return (
        <div className="Auth-form-container">

            <form className="Auth-form" >
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onSubmit={() => handlesubmit()}>
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

