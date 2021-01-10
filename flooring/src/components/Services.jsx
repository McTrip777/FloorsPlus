import React, { useRef } from 'react'
import '../styles/services.scss'
import Navbar from './Navbar'

function Services() {

    return (
        <div>
            <Navbar />
            <div id="newInstalls"> New Installs </div>
            <div id="refinishing"> Refinishing</div>
            <div id="customCraftsmanship"> Custom Craftsmanship</div>
            <div id="commercial"> Commercial</div>
        </div>
    )
}

export default Services
