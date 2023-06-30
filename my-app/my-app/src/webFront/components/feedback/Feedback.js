import React from "react";
import './Feedback.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { BsFillCarFrontFill, BsCreditCard, BsPhone } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";




function Feedback() {

  function sendEmail() {

    if (feedbackEmail && feedbackName && message) {
      axios.post("http://localhost:4500/api/feedback/sendfeedback", {
        feedbackName,
        feedbackEmail,
        message

      })
        .then(() => alert("Message Send Successfully"))

    }
    return alert("fill in all the fields to continue")
  }
  const [feedbackEmail, setFeedbackEmail] = useState('')
  const [feedbackName, setFeedbackName] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div>
      <h1 className="feedback-title">Feedback</h1> <br />
      <div className="feedback">
        <form>
          <input className="feedback-inp" type="text" placeholder="Name"
            value={feedbackName}
            onChange={(e) => setFeedbackName(e.target.value)} />

          <br />
          <input
            className="feedback-inp"
            type="text"
            placeholder="E-mail"
            value={feedbackEmail}
            onChange={(e) => setFeedbackEmail(e.target.value)}
          />
          <br />
          <textarea
            className="feedback-textarea"
            placeholder="Leave a Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <button className="feedback-btn" onClick={() => sendEmail()}>Send</button>
        </form>
      </div>
      <br />
      <div className="feedback-icons">
        <Link className="feedback-link">
          <BsFillCarFrontFill className="delevery-icons" />
          <h5 className="delivery-titles">Delivery</h5>
        </Link>
        <Link className="feedback-link">
          <BsCreditCard className="delevery-icons" />
          <h5>Bonuse Card</h5>
        </Link>
        <Link className="feedback-link">
          <BsPhone className="delevery-icons" />
          <h5>Mobile App</h5>
        </Link>
      </div>
    </div>
  );
}

export default Feedback;