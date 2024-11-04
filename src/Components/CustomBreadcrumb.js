import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const CustomBreadcrumb = () => {
    const location = useLocation();

    // Map routes to breadcrumb labels
    const breadcrumbMap = {
        '/': 'Home',
        '/physicians': 'Physicians',
        '/services': 'Services',
        '/services/dialysis': 'Dialysis',
        '/services/hypertension': 'Hypertension',
        '/services/kidney-disease': 'Kidney Disease',
        '/services/kidney-doctor': 'What is a Kidney Doctor?',
        '/services/kidney-stones': 'Kidney Stones',
        '/patient-registration': 'Patient Registration',
        '/education': 'Education',
        '/education/blog': 'Blog',
        '/locations-directions': 'Locations/Directions',
        '/signs-symptoms-kidney-stones-want-to-see-a-doctor': 'Signs and Symptoms of Kidney Stones',
        '/how-nephrologists-diagnose-kidney-disorders': 'How Nephrologists Diagnose Kidney Disorders',
        '/understanding-hypertension-causes-symptoms-and-risk-factors': 'Understanding Hypertension',
        '/kidney-stones-causes-for-concern': 'Kidney Stones Causes for Concern',
        '/welcome-to-our-blog': 'Welcome to Our Blog',
    };

    const pathnames = location.pathname.split('/').filter((x) => x);

    // Define paths where breadcrumb should not render
    const hiddenBreadcrumbPaths = [
        '/signs-symptoms-kidney-stones-want-to-see-a-doctor',
        '/how-nephrologists-diagnose-kidney-disorders',
        '/understanding-hypertension-causes-symptoms-and-risk-factors',
        '/kidney-stones-causes-for-concern',
        '/welcome-to-our-blog',
    ];

    // Return null if on a page where breadcrumb should not render
    if (hiddenBreadcrumbPaths.includes(location.pathname)) {
        return null;
    }

    return (
        <Breadcrumb className="flex items-center space-x-2 py-2 pb-0 px-2 bg-gray-100 rounded-md shadow-lg">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }} className="text-blue-700 hover:text-blue-900 font-semibold transition duration-200 ease-in-out">
                Home
            </Breadcrumb.Item>
            {pathnames.map((value, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <Breadcrumb.Item active key={routeTo} className="text-gray-700 font-semibold">
                        {breadcrumbMap[routeTo]}
                    </Breadcrumb.Item>
                ) : (
                    <Breadcrumb.Item
                        linkAs={Link}
                        linkProps={{ to: routeTo }}
                        key={routeTo}
                        className="text-blue-700 hover:text-blue-900 font-semibold transition duration-200 ease-in-out"
                    >
                        {breadcrumbMap[routeTo]}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};

export default CustomBreadcrumb;
