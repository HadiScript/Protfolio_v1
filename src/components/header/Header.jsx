import React from 'react'
import CTA from '../comon/CTA'
import HeaderSocial from './HeaderSocial'

import './header.css'

import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import { BsMouse } from 'react-icons/bs';


const Header = () => {
    return (
        <header  >

            <div className="container header_container ">

                <h5>HELLO I'M</h5>
                <Roll left>
                    <LightSpeed bottom>

                        <h1 className='font-bold' > Syed Hadi <t className="t">Raza</t></h1>
                        <h5 style={{ color: "#3FC1C9" }}>
                            Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, <br /> PHP and some other stuff.
                        </h5>
                    </LightSpeed>
                </Roll>
                <Fade bottom>
                    <CTA />
                </Fade>

                <HeaderSocial />

                <a href="#contact" className='scrol__down'> contact@hadiraza.com <BsMouse style={{ transform: "deg(90)" }} className='scrol_down_mouse' /> </a>
            </div>
        </header>
    )
}

export default Header