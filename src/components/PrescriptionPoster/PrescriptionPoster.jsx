
import React from 'react'
import './PrescriptionPoster.css'
import pres from "../../assets/prescription.png"

const PrescriptionPoster = () => {
    return (
        <div className='PrescriptionPoster'>
            <div className="PrescriptionPoster-left">
                <h1>ASK</h1>
                <h1>For Medical Advice</h1>
                <p>MAKE A PRESCRIPTION NOW</p>
                <button className='btn btn-outline-warning btn-sm w-50 text-black'>Ask Now</button>
            </div>
            <div className="PrescriptionPoster-right">
                <img src={pres} alt="" />
            </div>
        </div>
    )
}

export default PrescriptionPoster