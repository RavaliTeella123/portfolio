
import "./FooterStyles.css";
import React from "react";

import { FaHome, FaLinkedin, FaMailBulk,} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={
                    {color:"#fff",marginRight:"2rem"}}/>
                    <div>
                    <p>Sambara.</p>
                    <p>Parvathipuram.</p>
                    </div>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk
                          size={20}
                          style={{ color:"fff",
                          marginRight:"2rem"}} />
                      ravalitella123@gmail.com
                    </h4>
                </div>


            </div> 

            <div className="right">
                <h4>About me</h4>
                <p>Iam Ravali Teella,currently pursuing B.Tech final year in Computer Science & Engineering at RGUKT SRIKAKULAM.</p>
                <div className="social">
                <FaLinkedin
                          size={20}
                          style={{ color:"fff",
                          marginRight:"2rem"}} />

                </div>

            </div>        
        </div>
    </div>
  )
}

export default Footer;