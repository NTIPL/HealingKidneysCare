import React from 'react';
import GoogleFormPage from './GoogleForm';
import Locations from './Locations';
import BlogLocationPage from './BlogLocation';
import Images12 from '../assets/kidney_stone_doctor.jpg';

const SignSymptomPage = () => {

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                {/* Header */}
                <a href='/signs-symptoms-kidney-stones-want-to-see-a-doctor' className="text-lg md:text-xl lg:text-2xl no-underline hover:underline font-bold text-link-orange mb-2">
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
                    <a href="https://my.clevelandclinic.org/health/diseases/15604-kidney-stones" target="_blank" rel="noopener noreferrer" className="text-link-orange font-bold no-underline hover:underline"> According the Cleveland Clinic</a>, about 1 in 10 people may develop this condition, and most of them are men between 30 and 40 years old.
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
                    To make an appointment at any of our three offices, call us at <a href="tel:8326102822" className="text-link-orange no-underline hover:text-blue-800 hover:underline font-bold">(832) 610-2822</a>.
                </p>

                <hr className="border-t border-black"></hr>

                {/* Tags */}
                <div className="mt-1">
                    <span className="text-sm text-gray-600">Tags: </span>
                    <a href='/blog/kidney-stones' className="text-sm no-underline hover:underline font-bold text-link-orange">Kidney Stones</a>
                </div>

            </div>

            <section>
                <GoogleFormPage />
            </section>

            <section>
                <Locations />
            </section>

            <section>
                <BlogLocationPage />
            </section>

        </div>
    );
};

export default SignSymptomPage;
