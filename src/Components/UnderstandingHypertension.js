import React from 'react';
import Images14 from '../assets/Hypertension_kidney.jpg';


const UnderstandingHypertensionPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                {/* Header */}
                <a href="/understanding-hypertension-causes-symptoms-and-risk-factors" className="text-lg md:text-xl lg:text-2xl no-underline hover:underline font-bold text-blue-500 mb-2">
                    Understanding Hypertension: Causes, Symptoms, and Risk Factors
                </a>
                <p className="text-gray-500 mb-6">Posted on: Jun. 10, 2024.</p>

                {/* Centered image with paragraph below */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={Images14}
                        alt="Blood pressure monitor showing readings"
                        className="rounded-lg shadow-md max-w-full h-auto mb-4"
                    />
                    <p className="text-gray-700 leading-relaxed">
                        The <a href='/physicians' target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold no-underline hover:underline">team of providers</a> at
                        <a href='/' target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold no-underline hover:underline"> The Healing Kidneys Institute of Houston</a>
                        helps patients live well with kidney-related diseases and disorders.
                        Hypertension is a common issue we help treat and manage.
                        Keep reading to understand hypertension, and come see us for help managing your risk.


                    </p>
                </div>

                {/* What Causes Hypertension Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    What Causes Hypertension?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    High blood pressure, also called hypertension, occurs when blood pressure in the arteries is persistently elevated above healthy blood pressure levels.
                    This puts extra stress on the heart and blood vessels, increasing your risk for stroke and heart disease.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    High blood pressure does not always cause obvious symptoms, so you may have heard it called the 'silent killer'.
                    This nickname is unfortunate but accurate.
                    By the time a patient experiences symptoms, hypertension has already caused damage and stress to the body.
                </p>

                {/* Symptoms Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    Symptoms of Hypertension
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Many patients with hypertension do not even know it because it does not present symptoms, and is only discovered with a health
                    screening by a doctor. Some patients experience lightheadedness or headaches, fatigue, ringing in the ears, vertigo, or fainting
                    episodes.
                </p>

                {/* Risk Factors Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    Risk Factors
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    While you may be predisposed to high blood pressure, you can manage your risk with a healthy lifestyle.
                    The most impactful change you can make is to lose weight if you are overweight or obese.
                    The larger you are, your heart needs to work harder to pump enough blood to support the body. Getting rid of excess weight reduces stress on the heart.
                    Other lifestyle recommendations to manage your risk are:
                </p>
                <ul className="list-disc pl-8 mb-8 text-gray-700">
                    <li>A balanced diet that limits saturated fats, sodium, and excess sugar.</li>
                    <li>Quit smoking if you smoke</li>
                    <li>Limit alcohol intake</li>
                    <li>Regular aerobic exercise</li>
                    <li>Manage stress levels with regular self-care</li>
                </ul>

                {/* Get Checked Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    Get Checked Out Now
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    At <a href='/' target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold no-underline hover:underline">The Healing Kidneys Institute of Houston</a>, our kidney doctors help patients control hypertension in 
                    <a href='/locations-directions' target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold no-underline hover:underline"> Conroe, Shenandoah, and Houston, TX</a>. Contact us for an appointment at 
                    <a href="tel:8326102822" className="text-blue-500 no-underline hover:text-blue-800 hover:underline font-bold"> (832) 610-2822</a>.
                </p>

                <hr className="border-t border-black" />

                {/* Tags */}
                <div className="mt-1">
                    <span className="text-sm text-gray-600">Tags: </span>
                    <a href="/" className="text-sm no-underline hover:underline font-bold text-blue-500">Hypertension</a>
                </div>

                {/* Contact Form - Reused from HowNephrologistsPage */}
                <div className="max-w-5xl mx-auto bg-blue-500 shadow-lg rounded-lg p-8 mt-10">
                    <div className="text-center mb-6">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 text-white">CONTACT US</h1>
                        <p className="text-white font-bold">Send Us an Email</p>
                    </div>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        alert('Form submitted successfully!');
                    }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Enter your name (Required)"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                                    required
                                    pattern="[A-Za-z\s]+"
                                    title="Please enter a valid name (letters and spaces only)"
                                />
                                <input
                                    type="email"
                                    placeholder="Enter email (Required)"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                                    required
                                    pattern="[a-zA-Z0-9._%+-]+@gmail\.com$"
                                    title="Please enter a valid Gmail address"
                                />
                                <input
                                    type="tel"
                                    placeholder="(XXX)XXX-XXXX (Required)"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                                    required
                                    pattern="\(\d{3}\)\d{3}-\d{4}"
                                    title="Please enter a valid phone number"
                                />
                                <select
                                    className="w-full p-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>Interested in telehealth?</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div>
                                <textarea
                                    placeholder="Notes to the Doctor"
                                    className="w-full h-full p-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 min-h-[150px]"
                                />
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-white text-sm mb-4">
                                Please do not submit any Protected Health Information (PHI).
                            </p>

                            <button
                                type="submit"
                                className="bg-blue-800 text-white font-bold px-8 py-2 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>

                {/* Hours and Location Section */}
                <div className="bg-gray-100 mt-10">
                    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Location Section */}
                            <div className="flex flex-col w-full md:w-[60%] h-[340px]">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mb-4">OUR LOCATION</h2>
                                <div className="relative h-full bg-gray-100 rounded-lg overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.866103540454!2d-95.4579249844064!3d30.182280281893143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8645b3f7207615c3%3A0x6c0a3b5e02b886b6!2s150%20Pine%20Forest%20Dr%20Suite%20101%2C%20Shenandoah%2C%20TX%2077384%2C%20United%20States!5e0!3m2!1sen!2sus!4v1698597407437!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title="Google Map Location"
                                    />
                                    <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                                        <span>Map data provided by </span>
                                        <span className="text-blue-600">Google</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hours Section */}
                            <div className="flex flex-col w-full md:w-[40%] h-[340px] justify-between">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mb-4">HOURS OF OPERATION</h2>
                                <div className="space-y-1 h-full overflow-auto">
                                    {[
                                        { day: 'Monday', hours: '8:30 am - 5:00 pm' },
                                        { day: 'Tuesday', hours: '8:30 am - 5:00 pm' },
                                        { day: 'Wednesday', hours: '8:30 am - 5:00 pm' },
                                        { day: 'Thursday', hours: '8:30 am - 5:00 pm' },
                                        { day: 'Friday', hours: '8:30 am - 5:00 pm' },
                                        { day: 'Saturday', hours: 'Closed' },
                                        { day: 'Sunday', hours: 'Closed' }
                                    ].map((item) => (
                                        <div key={item.day} className="flex w-full">
                                            <div className="bg-red-500 text-white text-sm p-2 font-semibold text-center w-1/2">
                                                {item.day}:
                                            </div>
                                            <div className="p-2 bg-gray-100 text-center text-sm flex-1">
                                                {item.hours}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderstandingHypertensionPage;