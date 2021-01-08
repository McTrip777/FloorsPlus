import React from 'react'
import '../styles/home.scss'
import { Link } from 'react-router-dom'
import Player from './Player'
import Commercial from '../img/Commercial.jpg'
import Custom from '../img/Custom.jpg'
import NewInstalls from '../img/NewInstalls.jpg'
import Refinishing from '../img/Refinishing.jpg'

function Home() {
    const playerProps = { playing: true };
    return (
        <div className="homeContainer">
            <Player {...playerProps} />
            <div className="boxes">
                <div className="box one">
                    <Link><img src={NewInstalls} /></Link>
                    <Link><p>New Installs</p></Link>
                </div>
                <div className="box two">
                    <Link><img src={Refinishing} /></Link>
                    <Link><p>Refinishing</p></Link>
                </div>
                <div className="box three">
                    <Link><img src={Custom} /></Link>
                    <Link><p>Custom Craftsmanship</p></Link>
                </div>
                <div className="box four">
                    <Link><img src={Commercial} /></Link>
                    <Link><p>Commercial</p></Link>
                </div>
            </div>
        </div >
    )
}

export default Home
