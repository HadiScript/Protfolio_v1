import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
import { Fade } from 'react-reveal'

import './ser.css'

const Services = () => {
    return (
        <section id="exp">
            <h5> What I've done </h5>
            <h2 className='font-bold'><t style={{ color: "#00ADB5" }} >04</t> Experience </h2>

            <div className="container ser_container ">



                <Fade left>
                    <article className='service'>
                        <div className="ser_head">
                            <h3 style={{ color: "white", fontWeight: "bold" }} >
                                At Cycarts <br />
                                <span>
                                    <small>2021 - current</small>
                                </span>
                            </h3>
                        </div>

                        <ul className='ser_list'>
                            <li >
                                <BiCheck className='ser_list_icon' />
                                <p>Cy-Ticketing-System - Mern / NextJs</p>
                            </li> <li >
                                <BiCheck className='ser_list_icon' />
                                <p>Cy-Converter - NodeJs</p>
                            </li>
                            <li >
                                <BiCheck className='ser_list_icon' />
                                <p>E-commerce - Mern </p>
                            </li>
                            <li >
                                <BiCheck className='ser_list_icon' />
                                <p>Blog App Mern / NextJs</p>
                            </li> <li >
                                <BiCheck className='ser_list_icon' />
                                <p>Cycarts.com - Mern </p>
                            </li>

                        </ul>
                    </article>
                </Fade>

                <Fade right>
                    <article className='service'>
                        <div className="ser_head">
                            <h3 style={{ color: "white", fontWeight: "bold" }}> University Semester Project </h3>
                        </div>

                        <ul className='ser_list'>
                            <li >
                                <BiCheck className='ser_list_icon' />
                                <p>Data Collection App - ReactJs / Firebase</p>
                            </li> <li >
                                <BiCheck className='ser_list_icon' />
                                <p>University Social App - NodeJs</p>
                            </li> <li >
                                <BiCheck className='ser_list_icon' />
                                <p>Electronic Store - Mern / Cloudinary / Firebase</p>
                            </li> <li >
                                <BiCheck className='ser_list_icon' />
                                <p>University Food App - React-Native / Firebase / Cloudinary</p>
                            </li>
                        </ul>
                    </article>
                </Fade>


            </div>
        </section>
    )
}

export default Services