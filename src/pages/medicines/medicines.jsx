import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './medicines.css'
import find from '../../assets/search.png'
import image2 from '../../assets/download (1).jpeg'
import { Link } from 'react-router-dom';

export default function Medicines() {

    const [medicines, setMedicines] =useState([]);
    async function getMedicines(){
        let {data}= await axios.get('http://localhost:3000/getAllMedicines')
        // console.log(data.allMedicines);
        setMedicines(data.allMedicines)
    }


    useEffect(()=>{
        getMedicines() 
    },[])


    return (
    <>
    
        <div className="poster"  >
            <div className="left">
                <h2>Find Every Medicine</h2>
                <div>
                    <div className="hand-ican">
                        <p>Find</p>
                        <img src={find}  alt="" />
                    </div>
                    <p>Your</p>
                    <p>Medicine</p>
                </div>
                
            </div>
            <div className="right">
                <img src={image2}  alt="" className='medicene' />
            </div>
        </div>


        <h2 className="category-header mt-5">All Medicines</h2>

        <div className='container mt-5 mb-5'>
            <div className="row">
                {medicines.map((medicene, index)=>{
                    return(
                        <>
                    <div className='col-md-4' >
                        <div className="card card-medicene mb-4">
                                <div className="card-body" key={index}>
                                    <img src={medicene.image} alt={medicene.name} className="imgCard w-100" style={{height:"200px"}} />
                                    <h5 className="card-title mt-3 fw-bold">Name: <span>{medicene.name}</span></h5>
                                    <p className="card-text">activeSubstance:<ul>
                                        {medicene.activeSubstance.map((activeSubstance)=>{return <li>{activeSubstance}</li>})}</ul></p>
                                    <p className="card-text">Quantity: <span>{medicene.stock}</span></p>
                                    <p className="card-text">Price: <span>{medicene.price} L.E</span></p>
                                    <div className="d-flex justify-content-between">
                                    <Link><button className="AddToCart1 btn btn-primary d-block m-start fw-bold">Details</button></Link>
                                    {/* <Link><button className="AddToCart btn btn-success d-block ms-auto fw-bold">Add To Cart</button></Link> */}
                                    <Link><button className="AddToCart btn btn-success d-block ms-auto fw-bold">Add To Cart</button></Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                        </>
                    )
                })}                
            </div>
        </div>
    </>
    )
}
