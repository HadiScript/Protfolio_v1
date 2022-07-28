import React from 'react'

import { BsWhatsapp, BsInstagram, BsTelephoneInbound } from 'react-icons/bs'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="http://linkedin.com/in/hadi-raza-0365a11a2" target='_blank'> <FiLinkedin /> </a>
            <a href="https://github.com/HadiScript" target='_blank'><FiGithub /></a>
            <a href="https://www.instagram.com/hadialeyraza/" target='_blank'><BsInstagram /></a>
        </div>
    )
}

export default HeaderSocial