
import React from 'react'
import './serviscesPoster.css'
import serv from "../../assets/services.png"

const ServiscesPoster = () => {
    return (
        <div className='ServiscesPoster'>
            <div className="ServiscesPoster-left">
                <h1>Medical</h1>
                <h1>Services For You</h1>
                <p>CHOOSE THE SERIVCE YOU NEED</p>
                <button className='btn btn-outline-info btn-sm w-50 text-black'>Check Now</button>
            </div>
            <div className="ServiscesPoster-right">
                <img src={serv} alt="" />
            </div>
        </div>
    )
}

export default ServiscesPoster