// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Image from 'react-bootstrap/Image';
// import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
// import FaxIcon from '../assets/FaxIcon';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// // import ServiceExcellenceLogo from './ServiceExcellence';

// const CustomNavbar = () => {

//     const [expanded, setExpanded] = useState(false);

//     const handleLinkClick = () => {
//         setExpanded(false); // Close the navbar on mobile when a link is clicked
//     };

//     const leftSideIcons = [
//         {
//             type: "link",
//             icon: <PhoneOutlined className="me-2 text-white font-bold" />,
//             text: "(832) 610-2822",
//             href: "tel:+18326102822",
//             className: "text-white no-underline font-bold"
//         },
//         {
//             type: "icon",
//             icon: <FaxIcon className="me-2 text-white font-bold" />,
//             text: "(936) 777-8831",
//         },
//         {
//             type: "link",
//             icon: <MailOutlined className="me-2 text-white font-bold" />,
//             text: "healingkidneys@gmail.com",
//             href: "mailto:healingkidneys@gmail.com",
//             className: "text-white no-underline font-bold"
//         },
//     ];

//     const rightSideLinks = [
//         {
//             text: "Patient Portal",
//             href: "https://mychart.davitaphysiciansolutions.com/MyChart/Authentication/Login?",
//             external: true,
//             hoverColor: "hover:text-blue-600",
//         },
//         {
//             text: "Referrals",
//             href: "/",
//             external: false,
//             hoverColor: "hover:text-[#0f3f8a]",
//         },
//         {
//             text: "Pay Mybill",
//             href: "/",
//             external: false,
//             hoverColor: "hover:text-[#0f3f8a]",
//         },
//         {
//             text: "Feedback",
//             href: "/",
//             external: false,
//             hoverColor: "hover:text-[#0f3f8a]",
//         },
//         {
//             text: "Rocket",
//             href: "https://hkscheduling.vercel.app/",
//             external: true,
//             hoverColor: "hover:text-[#0f3f8a]",
//         },
//     ];

//     const mainLinks = [
//         { name: "Home", href: "/" },
//         { name: "Physicians", href: "/physicians" },
//         { name: "Services", href: "/services", isDropdown: true },
//         { name: "Patient Registration", href: "/patient-registration" },
//         { name: "Education", href: "/education", isDropdown: true },
//         { name: "Locations/Directions", href: "/locations-directions" },
//         { name: "Contact Us", href: "/contact-us" },

//     ];

//     const educationLinks = [
//         { name: "Blog", href: "/education/blog" },
//         { name: "Overview", href: "/education" },

//     ];

//     const servicesLinks = [
//         { name: "Dialysis", href: "/services/dialysis" },
//         { name: "Hypertension", href: "/services/hypertension" },
//         { name: "Kidney Disease", href: "/services/kidney-disease" },
//         { name: "What is a Kidney Doctor?", href: "/services/kidney-doctor" },
//         { name: "Kidney Stones", href: "/services/kidney-stones" },
//         { name: "All Services", href: "/services" },
//     ];

//     return (
//         <>
//             {/* Contact Info Section */}
//             <div className="bg-[#c64f22] py-1 border-b">
//                 <div className="max-w-5xl mx-auto p-1">
//                     <Row className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
//                         {/* Left Side Icons */}
//                         <Col xs="auto" className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
//                             {leftSideIcons.map((item, index) => (
//                                 <div key={index} className="flex items-center border border-white rounded-lg p-1 cursor-pointer contact-info">
//                                     {item.type === "link" ? (
//                                         <a href={item.href} className={item.className}>
//                                             {item.icon}
//                                             {item.text}
//                                         </a>
//                                     ) : (
//                                         <>
//                                             {item.icon}
//                                             <span className="text-white font-bold">{item.text}</span>
//                                         </>
//                                     )}
//                                 </div>
//                             ))}
//                         </Col>

//                         {/* Right Side Links */}
//                         <Col xs="auto" className="flex flex-wrap items-center justify-center space-y-0 sm:space-y-0 sm:space-x-2 sm:justify-start font-bold text-center sm:text-left">
//                             {rightSideLinks.map((link, index) => (
//                                 <Link
//                                     key={index}
//                                     to={link.href}
//                                     target={link.external ? "_blank" : "_self"}
//                                     className={`text-white ${link.hoverColor} hover:underline no-underline px-1 sm:px-0`}
//                                 >
//                                     {link.text}
//                                 </Link>
//                             ))}
//                         </Col>
//                     </Row>
//                 </div>
//             </div>


//             {/* Navbar Section */}
//             <Navbar expand="lg" className="sticky-top bg-white shadow" expanded={expanded} >
//                 <Container className="justify-center">
//                     <Navbar.Brand as={Link} to="/" className="flex items-center">
//                         <Image
//                             src={require('../assets/HKI-2019-Logo.png.webp')}
//                             alt="Logo"
//                             width="160"
//                             height="60"
//                             // className="me-2"
//                         />
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
//                     <Navbar.Collapse id="basic-navbar-nav" className="justify-center">
//                         <Nav className="text-black font-bold">
//                             {mainLinks.map((link, index) => {
//                                 if (link.isDropdown) {
//                                     return (
//                                         <NavDropdown title={<span className="text-black font-bold">{link.name}</span>} id={`dropdown-${index}`} className="px-3" key={index}>
//                                             {link.name === "Services" && servicesLinks.map((service, serviceIndex) => (
//                                                 <NavDropdown.Item key={serviceIndex} as={Link} to={service.href} className="text-black font-bold" onClick={handleLinkClick}>
//                                                     {service.name}
//                                                 </NavDropdown.Item>
//                                             ))}
//                                             {link.name === "Education" && educationLinks.map((education, educationIndex) => (
//                                                 <NavDropdown.Item key={educationIndex} as={Link} to={education.href} className="text-black font-bold" onClick={handleLinkClick}>
//                                                     {education.name}
//                                                 </NavDropdown.Item>
//                                             ))}
//                                         </NavDropdown>
//                                     );
//                                 }
//                                 return (
//                                     <Nav.Link key={index} as={Link} to={link.href} className="px-3 text-black font-bold" onClick={handleLinkClick}>
//                                         {link.name}
//                                     </Nav.Link>
//                                 );
//                             })}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>

//                 {/* <div className="absolute right-0 top-16 sm:top-16 md:top-14 lg:top-10">
//                     <ServiceExcellenceLogo />
//                 </div> */}

//             </Navbar>

//         </>
//     );
// };

// export default CustomNavbar;







import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import FaxIcon from '../assets/FaxIcon';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleLinkClick = () => {
        setExpanded(false); // Close the navbar on mobile when a link is clicked
    };

    const leftSideIcons = [
        {
            type: "link",
            icon: <PhoneOutlined className="me-2 text-white font-bold" />,
            text: "(832) 610-2822",
            href: "tel:+18326102822",
            className: "text-white no-underline font-bold"
        },
        {
            type: "icon",
            icon: <FaxIcon className="me-2 text-white font-bold" />,
            text: "(936) 777-8831",
        },
        {
            type: "link",
            icon: <MailOutlined className="me-2 text-white font-bold" />,
            text: "healingkidneys@gmail.com",
            href: "mailto:healingkidneys@gmail.com",
            className: "text-white no-underline font-bold"
        },
    ];

    const rightSideLinks = [
        {
            text: "Patient Portal",
            href: "https://mychart.davitaphysiciansolutions.com/MyChart/Authentication/Login?",
            external: true,
            hoverColor: "hover:text-blue-600",
        },
        {
            text: "Pay Mybill",
            href: "/",
            external: false,
            hoverColor: "hover:text-[#0f3f8a]",
        },
        {
            text: "Referrals",
            href: "/",
            external: false,
            hoverColor: "hover:text-[#0f3f8a]",
        },

        {
            text: "Feedback",
            href: "/",
            external: false,
            hoverColor: "hover:text-[#0f3f8a]",
            className: "hidden lg:block", // Corrected className
        },
        {
            text: "Rocket",
            href: "https://hkscheduling.vercel.app/",
            external: true,
            hoverColor: "hover:text-[#0f3f8a]",
            className: "hidden lg:block", // Corrected className
        }

    ];

    const mainLinks = [
        { name: "Home", href: "/" },
        { name: "Physicians", href: "/physicians" },
        { name: "Services", href: "/services", isDropdown: true },
        { name: "Patient Registration", href: "/patient-registration" },
        { name: "Education", href: "/education", isDropdown: true },
        { name: "Locations/Directions", href: "/locations-directions" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    const educationLinks = [
        { name: "Blog", href: "/education/blog" },
        { name: "Overview", href: "/education" },
    ];

    const servicesLinks = [
        { name: "Dialysis", href: "/services/dialysis" },
        { name: "Hypertension", href: "/services/hypertension" },
        { name: "Kidney Disease", href: "/services/kidney-disease" },
        { name: "What is a Kidney Doctor?", href: "/services/kidney-doctor" },
        { name: "Kidney Stones", href: "/services/kidney-stones" },
        { name: "All Services", href: "/services" },
    ];

    return (
        <>
            {/* Contact Info Section */}
            <div className="bg-[#c64f22] py-0 md:py-1 ">
                <div className="max-w-5xl mx-auto py-0 md:py-1">
                    <Row className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        {/* Mobile Specific Section */}
                        <div className="block md:hidden bg-white">
                            {/* Top Division for Logo */}
                            <div className="flex justify-center mt-2">
                                <Image
                                    src={require('../assets/HKI-2019-Logo.png.webp')}
                                    alt="Logo"
                                    width="160"
                                    height="60"
                                />
                            </div>
                            {/* Second Division for Telephone and Email */}
                            <div className="flex justify-center mt-2 space-x-2 rounded-lg p-2">
                                <a href="tel:+18326102822" className="text-black no-underline flex items-center space-x-1 border border-black rounded-lg px-2 py-1">
                                    <span>(832) 610-2822</span>
                                </a>
                                <a href="mailto:healingkidneys@gmail.com" className="text-black no-underline flex items-center space-x-1 border border-black rounded-lg px-2 py-1">
                                    <span>healingkidneys@gmail.com</span>
                                </a>
                            </div>
                            {/* Third Division for Links */}
                            <div className="flex justify-center mt-2 space-x-2">
                                {rightSideLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.href}
                                        target={link.external ? "_blank" : "_self"}
                                        className={`text-[#c64f22] ${link.hoverColor} font-bold hover:underline no-underline px-3`}
                                    >
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                            {/* Fourth Division for Navbar Toggle (Hamburger) */}
                            <div className="flex justify-center mt-4">
                                {/* Hamburger Icon */}
                                <div
                                    className="hamburger-icon flex flex-col space-y-1 justify-center items-center cursor-pointer border-2 border-[#666666] rounded-md p-2"
                                    onClick={() => setExpanded(!expanded)}
                                >
                                    <div className="w-6 h-1 bg-[#666666] rounded-md"></div>
                                    <div className="w-6 h-1 bg-[#666666] rounded-md"></div>
                                    <div className="w-6 h-1 bg-[#666666] rounded-md"></div>
                                </div>
                            </div>
                        </div>

                        {/* Left Side Icons for larger devices */}
                        <Col xs="auto" className="hidden md:flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                            {leftSideIcons.map((item, index) => (
                                <div key={index} className="flex items-center border border-white rounded-lg p-1 cursor-pointer contact-info">
                                    {item.type === "link" ? (
                                        <a href={item.href} className={item.className}>
                                            {item.icon}
                                            {item.text}
                                        </a>
                                    ) : (
                                        <>
                                            {item.icon}
                                            <span className="text-white font-bold">{item.text}</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </Col>

                        {/* Right Side Links for larger devices */}
                        <Col xs="auto" className="hidden md:flex flex-wrap items-center justify-center space-y-0 sm:space-y-0 sm:space-x-2 sm:justify-start font-bold text-center sm:text-left">
                            {rightSideLinks.map((link, index) => (
                                link.visibleOnLargeScreens === undefined || link.visibleOnLargeScreens ? (
                                    <Link
                                        key={index}
                                        to={link.href}
                                        target={link.external ? "_blank" : "_self"}
                                        className={`text-white ${link.hoverColor} hover:underline no-underline px-1 sm:px-0`}
                                    >
                                        {link.text}
                                    </Link>
                                ) : null
                            ))}
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Navbar Section */}
            <Navbar expand="lg" className="sticky-top bg-white shadow" expanded={expanded}>
                <Container className="justify-center">
                    <Navbar.Brand as={Link} to="/" className="items-center hidden md:flex">
                        <Image
                            src={require('../assets/HKI-2019-Logo.png.webp')}
                            alt="Logo"
                            width="160"
                            height="60"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-center">
                        <Nav className="text-black font-bold">
                            {mainLinks.map((link, index) => {
                                if (link.isDropdown) {
                                    return (
                                        <NavDropdown title={<span className="text-black font-bold">{link.name}</span>} id={`dropdown-${index}`} className="px-3" key={index}>
                                            {link.name === "Services" && servicesLinks.map((service, serviceIndex) => (
                                                <NavDropdown.Item key={serviceIndex} as={Link} to={service.href} className="text-black font-bold" onClick={handleLinkClick}>
                                                    {service.name}
                                                </NavDropdown.Item>
                                            ))}
                                            {link.name === "Education" && educationLinks.map((education, educationIndex) => (
                                                <NavDropdown.Item key={educationIndex} as={Link} to={education.href} className="text-black font-bold" onClick={handleLinkClick}>
                                                    {education.name}
                                                </NavDropdown.Item>
                                            ))}
                                        </NavDropdown>
                                    );
                                }
                                return (
                                    <Nav.Link
                                        key={index}
                                        as={Link}
                                        to={link.href}
                                        className={`px-3 text-black font-bold ${link.className || ''}`}
                                        onClick={handleLinkClick}
                                    >
                                        {link.name}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default CustomNavbar;
