import React from 'react'
import './wt.css'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Tilt from 'react-parallax-tilt';

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


const Worktest = () => {
    const [scale] = React.useState(1.04);
    return (
        <>


            <section>
                {/* <h5> What i've used with mern Stack Projects </h5> */}
                <div className="container">

                    <Carousel infinite={true} responsive={responsive}>
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <div className='itemcards px-2' >

                                <p>
                                    <blockquote className='pb-2'>
                                        " You are a passionate developer and has enthusiastic skill of solving problem in any domain. "
                                    </blockquote>
                                    <p className='by pt-2'> Syed ibtehaj ali || AI Engineer - Developer Executive Manager Adan Developer</p>
                                    <span className=''>
                                    </span>
                                </p>
                            </div>
                        </Tilt>
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <div className='itemcards' >

                                <p>
                                    <blockquote className='pb-2'>
                                        " Working with Hadi was better than expected and I had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients. He is an excellent team member and a highly professional individual. "
                                    </blockquote>
                                    <p className='by pt-2'> Hunain Zaidi || CEO - Cycarts Technologies</p>
                                    <span className=''>
                                    </span>
                                </p>
                            </div>
                        </Tilt>
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <div className='itemcards' >

                                <p>
                                    <blockquote className='pb-2'>
                                        " Me and hadi are from same univerity and he was 1 year junior of mine, he is one of those person who not only posses a keen thirst for tech but also put practical efforts to learn new skills, i also had seen the web sites that he built , he has such an exceptional programming skills, professionalism in his work even he hasn't completed his grduation yet "
                                    </blockquote>
                                    <p className='by pt-2'> Hassan || Associate Software Engineer - Zweidevs</p>
                                    <span className=''>
                                    </span>
                                </p>
                            </div>
                        </Tilt>




                    </Carousel>


                </div>
            </section>


        </>
    )
}


export default Worktest