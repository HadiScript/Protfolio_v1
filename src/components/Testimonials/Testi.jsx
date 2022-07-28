import { useState } from "react";
import Tilt from 'react-parallax-tilt';

import './testi.css'


const arr = [
    {
        id: 1,
        name: "name",
        role: "role",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis autem unde facere?"
    },
    {
        id: 2,
        name: "name",
        role: "role",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis autem unde facere?"
    },
    {
        id: 3,
        name: "name",
        role: "role",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis autem unde facere?"
    },
    {
        id: 4,
        name: "name",
        role: "role",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis autem unde facere?"
    },
    {
        id: 5,
        name: "name",
        role: "role",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis autem unde facere?"
    },
];

const Testi = () => {
    const [scale] = useState(1.04);
    return (
        <section id="testi">
            <h2>Testimonial</h2>
            <div class="container outerdiv">

                <div class="innerdiv">
                    <div class="div1 eachdiv">
                        {/* <!-- div1 --> */}
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <div class="userdetails">

                                <div class="detbox">
                                    <p class="name">Daniel Clifford</p>
                                    <p class="designation">Verified Graduate</p>
                                </div>

                            </div>
                            <div class="review">
                                <h5>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</h5>
                            </div>
                        </Tilt>
                    </div>
                    {/* <!-- div2 --> */}
                    <div class="div2 eachdiv">
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <div class="userdetails">
                                <div class="detbox">
                                    <p class="name">Jonathan Walters</p>
                                    <p class="designation">Verified Graduate</p>
                                </div>
                            </div>
                            <div class="review">
                                <h5>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</h5>
                            </div>
                        </Tilt>
                    </div>
                    {/* <!-- div3 --> */}
                    <div class="div3 eachdiv">
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <div class="userdetails">
                                <div class="detbox">
                                    <p class="name dark">Kira Whittle</p>
                                    <p class="designation dark">Verified Graduate</p>
                                </div>
                            </div>
                            <div class="review dark">
                                <h5>
                                    “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of experience. It certainly helped me land a job as a full-stack 100% recommend! ”
                                </h5>
                            </div>
                        </Tilt>
                    </div>
                    {/* <!-- div4 --> */}
                    <div class="div4 eachdiv">
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <div class="userdetails">

                                <div class="detbox">
                                    <p class="name dark">Jeanette Harmon</p>
                                    <p class="designation dark">Verified Graduate</p>
                                </div>
                            </div>
                            <div class="review dark">
                                <h5>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</h5>
                            </div>
                        </Tilt>
                    </div>
                    {/* <!-- div5 --> */}
                    <div class="div5 eachdiv">
                        <Tilt scale={scale} transitionSpeed={4000}>
                            <div class="userdetails">
                                <div class="detbox">
                                    <p class="name">Patrick Abrams</p>
                                    <p class="designation">Verified Graduate</p>
                                </div>
                            </div>
                            <div class="review">
                                <h5>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</h5>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testi