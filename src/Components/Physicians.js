import React from 'react';

const physicians = [
    {
        name: "Madhavilatha Vuppali, MD",
        image: require('../assets/1DrVuppali.jpg.webp'),
        fellowship: "Louisiana State University - Shreveport, LA",
        residency: "St. Joseph Mercy Medical Center - Pontiac, MI",
        certifications: "Nephrology, Internal Medicine",
        affiliations: [
            "CHI Baylor St. Lukes - The Woodlands",
            "HCA Houston Healthcare - Conroe",
            "HCA Houston Healthcare - Northwest",
            "Houston Methodist - The Woodlands",
            "Memorial Hermann - The Woodlands"
        ],
        dialysis: ["Davita", "FMC", "US Renal Care"]
    },
    {
        name: "Sushmitha Gandra, MD",
        image: require('../assets/Sushmitha_Gandra.webp'),
        fellowship: "University of Cincinnati - Cincinnati, OH",
        residency: "Lankenau Medical Center - Lankenau, PA",
        certifications: "Nephrology, Internal Medicine",
        affiliations: [
            "CHI Baylor St. Lukes - The Woodlands",
            "HCA Houston Healthcare - Conroe",
            "HCA Houston Healthcare - Northwest",
            "Houston Methodist - The Woodlands",
            "Memorial Hermann - The Woodlands"
        ],
        dialysis: ["Davita", "FMC", "US Renal Care"]
    },
    {
        name: "Dr. Amol Patel, D.O",
        image: require('../assets/dr-patel.jpg.webp'),
        fellowship: "University of Washington, Seattle, WA - Nephrology",
        residency: "Houston Methodist Hospital, Houston, TX",
        certifications: "Nephrology, Internal Medicine",
        affiliations: [
            "CHI Baylor St. Lukes - The Woodlands",
            "HCA Houston Healthcare - Conroe",
            "HCA Houston Healthcare - Northwest",
            "Houston Methodist - The Woodlands",
            "Memorial Hermann - The Woodlands"
        ],
        dialysis: ["Davita", "FMC", "US Renal Care"]
    }
];

const PhysicianPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">

            <div className="max-w-5xl mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600">Staff</h1>
                    <p className="text-gray-700 text-base text-left mt-3">
                        Our team of Providers are committed to providing excellent kidney care for patients in North Houston, Spring, The Woodlands & Conroe areas.
                        Our providers see patients both at the hospitals, in clinic, and at dialysis centers for continuity of care. We strive to coordinate
                        and inform other providers involved in your care, so we achieve the best possible outcomes in caring for you.
                    </p>
                </div>

                <div className="space-y-1">
                    {physicians.map((physician, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col items-center">
                                <img
                                    src={physician.image}
                                    alt={physician.name}
                                    className="w-full md:w-80 h-auto rounded-lg shadow-lg mb-4 object-cover"
                                />
                                <h2 className="text-xl font-bold text-gray-800 text-center">{physician.name}</h2>
                            </div>

                            <div className="md:w-full">
                                <div className="text-left">

                                    <h3 className="font-bold text-gray-700 mb-1 text-lg">Nephrology Fellowship</h3>
                                    <p className="text-gray-600 text-base mb-3">
                                        {physician.name === "Madhavilatha Vuppali, MD" && (
                                            <>
                                                <a href='https://www.lsus.edu/' target='_blank' rel="noreferrer" className="text-blue-500 no-underline font-bold hover:underline hover:text-blue-800 cursor-pointer">Louisiana State University</a> - Shreveport, LA
                                            </>
                                        )}
                                        {physician.name === "Sushmitha Gandra, MD" && (
                                            <>
                                                <a href='https://www.uc.edu/' target='_blank' rel="noreferrer" className="text-blue-500 no-underline font-bold hover:underline hover:text-blue-800 cursor-pointer">University of Cincinnati</a> - Cincinnati, OH
                                            </>
                                        )}
                                        {physician.name === "Dr. Amol Patel, D.O" && (
                                            <>
                                                <a href='https://www.washington.edu/' target='_blank' rel="noreferrer" className="text-blue-500 no-underline font-bold hover:underline hover:text-blue-800 cursor-pointer">University of Washington, Seattle, WA</a> - Nephrology
                                            </>
                                        )}
                                    </p>

                                    <h3 className="font-bold text-gray-700 mb-1 text-lg">Internal Medicine Residency</h3>
                                    <p className="text-gray-600 text-base mb-3">
                                        {physician.name === "Madhavilatha Vuppali, MD" && (
                                            <>
                                                <a href='https://www.trinityhealthmichigan.org/' target='_blank' rel="noreferrer" className="text-blue-500 no-underline font-bold hover:underline hover:text-blue-800 cursor-pointer">St. Joseph Mercy Medical Center</a> - Pontiac, MI
                                            </>
                                        )}
                                        {physician.name === "Sushmitha Gandra, MD" && (
                                            <>
                                                <a href='https://www.mainlinehealth.org/locations/lankenau-medical-center' target='_blank' rel="noreferrer" className="text-blue-500 no-underline font-bold hover:underline hover:text-blue-800 cursor-pointer">Lankenau Medical Center</a> - Lankenau, PA
                                            </>
                                        )}
                                        {physician.name === "Dr. Amol Patel, D.O" && (
                                            <>
                                                <a href='https://www.houstonmethodist.org/' target='_blank' rel="noreferrer" className="text-blue-500 no-underline font-bold hover:underline hover:text-blue-800 cursor-pointer">Houston Methodist Hospital, Houston, TX</a>
                                            </>
                                        )}
                                    </p>

                                    <h3 className="font-bold text-gray-700 mb-1 text-lg">Board Certifications</h3>
                                    <p className="text-gray-600 text-base mb-3">{physician.certifications}</p>

                                    <h3 className="font-bold text-gray-700 mb-1 text-lg">Hospital Affiliations</h3>
                                    <ul className="text-gray-600 p-0 text-base mb-3">
                                        {physician.affiliations.map((affiliation, idx) => (
                                            <li key={idx}>
                                                {/* Conditionally render links and plain text based on specified names */}
                                                {affiliation.includes("CHI Baylor St. Lukes") ? (
                                                    <>
                                                        <a href="https://www.stlukeshealth.org/" target="_blank" rel="noreferrer" className="text-blue-500 font-bold no-underline hover:underline hover:text-blue-800 cursor-pointer">
                                                            CHI Baylor St. Lukes
                                                        </a>
                                                        {affiliation.includes("The Woodlands") && " - The Woodlands"}
                                                    </>
                                                ) : affiliation.includes("HCA Houston Healthcare - Conroe") ? (
                                                    <>
                                                        <a href="https://www.hcahoustonhealthcare.com/" target="_blank" rel="noreferrer" className="text-blue-500 font-bold no-underline hover:underline hover:text-blue-800 cursor-pointer">
                                                            HCA Houston Healthcare
                                                        </a>
                                                        - Conroe
                                                    </>
                                                ) : affiliation.includes("HCA Houston Healthcare - Northwest") ? (
                                                    <>HCA Houston Healthcare - Northwest</>
                                                ) : affiliation.includes("Houston Methodist") ? (
                                                    <>
                                                        <a href="https://www.houstonmethodist.org/" target="_blank" rel="noreferrer" className="text-blue-500 font-bold no-underline hover:underline hover:text-blue-800 cursor-pointer">
                                                            Houston Methodist
                                                        </a>
                                                        {affiliation.includes("The Woodlands") && " - The Woodlands"}
                                                    </>
                                                ) : affiliation.includes("Memorial Hermann") ? (
                                                    <>
                                                        <a href="https://memorialhermann.org/" target="_blank" rel="noreferrer" className="text-blue-500 font-bold no-underline hover:underline hover:text-blue-800 cursor-pointer">
                                                            Memorial Hermann
                                                        </a>
                                                        {affiliation.includes("The Woodlands") && " - The Woodlands"}
                                                    </>
                                                ) : (
                                                    affiliation
                                                )}
                                            </li>
                                        ))}
                                    </ul>

                                    <h3 className="font-bold text-gray-700 mb-1 text-lg">Dialysis</h3>
                                    <ul className="text-gray-600 p-0 text-base">
                                        {physician.dialysis.map((center, idx) => (
                                            <li key={idx}>{center}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* Horizontal line between each physician */}
                            {/* <hr className="border-t-2 border-b my-2 col-span-2" /> */}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PhysicianPage;
