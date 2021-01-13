import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.scss'
import certBona from '../img/certifications-bona-footer.jpg'
import certNwfa from '../img/certifications-nwfa-footer.jpg'
import certLagler from '../img/certifications-lagler-footer.jpg'

function Footer() {
    return (
        <div className="footer">
            <div className="foo footerLinks">
                <Link to="/">Home</Link>
                <Link to="/ourServices">Our Services</Link>
                <Link to="/whyWorkWithUs">Why Work With Us</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="foo footerContact">
                <h4>Contact Us</h4>
                <p className="number">(269) 208-5144</p>
                <p className="email">contact@mattsonfloor.com</p>
                <div className="socials">
                    <Link to="/facebook"><i className="fab fa-facebook fa-2x"></i></Link>
                    <Link to="/instagram"><i className="fab fa-instagram fa-2x"></i></Link>
                    <Link to="/twitter"><i className="fab fa-twitter fa-2x"></i></Link>
                </div>
                <Link to="/contact"><button>REQUEST A QUOTE</button></Link>
            </div>
            <div className="foo footerServices">
                <h4>Service Area</h4>
                <p>Our hardwood floor specialists serve the southwest Michigan and Michiana area</p>
            </div>
            <div className="foo footerCertified">
                <h4>Certified Professionals</h4>
                <div className="certImgs">
                    <img src={certBona} alt="" />
                    <img src={certNwfa} alt="" />
                    <img src={certLagler} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
