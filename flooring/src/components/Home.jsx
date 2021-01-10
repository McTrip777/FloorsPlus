import React from 'react'
import '../styles/home.scss'
import { HashLink as Link } from 'react-router-hash-link'
import Player from './Player'
import Commercial from '../img/Commercial.jpg'
import Custom from '../img/Custom.jpg'
import NewInstalls from '../img/NewInstalls.jpg'
import Refinishing from '../img/Refinishing.jpg'
import Michigan from '../img/michigan-indiana-map.png'
import Carousel from './Carousel'
import Footer from './Footer'

function Home() {
    const playerProps = { playing: true };
    return (
        <div className="homeContainer">
            <Carousel />
            <Player {...playerProps} />
            <div className="boxes">
                <div className="box one">
                    <Link to="/ourServices#newInstalls"><img src={NewInstalls} /></Link>
                    <Link to="/ourServices#newInstalls"><p>New Installs</p></Link>
                </div>
                <div className="box two">
                    <Link to="/ourServices#refinishing"><img src={Refinishing} /></Link>
                    <Link to="/ourServices#refinishing"><p>Refinishing</p></Link>
                </div>
                <div className="box three">
                    <Link to="/ourServices#customCraftsmanship"><img src={Custom} /></Link>
                    <Link to="/ourServices#customCraftsmanship"><p>Custom Craftsmanship</p></Link>
                </div>
                <div className="box four">
                    <Link to="/ourServices#commercial"><img src={Commercial} /></Link>
                    <Link to="/ourServices#commercial"><p>Commercial</p></Link>
                </div>
            </div>
            <div className="michiganArea">
                <h3>
                    Hardwood floor leaders in southwest Michigan and Michiana areas
                </h3>
                <img src={Michigan} alt="" />
            </div>
            <div className="workWithUs">
                <h3>Why Work With Us</h3>
                <ul className="">
                    <li className="one"><i className="fa fa-check"></i>Three-generation quality craftsmanship since 1961</li>
                    <li className="two"><i className="fa fa-check"></i>Only use highest-quality finishing products on your hardwood floor</li>
                    <li className="three"><i className="fa fa-check"></i>Dust containment means a clean job from start to finish</li>
                    <li className="four"><i className="fa fa-check"></i>Bona-certified craftsmen bring expertise to any creative request</li>
                </ul>
                <Link to="/whyWorkWithUs"><button>LEARN MORE</button></Link>
            </div>
            <div className="hireUs">
                <h3>Like What You See?  Ready to Hire Us?</h3>
                <Link to="/contact"><button>REQUEST A QUOTE</button></Link>
            </div>
            <Footer />
        </div>
    )
}

export default Home
