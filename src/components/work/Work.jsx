import React from 'react'
import './Work.css'
import { Link } from 'react-router-dom'

import { AiOutlineCheckCircle } from 'react-icons/ai'
import { Fade } from 'react-reveal'
import { data } from './data'


const Work = () => {

    // const [more, setMore] = React.useState(false);
    // const [count, setCount] = React.useState(2);

    return (
        <section id='work' >
            <h5> the work that i've done </h5>
            <h2 className='font-bold'><t style={{ color: "#00ADB5" }} >05</t>  Work</h2>

            <div className="container port_container ">
                {
                    data.slice(0, 5).map(x => <Fade zoom>
                        <article key={x._id} className='port_item hover:shadow-2xl'>
                            <div className="port_item_image">
                                <img src={x.thumbnail} alt="alto" />
                            </div>
                            <h3 className='ml-12 name'  > {x.name} </h3>
                            <div className="port_item_cta">
                                <div className="cats">
                                    <AiOutlineCheckCircle className='cats-icon' />
                                    <p> {x.category} </p>
                                </div>
                                <Link to={`detail/${x.id}`}>detail</Link>
                                {/* <a href="#">detail</a> */}
                            </div>
                        </article>
                    </Fade>
                    )
                }

            </div>

            {/* <h2 style={{ marginTop: "2rem", cursor: "pointer" }}
                onClick={() => {
                    setMore(!more)
                    if (more) setCount(5);
                }}
            > {!more ? `show more` : `show less`} </h2> */}
        </section>
    )
}

export default Work