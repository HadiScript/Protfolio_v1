import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Header from '../components/header/Header'
import Navs from '../components/nav/Navs'
import Services from '../components/services/Services'
import Testi from '../components/Testimonials/Testi'
import Work from '../components/work/Work'
import TestSec from '../components/test/TestSec'
import Skills from '../components/skills/Skills'
import Exp from '../components/exp/Exp'
import Worktest from '../components/test/Worktest'

const Home = () => {
    return (
        <>
            {/* <Worktest /> */}
            <Navs />
            <Header />
            <TestSec />
            <About />
            <Skills />
            {/* <Test /> */}
            {/* <Exp /> */}
            <Services />
            <Work />
            <Worktest />
            {/* <Testi /> */}
            <Contact />
        </>
    )
}

export default Home