import React from 'react';
import image8 from '../assets/kidney_stone_doctor.jpg';
import image11 from '../assets/Kidney_Stones.jpg';
import InputMask from 'react-input-mask';

const InsideKidneyStonePage = () => {
    const blogPosts = [
        {
            title: "Signs and Symptoms of Kidney Stones: When To See a Doctor",
            date: "Oct. 24, 2024",
            content: "Your kidneys are a vital organ that helps cleanse the body by filtering waste to create urine and help produce certain hormones. Therefore, if you have signs of problems such...",
            image: image8,
            link: "/signs-symptoms-kidney-stones-want-to-see-a-doctor" // Sample link, update with actual URL if available
        },
        {
            title: "Kidney Stones: Causes for Concern",
            date: "Dec. 18, 2023",
            content: "Kidney stones, tiny mineral deposits that form in the kidneys, can bring excruciating pain. Imagine sharp, intense discomfort starting in your back, often radiating to your lower abdomen or groin...",
            image: image11,
            link: "/kidney-stones-causes-for-concern" // Sample link, update with actual URL if available
        },
        
    ];


    const handleSubmit = (e) => {
        // Prevent form submission if any input is invalid
        if (!e.target.checkValidity()) {
            e.preventDefault(); // Prevent form submission
            // Optionally display a message or handle invalid input feedback
            alert('Please fill out the form correctly.');
        }
    };

    const hours = [
        { day: 'Monday', hours: '8:30 am - 5:00 pm' },
        { day: 'Tuesday', hours: '8:30 am - 5:00 pm' },
        { day: 'Wednesday', hours: '8:30 am - 5:00 pm' },
        { day: 'Thursday', hours: '8:30 am - 5:00 pm' },
        { day: 'Friday', hours: '8:30 am - 5:00 pm' },
        { day: 'Saturday', hours: 'Closed' },
        { day: 'Sunday', hours: 'Closed' }
    ];


    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 mb-6">Blog</h1>
                <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="flex flex-col sm:flex-row border-b pb-4">
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-auto sm:w-32 h-auto object-cover mr-0 sm:mr-4 rounded"
                                />
                            )}
                            <div className="flex-grow">
                                <a href={post.link} className="text-lg md:text-xl lg:text-2xl font-bold text-blue-500 no-underline hover:underline">
                                    {post.title}
                                </a>
                                <p className="text-sm text-gray-500">{post.date}</p>
                                <p className="mt-2">{post.content}</p>
                                <a href={post.link} className="text-blue-500 font-bold no-underline hover:underline">Read more</a>
                            </div>
                        </div>
                    ))}
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

export default InsideKidneyStonePage;
