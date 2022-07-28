import React, { useState } from 'react'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookAlt } from 'react-icons/bi'
import { MdWork, MdContactPhone } from 'react-icons/md'
import { AiOutlineContacts } from 'react-icons/ai'
import { BsFillBarChartFill } from 'react-icons/bs'
import { FaUserTie } from 'react-icons/fa'

import './nav.css'

import { motion } from 'framer-motion'


const Navs = () => {

    const [active, setActive] = useState('#');


    return (
        <nav>

            <a href="#" onClick={() => setActive('#')} className={`text-xl ${active === "#" ? `active` : ``} `}><AiOutlineHome />  <span >Home</span></a>
            <a href="#about" onClick={() => setActive('#about')} className={`text-xl ${active === '#about' ? `active` : ``}`}><FaUserTie />  <span >About</span></a>
            <a href="#skills" onClick={() => setActive('#services')} className={`text-xl ${active === '#services' ? `active` : ``}`}><BsFillBarChartFill /> <span >Skills</span></a>
            <a href="#exp" onClick={() => setActive('#exp')} className={`text-xl ${active === '#exp' ? `active` : ``} `}><BiBookAlt /> <span >Experience</span></a>
            <a href="#work" onClick={() => setActive('#work')} className={`text-xl ${active === '#work' ? `active` : ``}`}><MdWork /> <span >Work</span></a>
            <a href="#contact" onClick={() => setActive('#contact')} className={`text-xl ${active === '#contact' ? `active` : ``}`}><MdContactPhone /> <span >Contact</span></a>


        </nav>
    )
}

export default Navs