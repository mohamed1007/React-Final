import React, { useContext } from 'react'
import './services.css'

import ServPoster from '../../components/servPoster/servPoster';
import { ContextData } from '../../context/contextData';
import { Link } from 'react-router-dom';

export default function Services() {

    const {services,addToCart}=useContext(ContextData)

    const handleAddToCart = (itemId, itemType) => {
        addToCart(itemId, itemType);
    };
    return (
    
        <div className='container-fluid'>
            <ServPoster></ServPoster>
            <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className='servicePoster'>
                        <div className="servicePoster-left">
                            <h1>Measure</h1>
                            <h1>Your {services[0]?.name}</h1><br />
                            <p>Price : {services[0]?.price} LE</p><br />
                            <Link><button onClick={() => handleAddToCart(services[0]?._id, 'service')} className='btn btn-outline-info btn-sm w-50 text-black'>Order Service</button></Link>
                        </div>
                        <div className="servicePoster-right">
                            <img src={services[0]?.image} alt="Medical Services" />
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
                            <h1>Your {services[1]?.name}</h1><br />
                            <p>Price : {services[1]?.price} LE</p><br />
                            <Link><button onClick={() => handleAddToCart(services[1]?._id, 'service')} className='btn btn-outline-info btn-sm w-50 text-black'>Order Service</button></Link>

                        </div>
                        <div className="servicePoster-right">
                            <img src={services[1]?.image} alt="Medical Services" />
                        </div>
                    </div>
                </div>
            </div>  
            <div className="row">
                <div className="col-9">
                    <div className='servicePoster'>
                        <div className="servicePoster-left">
                            <h1>Measure</h1>
                            <h1>Your {services[2]?.name}</h1><br />
                            <p>Price : {services[2]?.price} LE</p><br />
                            <Link><button onClick={() => handleAddToCart(services[2]?._id, 'service')} className='btn btn-outline-info btn-sm w-50 text-black'>Order Service</button></Link>

                        </div>
                        <div className="servicePoster-right">
                            <img src={services[2]?.image} alt="Medical Services" />
                        </div>
                    </div>
                </div>
                
            </div> 
            </div> 
        </div>
    )
}