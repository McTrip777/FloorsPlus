import React from 'react'
import Family from '../img/Family.jpg'
import BonaLarge from '../img/bonaLarge.jpg'
import LaglerLarge from '../img/laglerLarge.jpg'
import NwfaLarge from '../img/nwfaLarge.jpg'
import HardwoodFinishes from '../img/hardwoodFinishes.jpg'
import "../styles/whyWorkWithUs.scss"

function WhyWork() {
    return (
        <div className="whyWorkWithUsContainer">
            <h1 className="title">Why Work With Us</h1>
            <p className="introduction">We know you have several options when choosing a hardwood flooring contractor to work with, but here’s a few reasons that sets us apart from our competition: </p>
            <div className="box boxOne">
                <div className="boxOneDescription">
                    <h2>Experience spanning three generations</h2>
                    <p>Since 1961, the wealth of knowledge and experience that comes from almost 60 years in the hardwood flooring business, along with the Mattson family name reputation to preserve after three generations, means your flooring needs are in good hands:</p>
                    <ul>
                        <li>We are here to stay, and our customers continue to uphold our reputation for quality and craftsmanship</li>
                        <li>Although we are always learning, there’s few wood combinations and custom floor layouts we haven’t tackled already</li>
                    </ul>
                </div>
                <img src={Family} alt="" />
            </div>
            <div className="box boxTwo">
                <div className="boxTwoDescription">
                    <h2>Dust Containment</h2>
                    <p>If you or someone you know has ever had a hardwood floor refinished, you know how your home can be covered with a fine layer of saw dust within minutes and can be cleaning up the mess for weeks after, no matter how well the rooms being worked on are sealed with plastic.</p>
                    <p>Unlike the vast majority of our competition, all our hardwood flooring refinishing is done with dust containment equipment, leaving your home with hardly any saw dust.</p>
                </div>
            </div>
            <div className="box boxThree">
                <div className="boxThreeDescription">
                    <h2>Certified Professionals</h2>
                    <p>Floors Plus is a Bona Certified Craftsman, trained and certified by Bona for their complete hardwood floor finishing system.  The Five-Star advantage* includes:</p>
                    <ol>
                        <li><h4>Durable & Beautiful Finishes:</h4><p>Bona water-based finishes dry 3-4 times faster than other products, and quickly diminishing odor means you get back in your home in a faster time.</p></li>
                        <li><h4>Clean Air, No Dust:</h4><p>Our dust containment systems generate 99.8% less dust in the air than the traditional sanding process, making the air safer to breathe and the clean-up after the process a breeze.</p></li>
                        <li><h4>Lifetime Support:</h4><p>For the life of the floors, Bona has the products and services that will support homeowners in maintaining beautiful floors for a lifetime.</p></li>
                        <li><h4>Insured, Trained and Trusted: </h4><p>Every BCC is required to be insured and to participate in Bona’s rigorous training regimen to make sure every floor is done right every time.</p></li>
                    </ol>
                    <p className="extra">* as taken from Bona’s promotional materials</p>
                </div>
                <div className="certificatesContainer">
                    <img src={BonaLarge} alt="" />
                    <img src={LaglerLarge} alt="" />
                    <img src={NwfaLarge} alt="" />
                </div>
            </div>
            <div className="box boxFour">
                <img src={HardwoodFinishes} alt="" />
                <div className="boxFourDescription">
                    <h2>Finishing Lines</h2>
                    <p>Aside from our time-tested excellent craftsmanship, what truly sets us apart are the high-quality materials we use on every floor. High-end commercial-grade quality finishes are the only way to make a beautiful hardwood floor last for a long time.</p>
                    <p>From sandpapers to stains to equipment to final finish, we prefer working with the following highest-quality products:</p>
                    <a href="https://us.bona.com/" target="_blank"><button>BONA FINISHING LINES</button></a>
                </div>
            </div>
        </div>
    )
}

export default WhyWork
