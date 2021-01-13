import React, { useEffect, useState } from 'react'
import '../styles/services.scss'
import NewInstalls from '../img/NewInstalls.jpg'
import Refinishing from '../img/Refinishing.jpg'
import Custom from '../img/customCraft.jpg'
import Commercial from '../img/commercial.jpeg'

function Services() {

    const [firstBlock, setFirstBlock] = useState(false)
    const [secondBlock, setSecondBlock] = useState(false)
    const [thirdBlock, setThirdBlock] = useState(false)
    const [fourthBlock, setFourthBlock] = useState(false)

    let blockVisability = document.getElementsByClassName("block")

    const clickableOne = (value) => {
        console.log("here", value)
        if (value === "clickableImgOne") {
            setFirstBlock(!firstBlock)
        } else if (value === "clickableImgTwo") {
            setSecondBlock(!secondBlock)
        } else if (value === "clickableImgThree") {
            setThirdBlock(!thirdBlock)
        } else if (value === "clickableImgFour") {
            setFourthBlock(!fourthBlock)
        }
    }
    // console.log(firstBlock)
    useEffect(() => {
        for (let i = 0; i < blockVisability.length; i++) {
            // console.log(blockVisability[i].className.split(' ')[0])
            if (blockVisability[i].className.split(' ')[0] === "newInstallsContainer") {
                if (firstBlock) {
                    document.getElementsByClassName("newInstallsContainer")[0].style.visibility = "visible"
                } else {
                    document.getElementsByClassName("newInstallsContainer")[0].style.visibility = "hidden"
                }
            } else if (blockVisability[i].className.split(' ')[0] === "refinishingContainer") {
                if (secondBlock) {
                    document.getElementsByClassName("refinishingContainer")[0].style.visibility = "visible"
                } else {
                    document.getElementsByClassName("refinishingContainer")[0].style.visibility = "hidden"
                }
            } else if (blockVisability[i].className.split(' ')[0] === "customCraftsmanshipContainer") {
                if (thirdBlock) {
                    document.getElementsByClassName("customCraftsmanshipContainer")[0].style.visibility = "visible"
                } else {
                    document.getElementsByClassName("customCraftsmanshipContainer")[0].style.visibility = "hidden"
                }
            } else if (blockVisability[i].className.split(' ')[0] === "commercialContainer") {
                if (fourthBlock) {
                    document.getElementsByClassName("commercialContainer")[0].style.visibility = "visible"
                } else {
                    document.getElementsByClassName("commercialContainer")[0].style.visibility = "hidden"
                }
            }
        }
    }, [firstBlock, secondBlock, thirdBlock, fourthBlock])
    // console.log(firstBlock)

    return (
        <div className="serviceContainer">
            <div id="newInstalls" className="blockContainer">
                <div className="clickableImg clickableImgOne" onClick={() => clickableOne("clickableImgOne")}>
                    <h4 className="serviceTitles"> New Installs </h4>
                    <img src={NewInstalls} alt="" />
                </div>
                <div className="newInstallsContainer block" >
                    <p>Mattson Floor can install new hardwood flooring in any location in your home or business office. We can tackle any challenge and make sure the finished product is of the highest quality.</p>
                    <ul>
                        <li>We install a wide variety of hardwood floors – oak, maple, walnut, cherry, and more</li>
                        <li>We only use flooring materials we would desire in our own home</li>
                        <li>Customization is no problem – pattern, borders, transitions</li>
                        <li>Highest quality finishing products help your new install stand out for years</li>
                    </ul>
                </div>
            </div>
            <div id="refinishing" className="blockContainer">
                <div className="clickableImg clickableImgTwo" onClick={() => clickableOne("clickableImgTwo")}>
                    <h4 className="serviceTitles"> Refinishing </h4>
                    <img src={Refinishing} alt="" />
                </div>
                <div className="refinishingContainer block">
                    <h5>Floors can be repaired or restored to a like-new finish in just a short time.</h5>
                    <p>After years of foot traffic, drops, gauges, spills, and sun exposure, your wood floors need new life.  We love to help bring hardwood floors back to their original beauty and re-inspire with a new finish.</p>
                    <p>We begin by sanding down to your bare wood with dust-containment technology, we then optionally stain the floor to whatever custom color you desire, and we finish by applying multiple coats of high-quality commercial-grade finish in various sheens (matte, satin, etc.) to help protect and give you a beautifully finished floor.</p>
                </div>
            </div>
            <div id="customCraftsmanship" className="blockContainer">
                <div className="clickableImg clickableImgThree" onClick={() => clickableOne("clickableImgThree")}>
                    <h4 className="serviceTitles">Custom Craftsmanship</h4>
                    <img src={Custom} alt="" />
                </div>
                <div className="customCraftsmanshipContainer block">
                    <h5>After three generations and many decades of fashions, we have seen our share of custom hardwood floor dreams that we’ve helped make a reality.</h5>
                    <p>Mattson Floor has created a wide range of custom solutions, some of which include:</p>
                    <ul>
                        <li>Hand scraping and distressing to simulate an aged, reclaimed, or old world look. This can be done on new or existing wood floors</li>
                        <li>Intricate borders in contrasting woods or colors. The borders can be the perimeter of a room or within a room space to accent other room decór.</li>
                        <li>Mixing different wood species can help create a beautiful effect.</li>
                        <li>Graphics, monograms and company logos are easily created with wood and can be installed in entryways, foyers, or as center pieces.</li>
                    </ul>
                    <p>Contact us and we can visit your space, evaluate all the options, and provide expertise and ideas on what can work best in your unique circumstances.</p>
                </div>
            </div>
            <div id="commercial" className="blockContainer">
                <div className="clickableImg clickableImgFour" onClick={() => clickableOne("clickableImgFour")}>
                    <h4 className="serviceTitles">Commercial</h4>
                    <img src={Commercial} alt="" />
                </div>
                <div className="commercialContainer block">
                    <h5>What could be more beautiful than a new hardwood floor installation in a home? A commercial installation, of course – all the more hardwood beauty to enjoy!</h5>
                    <p>Commercial hardwood floors require their own unique care – from in-floor signage and materials as seen in gym floors to the high wear-and-tear of a church stage. Our certified professionals have training in working in these environments and we only use the highest-quality materials and finishes to finish the demanding job of a commercial place.</p>
                </div>
            </div>
        </div >
    )
}

export default Services
