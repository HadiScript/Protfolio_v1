import React, { useState } from 'react'
import mine from '../../assets/mine.jpeg'

import { BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaUserGraduate } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import { AiOutlineSafetyCertificate, AiOutlineDownload } from 'react-icons/ai'

import './about.css'
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Edu from '../education/Edu'
import Certi from '../education/Certi'


const About = () => {
    const [scale] = useState(1.04);
    const [showEdu, setShowEdu] = useState(false);
    const [showCerti, setShowCerti] = useState(false);

    const [active, setActive] = useState("download");

    const certiHandler = () => {
        setShowCerti(!showCerti)
        setActive('certification')
    }

    return (
        <Zoom>
            <section id='about'>
                <h5 > Get to know </h5>
                <h2 className='font-bold'><t style={{ color: "#00ADB5" }}   >0.2</t> About Me </h2>


                <div data-aos="fade-up" className="container about__container ">
                    <div className="about_me">

                        <Tilt scale={scale} transitionSpeed={4000}>
                            <Rotate top right>
                                <div className="about__me__image">
                                    <img width={30} height={'100%'} src={mine} alt="alt" />
                                </div>
                            </Rotate>
                        </Tilt >


                    </div>

                    <Fade right>
                        <div className="about_content">

                            <p>   <text className='name'> Syed Hadi Raza </text> <br />
                                <text className="highlight">
                                    I am a full stack developer &  a Final Year Student
                                </text><br /> I mostly done projects in Mern Stack Tachnology</p>

                            <p>I enjoy to develop Softwares. My interest in <text className="highlight"> web development & mobile development</text>, started back in 2019 when I Finished the 12th — .</p>
                            <p>I also like to write in Next js & in React Native, Mostly i used <text className="highlight">Redux</text> in Mern stack project and doing small projects in NextJs where i used <span className="highlight">Context Api</span></p>
                            <p>Nowadays, I am working as a <text className="highlight">junior developer at Cycarts</text> . <br />
                                Doing Computer Sciences from <text className="highlight">University of Engineering and Technology Lahore</text>
                            </p>


                            <div style={{ display: "flex", flexDirection: 'row', }} >
                                <button onClick={() => setShowEdu(!showEdu)} className='btn btn-primary' style={{ marginRight: "15px", display: "flex", flexDirection: 'row', alignItems: "center" }}><FaUserGraduate className='iconz mr-2' />  {!showEdu ? `Education` : `Close`}</button>
                                <button onClick={certiHandler} className='btn' style={{ display: "flex", flexDirection: 'row', alignItems: "center" }} ><AiOutlineSafetyCertificate className='iconz mr-2' />{!showCerti ? `Certification` : `Close`}</button>
                            </div>
                            <div className="buttons">

                                {/* <a onClick={() => setActive('download')} href="#contact" className={`btn  ${active === "download" ? `btn-primary` : ``} `}> <AiOutlineDownload className='iconz' /> Resume</a> */}
                                {/* <h2 onClick={() => setActive('education')} className={`education-button btn ${active === "education" ? `btn-primary` : ``}`} onClick={() => setShowEdu(!showEdu)} ><FaUserGraduate className='iconz' /> {!showEdu ? `Education` : `Close`}</h2>
                                <h2 className={` btn ${active === "certification" ? `btn-primary` : ``}`} onClick={certiHandler} > <AiOutlineSafetyCertificate className='iconz' />{!showCerti ? `Certification` : `Close`}</h2> */}

                            </div>
                        </div>

                    </Fade>

                    <div className="about_socials">
                        <a href="https://linkedin.com" target='_blank'> <BsLinkedin /> </a>
                        <a href="https://github.com/HadiScript" target='_blank'><FaGithub /></a>
                        <a href="https://instagram.com" target='_blank'><FiDribbble /></a>
                    </div>
                </div>

                {showEdu && <Edu />}
                {showCerti && <Certi />}


            </section>
        </Zoom>
    )
}

export default About

