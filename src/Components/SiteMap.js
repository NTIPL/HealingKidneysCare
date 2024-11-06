import React from 'react';

const siteMapData = [
    { title: 'Home', link: '/' },
    { title: 'Physicians', link: '/physicians' },
    { 
        title: 'Services', 
        link: '/services',
        subLinks: [
            { title: 'Dialysis', link: '/services/dialysis' },
            { title: 'Hypertension', link: '/services/hypertension' },
            { title: 'Kidney Disease', link: '/services/kidney-disease' },
            { title: 'What is a Kidney Doctor?', link: '/services/kidney-doctor' },
            { title: 'Kidney Stones', link: '/services/kidney-stones' },
        ]
    },
    { title: 'Patient Registration', link: '/patient-registration' },
    { 
        title: 'Education', 
        link: '/education',
        subLinks: [
            { title: 'Blog', link: '/education/blog' }
        ]
    },
    { title: 'Locations/Directions', link: '/locations-directions' },
];

const SiteMapPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                {/* Breadcrumb */}
                <div className="text-gray-600 mb-6">
                    <a href="/" className="text-blue-500 no-underline font-bold hover:underline">Home</a>
                    <span className="mx-2">{'>'}</span>
                    <span>Site Map - The Healing Kidneys Institute of Houston</span>
                </div>

                {/* Header */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 mb-6">
                    Site Map - The Healing Kidneys Institute of Houston
                </h2>

                {/* Site Map Content */}
                <div className="space-y-6">
                    <ul className="list-disc">
                        {siteMapData.map((item, index) => (
                            <li key={index} className="space-y-2">
                                <a href={item.link} className="text-blue-500 no-underline hover:underline">
                                    {item.title}
                                </a>
                                {item.subLinks && (
                                    <ul className="ml-1 list-disc">
                                        {item.subLinks.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a href={subItem.link} className="text-blue-500 no-underline hover:underline">
                                                    {subItem.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SiteMapPage;
