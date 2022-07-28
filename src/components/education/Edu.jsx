import React from 'react'
import './Edu.css'
import Tilt from 'react-parallax-tilt';
import { Fade } from 'react-reveal';


const Edu = () => {
    const [scale] = React.useState(1.04);
    return (
        <section>
            <h5> What i leart & learning </h5>
            <h2> My Education </h2>

            <div className="container ">
                <div className="timeline">
                    <div className="box left">
                        <Fade left>
                            <div className="content">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <h2> 2019-Current </h2>
                                    <p> University of Engineering & Technology, Lahore</p>
                                    <p>Final Year Student</p>
                                    <p> 3.4/4.0 CGPA </p>
                                </Tilt>
                            </div>
                        </Fade>
                    </div>

                    <div className="box right">
                        <Fade right>
                            <div className="content">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <h2>2017-2019 College</h2>
                                    <p>Govt. Islamia Boys College, Lahore Cant</p>
                                    <p> 78% </p>
                                </Tilt>
                            </div>
                        </Fade>
                    </div>

                    <div className="box left">
                        <Fade left>
                            <div className="content">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <h2>2017-Scool</h2>
                                    <p>British Grammar School - Multan</p>
                                    <p> A+ </p>
                                </Tilt>
                            </div>
                        </Fade>
                    </div>
                </div>



            </div>

        </section >
    )
}

export default Edu