import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'; // Import the CSS file
import image1 from '../../assets/logo.png';
import next from "../../assets/next.png";
import prev from "../../assets/prev.webp";

const SliderComponent = () => {
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

    return (
        <div>
            <h2 className="category-header">Categories</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                        <img src={image1} alt="Image 1" className="slider-image" /> 
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

// Custom next arrow component
const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-next-arrow" onClick={onClick}>
            <img className='arrowImg' src={next} alt="" />
        </div>
    );
}

// Custom previous arrow component
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-prev-arrow" onClick={onClick}>
            <img className='arrowImg' src={prev} alt="" />
        </div>
    );
}

export default SliderComponent;
