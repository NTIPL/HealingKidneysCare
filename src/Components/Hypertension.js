import React from 'react';
import Image4 from '../assets/hypertension.jpg.webp'; // Update the path to your image

const HypertensionPage = () => {
    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                {/* Header - Centered for impact */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 mb-6">Hypertension</h2>

                {/* Flex container for image and first paragraph */}
                <div className="flex flex-col mb-8 lg:flex-row">
                    {/* Image appears before the first paragraph on mobile */}
                    <div className="flex justify-center mb-4 lg:w-1/3 lg:mb-0">
                        <img src={Image4} alt="Hypertension" className="rounded-lg shadow-md max-w-full h-auto" />
                    </div>
                    <div className="lg:w-2/3 lg:pl-8">
                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                            Hypertension is commonly known as high blood pressure and is a silent but serious condition that affects millions of people worldwide.
                            Despite its lack of noticeable symptoms in many cases, hypertension can significantly increase the risk of heart disease, stroke, and other complications.
                            It’s important to know if hypertension could affect you and if you’re at a high risk for dealing with it.
                            If hypertension is left unmanaged, it could lead to serious complications throughout your life.
                        </p>
                    </div>
                </div>

                {/* Remaining Content */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">Dealing With Hypertension</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Hypertension occurs when the force of blood against the walls of the arteries is consistently too high.
                    This then places strain on the heart and blood vessels, increasing the risk of heart attack, stroke, and other cardiovascular diseases.
                    Blood pressure is measured using two numbers: systolic pressure (the pressure when the heart beats) and diastolic pressure (the pressure when the heart rests between beats).
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Various factors can contribute to your overall risk of dealing with hypertension. These factors include:
                </p>
                <ul className="list-disc pl-5 list-inside text-gray-700 mb-8">
                    <li>Unhealthy diet</li>
                    <li>Lack of exercise</li>
                    <li>Obesity</li>
                    <li>Smoking</li>
                    <li>Excessive alcohol consumption</li>
                    <li>Chronic stress</li>
                    <li>Family history of hypertension</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-8">
                    The most common way to manage these risk factors is through lifestyle changes.
                    You must manage your diet and make sure that you’re reaching all of your nutritional needs.
                    You should also be limiting things like sodium, saturated fats, and refined sugars.
                    You should also be exercising regularly and managing your weight.
                    You may need medication to help manage your blood pressure and keep it stable.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    It’s also crucial that you find ways to manage stress and promote relaxation.
                </p>
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">Contact Our Doctor Today</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Make sure that you’re not ignoring hypertension and that you understand the factors in your life that could lead to it.
                    Contact our doctors at <a href='/' className='text-link-orange no-underline hover:text-blue-800 hover:underline font-bold'>Healing Kidneys </a> 
                     Institute of Houston in Conroe, The Woodlands, and Houston, TX, 
                    at <a href="tel:8326102822" className="text-link-orange no-underline hover:text-blue-800 hover:underline font-bold">(832) 610-2822</a> to learn
                    more about hypertension and if it could affect you.
                </p>
            </div>
        </div>
    );
};

export default HypertensionPage;
