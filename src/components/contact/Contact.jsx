import React, { useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsInstagram, BsTelephoneInbound } from 'react-icons/bs'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'


import './contact.css'
import axios from 'axios'
import { useForm } from "react-hook-form";



const Contact = () => {
    const { register, errors } = useForm({
        mode: "all"
    })

    const initialState = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const [ok, setOk] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [tempName, setTempName] = useState("");
    const [loading, setLoading] = useState(false);

    const { name, email, subject, message } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            if (
                name !== "" &&
                email !== "" &&
                subject !== "" &&
                message !== ""
            ) {
                setLoading(true);
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                const res = await axios.post(
                    "https://hadiraza.com/hadi/send",
                    formData,
                    config
                );
                console.log(res);
                if (res.status === 200) {
                    setTempName(name);
                    setOk(true);
                    setFormData(initialState);
                    setLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    if (ok) {
        setTimeout(() => {
            setOk(false);

            setTempName("");
        }, 5000);
    }


    return (
        <section id='contact' >
            <h2 className='font-bold ' style={{ color: "#00ADB5", }} >
                <a href="mailto:contact@hadiraza.com" target='_blank'>contact@hadiraza.com</a>
            </h2>
            {loading && <p className="text-success"> Loading... </p>}


            <div className="container cont">
                <div className='contact-accounts'>
                    <a href="mailto:contact@hadiraza.com" target='_black'><MdOutlineEmail className='icon' /></a>
                    <a href="tel:+923221729619" target='_blank'><BsTelephoneInbound className='icon' /></a>
                    <a href="https://www.instagram.com/hadialeyraza/" target='_blank'><BsInstagram className='icon' /></a>
                    <a href="http://linkedin.com/in/hadi-raza-0365a11a2" target='_blank'><FiLinkedin className='icon' /></a>
                    <a href="https://Github.com/HadiScript" target='_blank'><FiGithub className='icon' /></a>
                    <a href="https://api.whatsapp.com/send?phone=03221729619" target='_blank'><BsWhatsapp className='icon' /></a>
                </div>
                <form id="contact-form"
                    method="POST" onSubmit={submitHandler}>
                    {ok && (
                        <motion.div
                            initial={{ y: -250 }}
                            animate={{ y: -10 }}
                            transition={{
                                delay: 0.2,
                                type: "spring",
                                stiffness: 120,
                            }}
                            className="text-success"
                            style={{
                                padding: "10px",
                                margin: "20px",
                                backgroundColor: '#393E46',
                                color: "#EEEEEE",
                                borderRadius: "5px",
                            }}
                        // onClick={(e) => setOk(false)}
                        >
                            {" "}
                            <h2> Hi, {tempName}</h2> <br />
                            <span>
                                Thank You so much for visiting my portfolio{" "}
                                <span role="img" aria-label="jsx-a11y/accessible-emoji">
                                    💙
                                </span>{" "}
                            </span>{" "}
                            <br />{" "}
                            <span style={{ fontStyle: "italic" }}>
                                {" "}
                                I`&apos;ll reply to your message soon!
                            </span>{" "}
                        </motion.div>
                    )}
                    <input
                        value={name}
                        onChange={onChange}
                        id="inputs"
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        ref={register({ required: "Name is required" })}
                    />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    <input
                        type="email"
                        onChange={onChange}
                        name='email'
                        placeholder='email'
                        ref={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    <input
                        type="text"
                        name='subject'
                        onChange={onChange}
                        placeholder='subject'
                        ref={register({
                            required: "Subject is required",
                        })}
                    />
                    {errors.subject && <p>{errors.subject.message}</p>}
                    <textarea
                        name='message'
                        onChange={onChange}
                        rows='7'
                        placeholder='message'
                        ref={register({
                            required: "Message is required",
                        })}
                    ></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                    <button type="submit" className={`${name === '' || email === '' || subject === '' || message === '' ? `btn-disable` : 'btn btn-primary'
                        }`}> Send Message</button>
                </form>
            </div>
            <h2 style={{ color: 'white', marginTop: "2rem", fontSize: "15px" }}> &copy; 2022 - Hadi Raza </h2>
        </section >
    )
}

export default Contact