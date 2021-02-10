import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    };

    const data = [
        {
            image: "fa-user-circle",
            name: "Siddhant",
            review: "I was going through a really hard phase of my life dealing with PCOD, Face Acne and Weight Gain issues. The team helped me understand what nutrients my body needs in tracked progress over a period of time. I realized that personalized and flexible nutrition plans have helped to manage by EATING RIGHT",
        },
        {
            image: "fa-user-circle",
            name: "Parneeta",
            review: "I was going through a really hard phase of my life dealing with PCOD, Face Acne and Weight Gain issues. The team helped me understand what nutrients my body needs in tracked progress over a period of time. I realized that personalized and flexible nutrition plans have helped to manage by EATING RIGHT.",
        },
        {
            image: "fa-user-circle",
            name: "Parneeta",
            review: "I was going through a really hard phase of my life dealing with PCOD, Face Acne and Weight Gain issues. The team helped me understand what nutrients my body needs in tracked progress over a period of time. I realized that personalized and flexible nutrition plans have helped to manage by EATING RIGHT.",
        },
    ]

    const [testimonilData, setTestimonailData] = useState('');

    useEffect(() => {
        setTestimonailData(data);
    }, [])

    return (
        <div className="container sliderContainer mt-5">
            <h2 className="headStyle d-inline-block mb-5">WHAT OUR CUSTOMERS SAY</h2>
            <Slider {...settings}>
                {testimonilData && testimonilData.map((testimonial) => (
                    <div className="slickItem">
                        <div className="d-lg-flex align-items-center slickItenInner">
                            <div className="slickImage">
                                <i className={`fas ${testimonial.image} f-60 mr-4`}  ></i>
                            </div>
                            <div className="slickContent mt-3 mt-lg-0">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.review}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}


export default TestimonialSlider;