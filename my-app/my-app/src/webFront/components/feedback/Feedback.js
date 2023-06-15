import React from "react";
import './Feedback.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { BsFillCarFrontFill, BsCreditCard, BsPhone } from "react-icons/bs";

function Feedback() {
  return (
    <div>
      <h1 className="feedback-title">Feedback</h1> <br />
      <div className="feedback">
        <form>
          <input className="feedback-inp" type="text" placeholder="Name" />
          <br />
          <input
            className="feedback-inp"
            type="text"
            placeholder="E-mail"
          />
          <br />
          <textarea
            className="feedback-textarea"
            placeholder="Write a Message"
          ></textarea>
          <br />
          <button className="feedback-btn">Send</button>
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