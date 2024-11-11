import React from 'react';

const ServicesPage = () => {
    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                {/* Header */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 mb-4">SERVICES</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                    Kidney disease (CKD) is a silent killer; more than 10% of the population worldwide is affected by CKD.
                    Our experienced and trained physicians work proactively in the diagnosis, education, and treatment options
                    best suited for every individual situation. Rest assured, our team is here to help you anytime in need.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Services We Offer */}
                    <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mb-4">Services we offer</h3>
                        <ul className="list-disc pl-5">
                            <li><a href="https://www.kidney.org/kidney-topics/acute-kidney-injury-aki" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Acute Kidney Injury</a></li>
                            <li><a href="/services/kidney-disease" className="font-bold text-link-orange no-underline hover:text-blue-800">Chronic Kidney Disease (CKD)</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/dialysis" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">End Stage Renal Disease/Dialysis</a></li>
                            <li><a href="/services/kidney-stones" className="font-bold text-link-orange no-underline hover:text-blue-800">Kidney Stones</a></li>
                            <li><a href="/services/hypertension" className="font-bold text-link-orange no-underline hover:text-blue-800">Hypertension Management</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/life-kidney-transplant" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Post-Transplant Care</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/hyponatremia-low-sodium-level-blood" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Hyponatremia</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/hematuria-adults" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Hematuria</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/urine-albumin-creatinine-ratio-uacr" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Proteinuria</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/hyperkalemia-high-potassium" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Hyperkalemia</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/mineral-and-bone-disorder" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Electrolyte Disorders</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/anemia-and-chronic-kidney-disease" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Anemia</a></li>
                            <li><a href="/services/dialysis" className="font-bold text-link-orange no-underline hover:text-blue-800">Dialysis</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mb-4">Useful Links</h3>
                        <ul className="list-disc pl-5">
                            <li><a href="https://www.kidney.org/es/node/25721" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">How do Kidneys Work?</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/understanding-your-lab-values-and-other-ckd-health-numbers" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Understanding Labs</a></li>
                            <li><a href="https://www.kidney.org/news-stories/advocacy/coping-chronic-kidney-disease-being-advocate-saved-my-life" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">EGFR/Kidney Function Test</a></li>
                            <li><a href="https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/kidney-ultrasound" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Renal Ultrasound</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/kidney-biopsy" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Kidney Biopsy</a></li>
                            <li><a href="https://www.kidney.org/kidney-topics/hemodialysis-access" target="_blank" rel="noreferrer" className="font-bold text-link-orange no-underline hover:text-blue-800">Dialysis Access</a></li>
                        </ul>
                    </div>

                    {/* Insurances Accepted */}
                    <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 mb-4">Insurances Accepted</h3>
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
