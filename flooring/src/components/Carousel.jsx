import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Wood1 from '../img/wood1.jpg'
import Wood2 from '../img/wood2.jpg'
import Wood3 from '../img/wood3.jpg'

const Carousel = () => {

    const imgArr = [Wood1, Wood2, Wood3]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const next = (current + 1) % imgArr.length;
        const id = setTimeout(() => setCurrent(next), 7000);
        return () => clearTimeout(id);
    }, [current]);

    return (
        <div className="carouselContainer">
            <img className="carousel" src={imgArr[current]} alt="" />
            <h1>Locally owned since 1961</h1>
            <Link to="/contact"><button>GET YOUR FREE QUOTE</button></Link>
        </div>
    )
}
export default Carousel