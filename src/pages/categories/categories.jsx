import axios from 'axios';
import React, { useEffect, useState } from 'react'
import find from '../../assets/search.png'
import image2 from '../../assets/download (1).jpeg'

import './categories.css'
export default function Categories() {

    let [categories,setCategories]=useState([])

    async function getCategories(){
        let {data}= await axios.get('http://localhost:3000/getAllCategories')
        console.log(data.allCategories);
        setCategories(data.allCategories)
    }

    useEffect(()=>{getCategories()},[])

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
                    <p>By Categories</p>
                </div>
                <div className='latest-btn'>
                    <div>
                        Browse medicines
                    </div>
                <img  alt="" />
                </div>
            </div>
            <div className="right">
                <img src={image2}  alt="" className='mediceneCategory' />
            </div>
        </div>

        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                {categories.map((catrgory)=>{
                    return(
                        <>
                            <div className="col-md-2">
                                <div className="card  mb-4">
                                    <div className="card-body">
                                        <img src={catrgory.image} alt="" className="imgCard w-100" style={{height:"200px"}} />
                                        <h5 className="card-title text-center">{catrgory.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
        {/* <div id="categorySlider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {categories.map((category, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="card mb-4">
                                    <img src={category.image} alt="" className="card-img-top imgCard" style={{ height: "200px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{category.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#categorySlider" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#categorySlider" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div> */}

    </>
    )
}
