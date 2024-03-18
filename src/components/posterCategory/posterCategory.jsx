import React from 'react'
import './posterCategory.css'
import find from "../../assets/search.png"
import arrow from "../../assets/arrow.png"
import image from '../../assets/download (1).jpeg'
export default function PosterCategory() {
    return (
        <div className="postercategory">
            <div className="left">
                <h2>Find Every Medicine</h2>
                <div>
                    <div className="hand-ican">
                        <p>Find</p>
                        <img src={find} alt="" />
                    </div>
                    <p>Your</p>
                    <p>Medicine</p>
                    <p>By Category</p>
                </div>
                <div className='latest-btn'>
                    <div>
                        Browse medicines
                    </div>
                <img src={arrow} alt="" className='arrow' />
                </div>
            </div>
            <div className="right">
                <img src={image} alt="" className='medicene' />
            </div>
        </div>
    )
}