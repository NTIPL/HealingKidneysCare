import React from 'react';
import GoogleFormPage from './GoogleForm';
import Locations from './Locations';
import BlogLocationPage from './BlogLocation';
import Images14 from '../assets/Hypertension_kidney.jpg';


const UnderstandingHypertensionPage = () => {
    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                {/* Header */}
                <a href="/understanding-hypertension-causes-symptoms-and-risk-factors" className="text-lg md:text-xl lg:text-2xl no-underline hover:underline font-bold text-link-orange mb-2">
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
                        The <a href='/physicians' target="_blank" rel="noopener noreferrer" className="text-link-orange font-bold no-underline hover:underline">team of providers</a> at
                        <a href='/' target="_blank" rel="noopener noreferrer" className="text-link-orange font-bold no-underline hover:underline"> The Healing Kidneys Institute of Houston</a>
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
                    At <a href='/' target="_blank" rel="noopener noreferrer" className="text-link-orange font-bold no-underline hover:underline">The Healing Kidneys Institute of Houston</a>, our kidney doctors help patients control hypertension in
                    <a href='/locations-directions' target="_blank" rel="noopener noreferrer" className="text-link-orange font-bold no-underline hover:underline"> Conroe, Shenandoah, and Houston, TX</a>. Contact us for an appointment at
                    <a href="tel:8326102822" className="text-link-orange no-underline hover:text-blue-800 hover:underline font-bold"> (832) 610-2822</a>.
                </p>

                <hr className="border-t border-black" />

                {/* Tags */}
                <div className="mt-1">
                    <span className="text-sm text-gray-600">Tags: </span>
                    <a href="/" className="text-sm no-underline hover:underline font-bold text-link-orange">Hypertension</a>
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

export default UnderstandingHypertensionPage;