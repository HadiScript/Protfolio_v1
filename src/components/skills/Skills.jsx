import React from 'react'
import Barcharts from '../test/Barcharts/Barcharts';
import PeiCharts from '../test/Peicharts/PeiCharts';

// import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';

import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiFirebase, SiTailwindcss, SiRedux } from 'react-icons/si'
import plan from '../../assets/sign/plan.png'
import agile from '../../assets/sign/agile.png'

import './skills.css'

import MobileSkills from './MobileSkills';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const Skills = () => {
    return (
        <section id="skills">
            <h5 className='bg-danger' > What i have </h5>
            <h2 className='font-bold'><t style={{ color: "#00ADB5" }} >03</t> Skills </h2>


            <div className="container skills_container">
                <div className="peicharts">
                    <PeiCharts />
                </div>
                <div className="barcharts">
                    <Barcharts />
                </div>
            </div>

            <div className="container skills_mobile">
                <Carousel infinite={true} className="slider" responsive={responsive}>
                    <div className='item' >
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={83} text={`8.3`}
                                styles={buildStyles({
                                    textColor: '#fff',
                                })}
                            />
                        </div>
                        <h2>ReactJs</h2>
                    </div>


                    <div className='item' >
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={85} text={`8.5`}
                                styles={buildStyles({
                                    textColor: '#fff',
                                })}
                            />
                        </div>
                        <h2>NodeJs</h2>
                    </div>

                    <div className='item' >
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={70} text={`7`}
                                styles={buildStyles({
                                    textColor: '#fff',
                                })}
                            />
                        </div>
                        <h2>NextJs</h2>
                    </div>

                    <div className='item' >
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={72} text={`7.2`}
                                styles={buildStyles({
                                    textColor: '#fff',
                                })}
                            />
                        </div>
                        <h2>React-Native</h2>
                    </div>

                    <div className='item' >
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={80} text={`8`}
                                styles={buildStyles({
                                    textColor: '#fff',
                                })}
                            />
                        </div>
                        <h2>MongoDb</h2>
                    </div>

                    <div className='item' >
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={67} text={`6.7`}
                                styles={buildStyles({
                                    textColor: '#fff',
                                })}
                            />
                        </div>
                        <h2>MySql</h2>
                    </div>

                    <div className='item' >
                        <div style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={81} text={`8.1`}
                                styles={buildStyles({
                                    textColor: '#fff',
                                })}
                            />
                        </div>
                        <h2>Web Design</h2>
                    </div>

                </Carousel>
            </div>



            <Fade zoom>
                <section>
                    <h5> What i've used with mern Stack Projects </h5>
                    <div className="container">

                        <div style={{ marginTop: "5rem" }} >
                            <Carousel infinite={true} className="slider" responsive={responsive}>
                                <div className='item' >
                                    <SiRedux style={{ color: "#764abc " }} className='item-icon' />
                                    Firebase
                                </div>

                                <div className='item' >
                                    <SiFirebase style={{ color: '#FFA611' }} className='item-icon' />
                                    Firebase
                                </div>

                                <div className='item' >
                                    <BsFillBootstrapFill style={{ color: "#4c0bce" }} className='item-icon' />
                                    Firebase
                                </div>

                                <div className='item' >
                                    <SiTailwindcss style={{ color: "#38bdf8" }} className='item-icon' />
                                    Firebase
                                </div>


                                <div className='item' >
                                    <img src={plan} alt="plan" className='item-icon' />
                                    Firebase
                                </div>

                                <div className='item' >
                                    <img src={agile} alt="agile" className='item-icon' />
                                    Firebase
                                </div>



                            </Carousel>

                        </div>

                    </div>
                </section>
            </Fade>

        </section >
    )
}

export default Skills