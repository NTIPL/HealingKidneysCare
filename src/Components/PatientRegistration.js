import React from 'react';

const PatientRegistrationPage = () => {
    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto border rounded-lg p-8">
                {/* Header */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 mb-6">New Patients</h2>

                {/* Introduction */}
                <p className="text-gray-700 leading-relaxed mb-8">
                    All new patients are required to fill the new patient package with demographics, medical background, financial disclosure, and patient privacy forms.
                    Please arrive 15 minutes prior to your appointment if you are unable to fill these forms.
                </p>

                {/* Assistance with Forms */}
                <p className="text-gray-700 leading-relaxed mb-8">
                    Please let us know if you need assistance filling the forms, and one of our friendly staff members will always assist you.
                </p>

                {/* Update Information */}
                <p className="text-gray-700 leading-relaxed mb-8">
                    Please inform us if your insurance, address, or medications have changed since your last visit, so your records are accurate.
                </p>

                {/* Patient Forms Section */}
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold mt-6 mb-2">Patient Forms</h3>
                <ul className=" pl-5 list-inside text-gray-700 mb-8">
                    <li>
                        <a href="https://hushforms.com/69900-new-patient-packet" target='_blank' rel="noreferrer" className="text-link-orange no-underline hover:text-blue-800 font-bold">New Patient Package</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PatientRegistrationPage;

