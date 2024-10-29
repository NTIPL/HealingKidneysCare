import React from 'react';

const PatientReviews = () => {
    return (
        <div className="bg-gray-100 py-1">
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
        </div>
    );
};

export default PatientReviews;
