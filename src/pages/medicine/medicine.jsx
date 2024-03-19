import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import image from '../../assets/D10_WEB_PRAC highlights_homepage_slider.png'
import './medicene.css'
import next from "../../assets/next.png";
import prev from "../../assets/prev.webp";
import Slider from 'react-slick';
import MedicinePoster from '../../components/medicinePoster/medicinePoster';
export default function Medicine() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const { name } = useParams();
    const [medicine, setMedicine] = useState(null);
    const[mediceneSameCategory,setmediceneSameCategory]=useState([])
    const [selectedMedicine, setSelectedMedicine] = useState(null);

    const randomProducts = mediceneSameCategory.sort(() => Math.random()).slice(0, 6);
    // console.log(randomProducts);
    async function MedicineByName() {
        try {
            const { data } = await axios.get(`http://localhost:3000/getMedicineByName/${name}`);
            setMedicine(data.found);
        } catch (error) {
            console.error('Error fetching medicine details:', error);
        }
    }

    async function mediceneCategory() { ///getMedicineByCategory/:category
        try {
            const { data } = await axios.get(`http://localhost:3000/getMedicineByCategory/${medicine.category}`);
            setmediceneSameCategory(data.found);
            // console.log(data.found); 
        } catch (error) {
            console.error('Error fetching medicine details:', error);
        }
    }
    


    useEffect(() => {
        MedicineByName();
    },[]);

    useEffect(() => {
        mediceneCategory();
    },[medicine]);

    if (!medicine) {
        return <p>Loading...</p>;
    }


    return (
        <>
            <div className='container mb-5'>
            <MedicinePoster />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg">
                            <img src={medicine.image} className="card-img-top" alt={medicine.name} style={{ height: '525px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-md-8 mb-5">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body">
                                <h1 className="card-title">{medicine.name}</h1>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Expiration Date:</strong> {(medicine.expDate).slice(0, 10)}</li>
                                    <li className="list-group-item"><strong>Manufacture Date:</strong> {(medicine.mfgDate).slice(0, 10)}</li>
                                    <li className="list-group-item"><strong>Active Substance:</strong> {(medicine.activeSubstance).join(", ")}</li>
                                    <li className="list-group-item"><strong>Company:</strong> {medicine.company}</li>
                                    <li className="list-group-item"><strong>Category:</strong> {medicine.category}</li>
                                    <li className="list-group-item"><strong>Quantity:</strong> {medicine.stock}</li>
                                    <li className="list-group-item"><strong>Price:</strong> {medicine.price}</li>
                                </ul>
                                <div className="mt-3">
                                    <Link to="/cart" className="btn btn-outline-success d-block ms-auto">Add to Cart</Link>
                                    {/* <button className="btn btn-outline-secondary">More Details</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="category-header mt-5">Similar Medicines</h2>
    
                    {/* {randomProducts.map((medicene, index) => (
                        <div className="col-md-4 " key={index}>
                            <div  className="card card-medicene mb-4">
                                <div className="card-body">
                                    <img src={medicene.image} alt={medicene.name} className="imgCard w-100" style={{ height: "200px" }} />
                                    <h5 className="card-title mt-3 fw-bold">Name: <span>{medicene.name}</span></h5>
                                    <p className="card-text">Price: <span>{medicene.price} L.E</span></p>
                                    <div className="d-flex justify-content-between">
                                        <Link><button onClick={()=>setMedicine(medicene)} className="btn btn-outline-info">More Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} */}
                    <div className="category-header m-auto">
            <div className="slider-container">
                <Slider {...settings}>
                {randomProducts.map((medicene)=>{
                    return(
                        <>
                        <div className="slider-container">
                            <Link>
                                <img onClick={()=>setMedicine(medicene)} src={medicene.image} alt={medicene.name} className='slider-image' style={{ height: "200px", objectFit: "cover", objectPosition: "center", borderRadius: "50px" }} />
                            </Link>
                        </div>
                        </>
                    )
                })}
                </Slider>
                
            </div>
        </div>
                
        </>
    );
    
    
}
const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-next-arrow" onClick={onClick}>
            <img className='arrowImg' src={next} alt="" />
        </div>
    );
}
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-prev-arrow" onClick={onClick}>
            <img className='arrowImg' src={prev} alt="" />
        </div>
    );
}
