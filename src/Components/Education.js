import React from 'react';
import Image5 from '../assets/Cutsection-of-Kidney.jpg.webp';
import Image6 from '../assets/Diabetes-effects.jpg.webp';
import Image7 from '../assets/Detailed-kidney-Anatomy.jpg.webp';

const EducationPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                {/* Header */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 mb-6 text-center">Education</h2>

                {/* Images Section */}
                <div className="flex flex-col gap-6">
                    <div className="rounded-lg overflow-hidden shadow-md py-4 px-2">
                        <img 
                            src={Image5} 
                            alt="Cut Section of Kidney" 
                            className="w-full h-auto max-h-[500px] object-contain rounded-lg" 
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md py-4 px-2">
                        <img 
                            src={Image6} 
                            alt="Diabetes Effects" 
                            className="w-full h-auto max-h-[500px] object-contain rounded-lg" 
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md py-4 px-2">
                        <img 
                            src={Image7} 
                            alt="Detailed Kidney Anatomy" 
                            className="w-full h-auto max-h-[500px] object-contain rounded-lg" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationPage;
