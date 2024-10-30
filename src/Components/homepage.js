

import React, { useState } from 'react';
import Locations from './Locations'; // Adjust the path as necessary
import PatientReviews from './PatientReviews'; // Adjust the path as necessary
import Slider from 'react-slick';
import Image1 from '../assets/hki-group-providers2.jpg.webp'; // Ensure the correct paths
import Image2 from '../assets/shutterstock_692941057.jpg.webp';
import Image3 from '../assets/hki-group-providers2.jpg.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [isPaused, setIsPaused] = useState(false);

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !isPaused, // Carousel pauses/plays based on button click
        autoplaySpeed: 3000, // Adjust speed as needed
        pauseOnHover: true,
    };

    const handlePausePlay = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-5xl mx-auto mb-10">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-600">
                    NORTH HOUSTON, WOODLANDS AND CONROE'S TRUSTED COMPREHENSIVE KIDNEY CARE PROVIDER WHENEVER YOU NEED
                </h1>
            </div>

            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
                {/* Main Content Section */}
                <div className="mx-auto max-w-5xl mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-lg">
                        {/* Image Carousel Section */}
                        <div className="lg:col-span-1">
                            <Slider {...settings}>
                                <div>
                                    <img src={Image1} alt="Kidney Care Group 1" className="w-full rounded-lg" />
                                </div>
                                <div>
                                    <img src={Image2} alt="Kidney Care Group 2" className="w-full rounded-lg" />
                                </div>
                                <div>
                                    <img src={Image3} alt="Kidney Care Group 3" className="w-full rounded-lg" />
                                </div>
                            </Slider>

                            {/* Pause/Play Button */}
                            <div className="mt-4 text-center">
                                <FontAwesomeIcon
                                    icon={isPaused ? faPlay : faPause}
                                    className="text-blue-500 text-2xl cursor-pointer"
                                    onClick={handlePausePlay} // Make it clickable to toggle
                                    aria-label={isPaused ? "Play Carousel" : "Pause Carousel"}
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="lg:col-span-1 px-4">
                            <p className="text-base text-gray-600 mb-4">
                                We are a group of committed, compassionate and caring
                                <a href="#kidney-doctor" className="font-bold text-blue-500 no-underline hover:underline"> kidney doctors </a>
                                dedicated to providing high-quality care for patients.
                            </p>
                            <p className="text-base text-gray-600 mb-4">
                                We offer a wide range of nephrology services for
                                <a href="#kidney-diseases" className="font-bold text-blue-500 no-underline hover:underline"> kidney diseases</a>,
                                <a href="#hypertension" className="font-bold text-blue-500 no-underline hover:underline"> hypertension</a>,
                                <a href="#kidney-stones" className="font-bold text-blue-500 no-underline hover:underline"> kidney stones</a>,
                                and other kidney-related disorders. Additionally, we offer comprehensive
                                <a href="#dialysis" className="font-bold text-blue-500 no-underline hover:underline"> dialysis</a> treatment options.
                            </p>
                            <p className="text-base text-gray-600 mb-4">
                                We believe in treating our patients as if they are our family, providing
                                the excellent care they deserve at any time of need.
                            </p>
                            <h2 className="font-bold text-xl text-gray-600">OUR MISSION</h2>
                            <p className="text-base text-gray-600">
                                To treat and care for patients as we want to be treated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-5xl mx-auto mb-10">
                <div className="flex flex-wrap justify-center text-center">

                    {[
                        { title: "Acute Kidney Injury (AKI)", icon: "fas fa-procedures", link: "/" },
                        { title: "Chronic Kidney Disease (CKD)", icon: "fas fa-hand-holding-medical", link: "/services/kidney-disease" },
                        { title: "End Stage Renal Disease/Dialysis", icon: "fas fa-stethoscope", link: "/services/dialysis" },
                        { title: "Kidney Stones & Cysts", icon: "fas fa-prescription-bottle-alt", link: "/services/kidney-stones" },
                        { title: "Hypertension Management", icon: "fas fa-heartbeat", link: "/services/hypertension" },
                        { title: "Post-Transplant Care", icon: "fas fa-heart", link: "/" },
                        { title: "Hyponatremia", icon: "fas fa-vials", link: "/" },
                    ].map((service, index) => (
                        <div key={index} className="hover:bg-white hover:border p-6 mb-4 rounded-lg flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4">
                            <div className="text-blue-500 text-4xl mb-4">
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2">{service.title}</h3>
                            <Link to={service.link}>
                                <button className="bg-blue-500 font-bold text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-800">
                                    LEARN MORE
                                </button>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>

            <section>
                <PatientReviews />
            </section>

            <section>
                <Locations />
            </section>


        </div>
    );
};

export default Homepage;






