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
                                                <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">Louisiana State University</span> - Shreveport, LA
                                            </>
                                        )}
                                        {physician.name === "Sushmitha Gandra, MD" && (
                                            <>
                                                <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">University of Cincinnati</span> - Cincinnati, OH
                                            </>
                                        )}
                                        {physician.name === "Dr. Amol Patel, D.O" && (
                                            <>
                                                <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">University of Washington, Seattle, WA</span> - Nephrology
                                            </>
                                        )}
                                    </p>

                                    <h3 className="font-bold text-gray-700 mb-1 text-lg">Internal Medicine Residency</h3>
                                    <p className="text-gray-600 text-base mb-3">
                                        {physician.name === "Madhavilatha Vuppali, MD" && (
                                            <>
                                                <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">St. Joseph Mercy Medical Center</span> - Pontiac, MI
                                            </>
                                        )}
                                        {physician.name === "Sushmitha Gandra, MD" && (
                                            <>
                                                <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">Lankenau Medical Center</span> - Lankenau, PA
                                            </>
                                        )}
                                        {physician.name === "Dr. Amol Patel, D.O" && (
                                            <>
                                                <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">Houston Methodist Hospital, Houston, TX</span>
                                            </>
                                        )}
                                    </p>

                                    <h3 className="font-bold text-gray-700 mb-1 text-lg">Board Certifications</h3>
                                    <p className="text-gray-600 text-base mb-3">{physician.certifications}</p>

                                    <h3 className="font-bold text-gray-700 mb-1 text-lg">Hospital Affiliations</h3>
                                    <ul className="text-gray-600 p-0 text-base mb-3">
                                        {physician.affiliations.map((affiliation, idx) => (
                                            <li key={idx}>
                                                {/* Check and apply style only to specified hospital names */}
                                                {affiliation.includes("CHI Baylor St. Lukes") ? (
                                                    <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">CHI Baylor St. Lukes</span>
                                                ) : affiliation.includes("HCA Houston Healthcare") ? (
                                                    <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">HCA Houston Healthcare</span>
                                                ) : affiliation.includes("Houston Methodist") ? (
                                                    <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">Houston Methodist</span>
                                                ) : affiliation.includes("Memorial Hermann") ? (
                                                    <span className="text-blue-500 font-bold hover:underline hover:text-blue-800 cursor-pointer">Memorial Hermann</span>
                                                ) : (
                                                    affiliation
                                                )}

                                                {/* Ensure other text is displayed unchanged */}
                                                {affiliation.includes("The Woodlands") && " - The Woodlands"}
                                                {affiliation.includes("Conroe") && " - Conroe"}
                                                {affiliation.includes("Northwest") && " - Northwest"}
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
