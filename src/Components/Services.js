import React from 'react';

const ServicesPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-800 mb-4">SERVICES</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Kidney disease (CKD) is a silent killer; more than 10% of the population worldwide is affected by CKD.
                    Our experienced and trained physicians work proactively in the diagnosis, education, and treatment options
                    best suited for every individual situation. Rest assured, our team is here to help you anytime in need.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Services We Offer */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Services we offer</h3>
                        <ul className="list-disc pl-5">
                            <li><a href="#acute-kidney-injury" className="font-bold text-blue-500 hover:text-blue-800">Acute Kidney Injury</a></li>
                            <li><a href="#chronic-kidney-disease" className="font-bold text-blue-500 hover:text-blue-800">Chronic Kidney Disease (CKD)</a></li>
                            <li><a href="#esrd-dialysis" className="font-bold text-blue-500 hover:text-blue-800">End Stage Renal Disease/Dialysis</a></li>
                            <li><a href="#kidney-stones" className="font-bold text-blue-500 hover:text-blue-800">Kidney Stones</a></li>
                            <li><a href="#hypertension-management" className="font-bold text-blue-500 hover:text-blue-800">Hypertension Management</a></li>
                            <li><a href="#post-transplant-care" className="font-bold text-blue-500 hover:text-blue-800">Post-Transplant Care</a></li>
                            <li><a href="#hyponatremia" className="font-bold text-blue-500 hover:text-blue-800">Hyponatremia</a></li>
                            <li><a href="#hematuria" className="font-bold text-blue-500 hover:text-blue-800">Hematuria</a></li>
                            <li><a href="#proteinuria" className="font-bold text-blue-500 hover:text-blue-800">Proteinuria</a></li>
                            <li><a href="#hyperkalemia" className="font-bold text-blue-500 hover:text-blue-800">Hyperkalemia</a></li>
                            <li><a href="#electrolyte-disorders" className="font-bold text-blue-500 hover:text-blue-800">Electrolyte Disorders</a></li>
                            <li><a href="#anemia" className="font-bold text-blue-500 hover:text-blue-800">Anemia</a></li>
                            <li><a href="#dialysis" className="font-bold text-blue-500 hover:text-blue-800">Dialysis</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Useful Links</h3>
                        <ul className="list-disc pl-5">
                            <li><a href="#how-kidneys-work" className="font-bold text-blue-500 hover:text-blue-800">How do Kidneys Work?</a></li>
                            <li><a href="#understanding-labs" className="font-bold text-blue-500 hover:text-blue-800">Understanding Labs</a></li>
                            <li><a href="#egfr-test" className="font-bold text-blue-500 hover:text-blue-800">EGFR/Kidney Function Test</a></li>
                            <li><a href="#renal-ultrasound" className="font-bold text-blue-500 hover:text-blue-800">Renal Ultrasound</a></li>
                            <li><a href="#kidney-biopsy" className="font-bold text-blue-500 hover:text-blue-800">Kidney Biopsy</a></li>
                            <li><a href="#dialysis-access" className="font-bold text-blue-500 hover:text-blue-800">Dialysis Access</a></li>
                        </ul>
                    </div>

                    {/* Insurances Accepted */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Insurances Accepted</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>Medicare</li>
                            <li>Aetna</li>
                            <li>BCBS of Texas</li>
                            <li>Cigna</li>
                            <li>United Healthcare</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;





// // src/Components/ServicesPage.js

// import React from 'react';

// const ServicesPage = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
//                 {/* Header */}
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">SERVICES</h2>
//                 <p className="text-gray-700 leading-relaxed mb-8">
//                     Kidney disease (CKD) is a silent killer; more than 10% of the population worldwide is affected by CKD.
//                     Our experienced and trained physicians work proactively in the diagnosis, education, and treatment options
//                     best suited for every individual situation. Rest assured, our team is here to help you anytime in need.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {/* Services We Offer */}
//                     <div>
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-4">Services we offer</h3>
//                         <ul className="list-disc pl-5">
//                             <li><a href="#acute-kidney-injury" className="font-bold text-blue-500 hover:text-blue-800">Acute Kidney Injury</a></li>
//                             <li><a href="#chronic-kidney-disease" className="font-bold text-blue-500 hover:text-blue-800">Chronic Kidney Disease (CKD)</a></li>
//                             <li><a href="#esrd-dialysis" className="font-bold text-blue-500 hover:text-blue-800">End Stage Renal Disease/Dialysis</a></li>
//                             <li><a href="#kidney-stones" className="font-bold text-blue-500 hover:text-blue-800">Kidney Stones</a></li>
//                             <li><a href="#hypertension-management" className="font-bold text-blue-500 hover:text-blue-800">Hypertension Management</a></li>
//                             <li><a href="#post-transplant-care" className="font-bold text-blue-500 hover:text-blue-800">Post-Transplant Care</a></li>
//                             <li><a href="#hyponatremia" className="font-bold text-blue-500 hover:text-blue-800">Hyponatremia</a></li>
//                             <li><a href="#hematuria" className="font-bold text-blue-500 hover:text-blue-800">Hematuria</a></li>
//                             <li><a href="#proteinuria" className="font-bold text-blue-500 hover:text-blue-800">Proteinuria</a></li>
//                             <li><a href="#hyperkalemia" className="font-bold text-blue-500 hover:text-blue-800">Hyperkalemia</a></li>
//                             <li><a href="#electrolyte-disorders" className="font-bold text-blue-500 hover:text-blue-800">Electrolyte Disorders</a></li>
//                             <li><a href="#anemia" className="font-bold text-blue-500 hover:text-blue-800">Anemia</a></li>
//                             <li><a href="#dialysis" className="font-bold text-blue-500 hover:text-blue-800">Dialysis</a></li>
//                         </ul>
//                     </div>

//                     {/* Useful Links */}
//                     <div>
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-4">Useful Links</h3>
//                         <ul className="list-disc pl-5">
//                             <li><a href="#how-kidneys-work" className="font-bold text-blue-500 hover:text-blue-800">How do Kidneys Work?</a></li>
//                             <li><a href="#understanding-labs" className="font-bold text-blue-500 hover:text-blue-800">Understanding Labs</a></li>
//                             <li><a href="#egfr-test" className="font-bold text-blue-500 hover:text-blue-800">EGFR/Kidney Function Test</a></li>
//                             <li><a href="#renal-ultrasound" className="font-bold text-blue-500 hover:text-blue-800">Renal Ultrasound</a></li>
//                             <li><a href="#kidney-biopsy" className="font-bold text-blue-500 hover:text-blue-800">Kidney Biopsy</a></li>
//                             <li><a href="#dialysis-access" className="font-bold text-blue-500 hover:text-blue-800">Dialysis Access</a></li>
//                         </ul>
//                     </div>

//                     {/* Insurances Accepted */}
//                     <div>
//                         <h3 className="text-2xl font-semibold text-gray-800 mb-4">Insurances Accepted</h3>
//                         <ul className="list-disc pl-5 text-gray-700">
//                             <li>Medicare</li>
//                             <li>Aetna</li>
//                             <li>BCBS of Texas</li>
//                             <li>Cigna</li>
//                             <li>United Healthcare</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServicesPage;
