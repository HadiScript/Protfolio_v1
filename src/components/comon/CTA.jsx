import React from 'react'
import cv from '../../assets/cv.docx'


const CTA = () => {
    return (
        <div className='cta '>
            {/* <a href={cv}> Download CV</a> */}
            <a href={cv} className='btn '>Download CV</a>
            <a href="#contact" className='btn btn-primary'> Lets Talk </a>
        </div>
    )
}

export default CTA