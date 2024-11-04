import React from 'react';
import InputMask from 'react-input-mask';
import Images12 from '../assets/kidney_stone_doctor.jpg';

const SignSymptomPage = () => {
    const hours = [
        { day: 'Monday', hours: '8:30 am - 5:00 pm' },
        { day: 'Tuesday', hours: '8:30 am - 5:00 pm' },
        { day: 'Wednesday', hours: '8:30 am - 5:00 pm' },
        { day: 'Thursday', hours: '8:30 am - 5:00 pm' },
        { day: 'Friday', hours: '8:30 am - 5:00 pm' },
        { day: 'Saturday', hours: 'Closed' },
        { day: 'Sunday', hours: 'Closed' }
    ];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Prevent form submission if any input is invalid
        if (!e.target.checkValidity()) {
            alert('Please fill out the form correctly.');
            return; // Stop further execution
        }

        // Handle form submission logic here (e.g., sending data to an API)
        alert('Form submitted successfully!');
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                {/* Header */}
                <a href='/signs-symptoms-kidney-stones-want-to-see-a-doctor' className="text-lg md:text-xl lg:text-2xl no-underline hover:underline font-bold text-blue-500 mb-2">
                    Signs and Symptoms of Kidney Stones: When to See a Doctor
                </a>
                <p className="text-gray-500 mb-6">Posted on: Oct. 24, 2024.</p> {/* Add the posted date here */}

                {/* Centered image with paragraph below */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={Images12}
                        alt="Medical professional examining kidney stone"
                        className="rounded-lg shadow-md max-w-full h-auto mb-4"
                    />
                    <p className="text-gray-700 leading-relaxed">
                        Your kidneys are a vital organ that helps cleanse the body by filtering waste to create urine and help produce certain hormones.
                        Therefore, if you have signs of problems such as kidney stones in Houston, Conroe, & The Woodlands, TX, you should seek medical help.
                        Luckily, you have a strong team of doctors at The Healing Kidneys Institute of Houston to assist you.
                    </p>
                </div>

                {/* What Are Kidney Stones Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    What Are Kidney Stones?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Hard mineral or salt deposits can form inside your kidneys with too little liquid.
                    They vary in size but can become as large as a golf ball.
                    You can experience pain and other signs of illness when they grow in size.
                    <a href="https://my.clevelandclinic.org/health/diseases/15604-kidney-stones" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold no-underline hover:underline"> According the Cleveland Clinic</a>, about 1 in 10 people may develop this condition, and most of them are men between 30 and 40 years old.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    There are four classifications for these stones based on their substance.
                    You may develop calcium-oxalate/calcium phosphate stones, uric acid stones, struvite stones from bacterial infection, or cystine stones from cystinuria.
                </p>

                {/* Signs and Symptoms Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    Signs and Symptoms of Kidney Stones
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    One of the common signs of this condition is pain in the groin, back, side, or lower abdomen.
                    Urine may be smelly, cloudy, or bloody and become more frequent or painful. Chills, fever, nausea, and vomiting can also occur.
                    One way they cause pain and prevent urination is when a large one gets stuck in your ureter, creating a potentially toxic backup.
                </p>

                {/* Treatment Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    What to Expect from Treatment
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    When you seek care for kidney stones in Houston, Conroe, & The Woodlands, TX, your doctors must diagnose you properly through urine, imaging, and blood tests.
                    The Healing Kidneys Institute of Houston doctors will likely advise you to drink lots of water to flush them out and may prescribe pain-relief medication.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    If you have a blockage that won’t pass on its own, your doctors may use shockwave lithotripsy to break them up, allowing those now smaller fragments to pass with urine.
                    Surgical procedures like percutaneous nephrolithotomy involve reaching the kidneys through a small incision in the back to use ultrasound to break the stones up.
                    They may need to perform a more open surgery for more difficult larger stones.
                    Your doctors will also advise lifestyle adjustments like more hydration, reducing animal protein, and high-sugar, high-sodium, and high-oxalate foods.
                    They can also prescribe certain medications for prevention.
                </p>

                {/* Contact Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    Contact Our Doctors
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    The Healing Kidneys Institute of Houston doctors can help you heal from and prevent kidney stones in Houston, Conroe, & The Woodlands, TX.
                    Most stones pass on their own, but our doctors have methods when they don’t.
                    To make an appointment at any of our three offices, call us at <a href="tel:8326102822" className="text-blue-500 no-underline hover:text-blue-800 hover:underline font-bold">(832) 610-2822</a>.
                </p>

                <hr className="border-t border-black"></hr>

                {/* Tags */}
                <div className="mt-1">
                    <span className="text-sm text-gray-600">Tags: </span>
                    <a href='/' className="text-sm no-underline hover:underline font-bold text-blue-500">Kidney Stones</a>
                </div>

                {/* {Google Form} */}
                <div className="max-w-5xl mx-auto bg-blue-500 shadow-lg rounded-lg p-8 mt-10">
                    <div className="text-center mb-6">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 text-white">CONTACT US</h1>
                        <p className="text-white font-bold">Send Us an Email</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Enter your name (Required)"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                                    required
                                    pattern="[A-Za-z\s]+" // Allows only letters and spaces
                                    title="Please enter a valid name (letters and spaces only)"
                                />
                                <input
                                    type="email"
                                    placeholder="Enter email (Required)"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                                    required
                                    pattern="[a-zA-Z0-9._%+-]+@gmail\.com$" // Allows only Gmail addresses
                                    title="Please enter a valid Gmail address (e.g., example@gmail.com)"
                                />
                                <InputMask
                                    mask="(999)999-9999"
                                    placeholder="(XXX)XXX-XXXX (Required)"
                                    className="w-full p-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                                    required
                                    title="Please enter a valid phone number in the format (XXX)XXX-XXXX"
                                >
                                    {(inputProps) => (
                                        <input
                                            {...inputProps}
                                            type="tel"
                                            maxLength={14}
                                        />
                                    )}
                                </InputMask>
                                <select
                                    className="w-full p-3 rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                                    defaultValue=""
                                    required // Make selection required
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

            </div>

            {/* <div className="bg-gray-100 min-h-screen py-4 mt-10 px-4 sm:px-6 lg:pb-8"> */}
            <div className="bg-gray-100 mt-10">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4">
                    <div className="flex flex-col md:flex-row gap-8"> {/* Use flex instead of grid */}

                        {/* Location Section */}
                        <div className="flex flex-col w-full md:w-[60%] h-[340px]"> {/* Set width to 60% */}
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mb-4">OUR LOCATION</h2>
                            <div className="relative h-full bg-gray-100 rounded-lg overflow-hidden"> {/* Use h-full to fill parent height */}
                                {/* Google Maps Embed */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.866103540454!2d-95.4579249844064!3d30.182280281893143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8645b3f7207615c3%3A0x6c0a3b5e02b886b6!2s150%20Pine%20Forest%20Dr%20Suite%20101%2C%20Shenandoah%2C%20TX%2077384%2C%20United%20States!5e0!3m2!1sen!2sus!4v1698597407437!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Google Map Location"
                                ></iframe>

                                {/* Attribution */}
                                <div className="absolute bottom-2 right-2 text-xs text-gray-600">
                                    <span>Map data provided by </span>
                                    <span className="text-blue-600">Google</span>
                                </div>
                            </div>
                        </div>

                        {/* Hours Section */}
                        <div className="flex flex-col w-full md:w-[40%] h-[340px] justify-between"> {/* Set width to 40% and match height */}
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mb-4">HOURS OF OPERATION</h2>
                            <div className="space-y-1 h-full overflow-auto"> {/* Allow scrolling if necessary */}
                                {hours.map((item) => (
                                    <div key={item.day} className="flex w-full">
                                        <div className="bg-red-500 text-white text-sm p-2 font-semibold text-center w-1/2"> {/* Set a fixed width for day labels */}
                                            {item.day}:
                                        </div>
                                        <div className="p-2 bg-gray-100 text-center text-sm flex-1"> {/* Allow hours to take remaining space */}
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
    );
};

export default SignSymptomPage;
