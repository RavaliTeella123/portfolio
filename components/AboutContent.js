import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from "react";
import React1 from "../assets/react1.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a Final year Student in Computer Science and Engineering Who is very passionate to pursue carrier in web development.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt=""true/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent;