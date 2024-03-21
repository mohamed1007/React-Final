import axios from 'axios'; // Add this line

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MedicinePoster from '../../components/medicinePoster/medicinePoster';

export default function Category() {
    const { name } = useParams();
    console.log(name);
    const [medicines, setMedicines] = useState([]);

    async function getMedicines() {
        try {
            let { data } = await axios.get(`http://localhost:3000/getMedicineByCategory/${name}`);
            console.log(data.found);
            setMedicines(data.found);
        }catch (error) {
        console.error('Error fetching medicine details:', error);
        }
    }

    useEffect(() => {
        getMedicines();
    },[]);

    return (
        <>
        <div className='container mb-5'>
        <MedicinePoster />
        </div>
    {medicines.length === 0 ? (
    <h1 className="text-center mt-5 mb-5">No Medicines Found</h1>
) : (
    <div className="container mt-5 mb-5">
    <div className="row ">
        {medicines.map((medicine, index) => (
                        <div className='col-md-4' key={index}>
                                <div className="card card-medicine m-4">
                                    <div className="card-body">
                                    <Link to={`/medicines/${medicine.name}`}>
                                        <img src={medicine.image} alt={medicine.name} className="imgCard " />
                                    </Link>
                                        <h5 className="card-title mt-3 fw-bold">Name: <span>{medicine.name}</span></h5><br />
                                        <p className="card-text">Price: <span>{medicine.price} L.E</span></p>
                                    </div>
                                    
                                </div>
                            
                        </div>
                    ))}
    </div>
    </div>
)}


    </>
    );
}
