import React, { useState } from 'react';
import Locations from './Locations'; // Adjust the path as necessary
import PatientReviews from './PatientReviews'; // Adjust the path as necessary
import Slider from 'react-slick';
import Image1 from '../assets/hki-group-providers2.jpg.webp'; // Ensure the correct paths
import Image2 from '../assets/shutterstock_692941057.jpg.webp';
import Image3 from '../assets/hki-group-providers2.jpg.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

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
        <div className="bg-gray-100 py-1 pt-5 mb-0">
            {/* Header Section */}
            <div className="text-center px-4 mb-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                    NORTH HOUSTON, WOODLANDS AND CONROE'S TRUSTED COMPREHENSIVE KIDNEY CARE PROVIDER WHENEVER YOU NEED
                </h1>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto px-4 mt-2 mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-6 mb-10 rounded-lg shadow-lg">
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
                    <div className="lg:col-span-1">
                        <p className="text-lg text-gray-600 mb-4">
                            We are a group of committed, compassionate and caring
                            <span className="font-bold text-blue-500"> kidney doctors </span>
                            dedicated to providing high-quality care for patients.
                        </p>
                        <p className="text-lg text-gray-600 mb-4">
                            We offer a wide range of nephrology services for
                            <span className="font-bold text-blue-500"> kidney diseases</span>,
                            <span className="font-bold text-blue-500"> hypertension</span>,
                            <span className="font-bold text-blue-500"> kidney stones</span>,
                            and other kidney-related disorders. Additionally, we offer comprehensive
                            <span className="font-bold text-blue-500"> dialysis</span> treatment options.
                        </p>
                        <p className="text-lg text-gray-600 mb-4">
                            We believe in treating our patients as if they are our family, providing
                            the excellent care they deserve at any time of need.
                        </p>
                        <h2 className="font-bold text-2xl text-gray-800">OUR MISSION</h2>
                        <p className="text-lg text-gray-600">
                            To treat and care for patients as we want to be treated.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-4 mt-10 mb-10">
                <div className="flex flex-wrap justify-center gap-6 text-center">
                    {[
                        { title: "Acute Kidney Injury (AKI)", icon: "fas fa-procedures" },
                        { title: "Chronic Kidney Disease (CKD)", icon: "fas fa-hand-holding-medical" },
                        { title: "End Stage Renal Disease/Dialysis", icon: "fas fa-stethoscope" },
                        { title: "Kidney Stones & Cysts", icon: "fas fa-prescription-bottle-alt" },
                        { title: "Hypertension Management", icon: "fas fa-heartbeat" },
                        { title: "Post-Transplant Care", icon: "fas fa-heart" },
                        { title: "Hyponatremia", icon: "fas fa-vials" },
                    ].map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4">
                            <div className="text-blue-500 text-4xl mb-4">
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2">{service.title}</h3>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-blue-800">
                                LEARN MORE
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Patient Reviews component */}
            <section>
                <PatientReviews />
            </section>

            {/* Locations component */}
            <section>
                <Locations />
            </section>

        </div>
    );
};

export default Homepage;
