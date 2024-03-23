import React, { useEffect, useState } from 'react'
import './services.css'
import servImage from "../../assets/logo.png"
import blood from "../../assets/blood.png"
import axios from 'axios';
import ServPoster from '../../components/servPoster/servPoster';


export default function Services() {

    const [services,setServices]=useState([])

    const getServices = async () => {
        try {
            let { data } = await axios.get('http://localhost:3000/getAllServices');
            console.log(data);
            // setServices(data); 
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getServices();
    }, [])

    return (
        <div className='container-fluid'>
            <ServPoster></ServPoster>
            <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className='servicePoster'>
                        <div className="servicePoster-left">
                            <h1>Measure</h1>
                            <h1>Your "service name"</h1><br />
                            <p>Price : "service price"</p><br />
                            <button className='btn btn-outline-info btn-sm w-50 text-black'>Order Service</button>
                        </div>
                        <div className="servicePoster-right">
                            <img src={blood} alt="Medical Services" />
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>  
            <div className="row">
            <div className="col-3"></div>
                <div className="col-9">
                    <div className='servicePoster'>
                        <div className="servicePoster-left">
                            <h1>Measure</h1>
                            <h1>Your "service name"</h1><br />
                            <p>Price : "service price"</p><br />
                            <button className='btn btn-outline-info btn-sm w-50 text-black'>Order Service</button>
                        </div>
                        <div className="servicePoster-right">
                            <img src={servImage} alt="Medical Services" />
                        </div>
                    </div>
                </div>
            </div>  
            <div className="row">
                <div className="col-9">
                    <div className='servicePoster'>
                        <div className="servicePoster-left">
                            <h1>Measure</h1>
                            <h1>Your "service name"</h1><br />
                            <p>Price : "service price"</p><br />
                            <button className='btn btn-outline-info btn-sm w-50 text-black'>Order Service</button>
                        </div>
                        <div className="servicePoster-right">
                            <img src={servImage} alt="Medical Services" />
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div> 
            </div> 
        </div>
  
    )
}
