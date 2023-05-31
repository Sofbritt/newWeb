import React from "react";
import './Feedback.css'

function Feedback() {
    return (
        <div>
            <h1 className="feedback-title">Feedback</h1> <br/>
            <div className="feedback">
                
                <form>
                    <input className="feedback-inp" type="text" placeholder="Name"/> <br/>
                    <input className="feedback-inp" type="text" placeholder="E-mail"/> <br/>
                   <textarea className="feedback-textarea" placeholder="Write a Message"></textarea> <br/>
                   <button className="feedback-btn">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Feedback;