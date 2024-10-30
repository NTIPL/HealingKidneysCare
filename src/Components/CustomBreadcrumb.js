// // src/Components/CustomBreadcrumb.js

// import React from 'react';
// import { Breadcrumb } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';

// const CustomBreadcrumb = () => {
//     const location = useLocation();

//     // Map routes to breadcrumb labels
//     const breadcrumbMap = {
//         '/': 'Home',
//         '/physicians': 'Physicians',
//         '/services': 'Services',
//         '/services/dialysis': 'Dialysis',
//         '/services/hypertension': 'Hypertension',
//         '/services/kidney-disease': 'Kidney Disease',
//         '/services/kidney-doctor': 'What is a Kidney Doctor?',
//         '/services/kidney-stones': 'Kidney Stones',
//         '/patient-registration': 'Patient Registration',
//         '/education': 'Education',
//         '/education/blog': 'Blog',
//         '/locations-directions': 'Locations/Directions',
//     };

//     const pathnames = location.pathname.split('/').filter((x) => x);

//     return (
//         <Breadcrumb>
//             <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
//                 Home
//             </Breadcrumb.Item>
//             {pathnames.map((value, index) => {
//                 const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//                 const isLast = index === pathnames.length - 1;

//                 return isLast ? (
//                     <Breadcrumb.Item active key={routeTo}>
//                         {breadcrumbMap[routeTo]}
//                     </Breadcrumb.Item>
//                 ) : (
//                     <Breadcrumb.Item linkAs={Link} linkProps={{ to: routeTo }} key={routeTo}>
//                         {breadcrumbMap[routeTo]}
//                     </Breadcrumb.Item>
//                 );
//             })}
//         </Breadcrumb>
//     );
// };

// export default CustomBreadcrumb;






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
    };

    const pathnames = location.pathname.split('/').filter((x) => x);

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
