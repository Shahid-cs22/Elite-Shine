import React from "react";
import "./Footer.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Get In Touch */}
                <div className="footer-col">
                    <h4>Get In Touch</h4>

                    <p className="footer-item">📍 Usman Street, Kamararjapuram</p>
                    <p className="footer-item">📞 +91 70101 81206</p>
                    <p className="footer-item">✉️ seyadabu887@hmail.com</p>

                    <div className="social-icons">
                         <a href="https://www.instagram.com/elite_shine_car_wash_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                        <a href="https://www.facebook.com/share/1HCTgGZcrj/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                        <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
                       

                    </div>
                </div>

                {/* Popular Links */}
                <div className="footer-col">
                    <h4>Popular Links</h4>
                    <ul>
                        <li>› About Us</li>
                        <li>› Contact Us</li>
                        <li>› Our Service</li>
                        <li>› Service Points</li>
                        <li>› Pricing Plan</li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="footer-col">
                    <h4>Useful Links</h4>
                    <ul>
                        <li>› Terms of use</li>
                        <li>› Privacy policy</li>
                        <li>› Cookies</li>
                        <li>› Help</li>
                        <li>› FAQs</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-col">
                    <h4>Newsletter</h4>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <button>Submit</button>
                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Elite Shine, All Right Reserved.
            </div>
        </footer>
    );
};

export default Footer;
