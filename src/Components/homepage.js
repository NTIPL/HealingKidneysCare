import React, { useState } from 'react';
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

    const locations = [
        {
            name: "Conroe",
            address: "200 S. Rivershire Dr, Suite #300\nConroe, TX 77304",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.1696142804656!2d-95.47156288488246!3d30.305279681795113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86472a5f03e5c139%3A0x1f22c5899aa4b1f5!2s200%20S%20Rivershire%20Dr%2C%20Conroe%2C%20TX%2077304%2C%20USA!5e0!3m2!1sen!2sin!4v1698161948489!5m2!1sen!2sin"
        },
        {
            name: "The Woodlands",
            address: "150 Pine Forest Dr, Suite #101\nShenandoah, TX 77384",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.243668490933!2d-95.45952908487595!3d30.19042372199312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864737c3b2150e6f%3A0xe0fc1e17e0e1ac04!2s150%20Pine%20Forest%20Dr%2C%20Shenandoah%2C%20TX%2077384%2C%20USA!5e0!3m2!1sen!2sin!4v1698162012575!5m2!1sen!2sin"
        },
        {
            name: "Houston",
            address: "724 FM 1960, Suite #210\nHouston, TX 77090",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.4569820592735!2d-95.41801758487535!3d30.01148832156844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86473fc32f75ef41%3A0x826ab80ae0785a77!2s724%20FM%201960%20Rd%20W%2C%20Houston%2C%20TX%2077090%2C%20USA!5e0!3m2!1sen!2sin!4v1698162031890!5m2!1sen!2sin"
        }
    ];

    return (
        <div className="bg-gray-100 py-5 mb-0">
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

            {/* Patient Reviews Section */}
            <div className="container mx-auto px-4 mt-10 mb-10">
                <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-6">What our patients are saying</h2>

                {/* Reviews and Ratings Links Section */}
                <div className="text-center mb-10 bg-gray-200 p-2 rounded-lg flex flex-wrap justify-center items-center"> {/* Added flex wrap for responsiveness */}
                    <a href="#all-reviews" className="font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">All Reviews</a> 4.9
                    <span className="mx-2">|</span>

                    <a href="#google" className="flex items-center font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">
                        <img src={require('../assets/google.webp')} alt="Google" className="h-5 w-5 mr-1" /> {/* Google Icon */}
                        Google
                    </a> 3.5
                    <span className="mx-2">|</span>

                    <a href="#google5" className="flex items-center font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">
                        <img src={require('../assets/google.webp')} alt="Google" className="h-5 w-5 mr-1" /> {/* Google Icon */}
                        Google
                    </a> 5.0
                    <span className="mx-2">|</span>

                    <a href="#Healthgrades" className="flex items-center font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">
                        <img src={require('../assets/png-transparent-healthgrades-hd-logo.png')} alt="Healthgrades" className="h-5 w-5 mr-1" /> {/* Healthgrades Icon */}
                        Healthgrades
                    </a> 5.0
                    <span className="mx-2">|</span>

                    <a href="#Healthgrades5" className="flex items-center font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">
                        <img src={require('../assets/png-transparent-healthgrades-hd-logo.png')} alt="Healthgrades" className="h-5 w-5 mr-1" /> {/* Healthgrades Icon */}
                        Healthgrades
                    </a> 5.0
                </div>


                {/* Reviews Grid */}
                <div className="flex flex-wrap justify-center gap-6 text-center">
                    {[
                        {
                            name: "Charles Martin",
                            rating: "★★★★★",
                            description: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner."
                        },
                        {
                            name: "Jo Ann Koontz",
                            rating: "★★★★★",
                            description: "Was referred by PCP for high blood pressure. Front desk very good about it."
                        },
                        {
                            name: "Richard Kohler",
                            rating: "★★★★★",
                            description: "I have nothing bad to say. Medical staff helped me get medication assistance."
                        },
                        {
                            name: "Alex Johnson",
                            rating: "★★★★★",
                            description: "Excellent service and care. I always feel listened to and well cared for."
                        },
                        {
                            name: "Linda Green",
                            rating: "★★★★★",
                            description: "Very compassionate and skilled doctors. I highly recommend their care."
                        },
                        {
                            name: "Tom White",
                            rating: "★★★★★",
                            description: "Highly knowledgeable staff. They made my treatment a smooth experience."
                        }
                    ].map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4">
                            <div className="text-yellow-500 text-4xl mb-4">{review.rating}</div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2">{review.name}</h3>
                            <p className="text-sm text-gray-600">{review.description}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-800">
                                READ MORE
                            </button>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-6">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-800">
                        LOAD MORE
                    </button>
                </div>
            </div>



            {/* Locations */}
            <div className="container mx-auto px-4 mt-10">
                {/* Centered heading for all locations */}
                <h3 className="font-bold text-center">Find Us Here:</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-6 mt-2 rounded-lg shadow-lg">
                    {locations.map((location, index) => (
                        <div key={index} className="text-center border rounded-lg mt-5 shadow-lg p-3">
                            {/* Location name */}
                            <h2 className="font-bold text-xl mb-4">{location.name}</h2>
                            {/* Location address */}
                            <p className="text-gray-700 whitespace-pre-line mb-4">{location.address}</p>

                            {/* Map iframe */}
                            <div className="border rounded-lg overflow-hidden">
                                <iframe
                                    src={location.mapSrc}
                                    width="100%"
                                    height="220"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title={location.name}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Homepage;
