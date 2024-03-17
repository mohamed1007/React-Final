import React from 'react';
import "./poster.css"
import find from "../../assets/search.png"
import arrow from "../../assets/arrow.png"
import doctor from "../../assets/doctor.webp"

const Poster = () =>{
    return(
        <div className="poster">
            <div className="left">
                <h2>Find Every Medicine</h2>
                <div>
                    <div className="hand-ican">
                        <p>Find</p>
                        <img src={find} alt="" />
                    </div>
                    <p>Your</p>
                    <p>Medicine</p>
                </div>
                <div className='latest-btn'>
                    <div>
                        Browse medicines
                    </div>
                <img src={arrow} alt="" />
                </div>
            </div>
            <div className="right">
                <img src={doctor} alt="" className='doctor' />
            </div>
        </div>
    )
}

export default Poster