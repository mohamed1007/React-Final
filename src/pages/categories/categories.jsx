import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import next from "../../assets/next.png";
import prev from "../../assets/prev.webp";
import './categories.css'
import { Link } from 'react-router-dom';
import PosterCategory from '../../components/categoryPoster/categoryPoster';

export default function Categories() {
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

    let [categories,setCategories]=useState([])

    async function getCategories(){
        let {data}= await axios.get('http://localhost:3000/getAllCategories')
        console.log(data.allCategories);
        setCategories(data.allCategories)
    }

    useEffect(()=>{getCategories()},[])

    return (
    <>
        <PosterCategory></PosterCategory>

        <h2 className="category-header mt-5">All Categories</h2>
        <div className="category-header">
            <div className="slider-container">
                <Slider {...settings}>
                {categories.map((category)=>{
                    return(
                        <>
                        <div className="slider-container">
                            <Link to={`/category/${category.name}`}>
                                <img  src={category.image} alt={category.name} className='slider-image' />
                            </Link>
                        </div>
                        </>
                    )
                })}
                </Slider>
                
            </div>
        </div>

    </>
    
    )
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
