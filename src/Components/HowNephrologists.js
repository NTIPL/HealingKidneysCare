import React from 'react';
import GoogleFormPage from './GoogleForm';
import Locations from './Locations';
import BlogLocationPage from './BlogLocation';
import Images13 from '../assets/Nephrologists.jpg';

const HowNephrologistsPage = () => {

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                {/* Header */}
                <a href='/how-nephrologists-diagnose-kidney-disorders' className="text-lg md:text-xl lg:text-2xl no-underline hover:underline font-bold text-link-orange mb-2">
                    How Nephrologists Diagnose Kidney Disorders
                </a>
                <p className="text-gray-500 mb-6">Posted on: Aug. 13, 2024.</p> {/* Add the posted date here */}

                {/* Centered image with paragraph below */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={Images13}
                        alt="Medical professional examining kidney stone"
                        className="rounded-lg shadow-md max-w-full h-auto mb-4"
                    />
                    <p className="text-gray-700 leading-relaxed">
                        Nephrologists are specialists in kidney care who use a variety of diagnostic tools and methods to identify and manage kidney disorders.
                        Accurate diagnosis is crucial for effective treatment and maintaining overall kidney health.
                        If you’re dealing with a kidney disorder, it’s important that you’re able to get the proper treatment as soon as possible to avoid certain complications.
                        Your nephrologists at The Healing Kidneys Institute of Houston in Conroe, the Woodlands, and Houston, TX,
                        can explain what they do and how a nephrologist can diagnose your kidney disorder.
                    </p>
                </div>

                {/* What Are Kidney Stones Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    How Nephrologists Diagnose Kidney Diseases and Disorders
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    The diagnostic process begins with a thorough consultation.
                    Your nephrologist in Conroe, the Woodlands, and Houston, TX, will review your medical history, including any symptoms, family history of kidney disease, and any existing health conditions.
                    This information helps the nephrologist understand your risk factors and potential underlying issues.
                    A physical examination allows them to assess your general health and identify any physical signs of kidney problems.
                    They may check for swelling, changes in blood pressure, or other symptoms that could indicate kidney dysfunction.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Your nephrologist may recommend blood tests, urinalysis, or urine cultures to detect different types of disorders.
                    This can help spot different indications of certain disorders and determine the best treatment.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Your nephrologist might also want to perform imaging tests.
                    This can include an ultrasound, CT scan, or MRI.
                    In some cases, you may need a kidney biopsy.
                    This procedure involves taking a small sample of kidney tissue to examine under a microscope.
                    It helps diagnose specific types of kidney disease, determine the extent of damage, and guide treatment options.
                </p>

                {/* Contact Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">
                    Contact Our Nephrologists Today
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Make sure you understand how nephrologists work and how they can test for kidney disorders.
                    Contact your nephrologists at The Healing Kidneys Institute of Houston in Conroe, the Woodlands, and Houston, TX, to learn more about kidney testing.
                    Call for more information and to schedule your appointment today at <a href="tel:8326102822" className="text-link-orange no-underline hover:text-blue-800 hover:underline font-bold">(832) 610-2822</a>.
                </p>

                <hr className="border-t border-black"></hr>

                {/* Tags */}
                <div className="mt-1">
                    <span className="text-sm text-gray-600">Tags: </span>
                    <a href='/blog/nephrologists' className="text-sm no-underline hover:underline font-bold text-link-orange">Nephrologists</a>,
                    <a href='/blog/nephrologists' className="text-sm no-underline hover:underline font-bold text-link-orange"> Kidney Disease</a>,
                    <a href='/blog/nephrologists' className="text-sm no-underline hover:underline font-bold text-link-orange"> Kidney Disorder</a>
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

export default HowNephrologistsPage;
