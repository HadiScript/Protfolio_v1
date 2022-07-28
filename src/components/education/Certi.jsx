import React from 'react'
import './Edu.css'
import Tilt from 'react-parallax-tilt';
import { Fade } from 'react-reveal';


const Certi = () => {
    const [scale] = React.useState(1.04);

    return (
        <section>
            <h5> What i leart & learning </h5>
            <h2> My Certificates </h2>
            <h2>
                <a href="https://drive.google.com/drive/u/7/folders/1b9NWLfay9t_GZ9iY97x2pXZBV1zPuZ5e" target='_blank'>See Certifications</a>
            </h2>

            <div className="container ">
                <div className="timeline">
                    <div className="box left">
                        <Fade left>
                            <div className="content">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <h2> _2020 </h2>
                                    <p> The Complete ReactJs Course Basics to Advanced</p>
                                    <small> <p>Udemy</p></small>
                                </Tilt>
                            </div>
                        </Fade>
                    </div>

                    <div className="box right">
                        <Fade right>
                            <div className="content">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <h2>2020</h2>
                                    <p>React - The Complete Guide  </p>
                                    <small> <p> From Academinde </p></small>
                                </Tilt>
                            </div>
                        </Fade>
                    </div>

                    <div className="box left">
                        <Fade left>
                            <div className="content">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <h2>2021</h2>
                                    <p>Complete NOdejs course with express, socket io & MongoDb</p>
                                    <small> <p> Udemy </p></small>
                                </Tilt>
                            </div>
                        </Fade>
                    </div>
                </div>



            </div>

        </section >
    )
}

export default Certi