import React from 'react';
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
import ServiceExcellenceLogo from './ServiceExcellence';

const CustomNavbar = () => {
    const mainLinks = [
        { name: "Home", href: "/" },
        { name: "Physicians", href: "/physicians" },
        { name: "Services", href: "/services", isDropdown: true },
        { name: "Patient Registration", href: "/patient-registration" },
        { name: "Education", href: "/education", isDropdown: true },
        { name: "Locations/Directions", href: "/locations-directions" }
    ];

    const educationLinks = [{ name: "Blog", href: "/education/blog" }];
    const servicesLinks = [
        { name: "Dialysis", href: "/services/dialysis" },
        { name: "Hypertension", href: "/services/hypertension" },
        { name: "Kidney Disease", href: "/services/kidney-disease" },
        { name: "What is a Kidney Doctor?", href: "/services/kidney-doctor" },
        { name: "Kidney Stones", href: "/services/kidney-stones" }
    ];

    return (
        <>
            {/* Contact Info Section */}
            <div className="bg-[#c64f22] py-1 border-b">
                <div className="max-w-5xl mx-auto p-1">
                    <Row className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        {/* Left Side Icons */}
                        <Col xs="auto" className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center border border-white rounded-lg p-1 cursor-pointer contact-info">
                                <a href="tel:+18326102822" className="text-white no-underline font-bold" ><PhoneOutlined className="me-2 text-white font-bold" />(832) 610-2822</a>
                            </div>
                            <div className="flex items-center border border-white rounded-lg p-1 cursor-pointer contact-info">
                                <FaxIcon className="me-2 text-white font-bold" />                                 <span className="text-white font-bold">(936) 777-8831</span>
                            </div>
                            <div className="flex items-center border border-white rounded-lg p-1 cursor-pointer contact-info">
                                <a href="mailto:healingkidneys@gmail.com" className="text-white no-underline font-bold" ><MailOutlined className="me-2 text-white font-bold" />
                                    healingkidneys@gmail.com</a>
                            </div>
                        </Col>

                        {/* Right Side Links */}
                        <Col xs="auto" className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 font-bold text-center sm:text-left">
                            <Link to="https://mychart.davitaphysiciansolutions.com/MyChart/Authentication/Login?" target='_blank' className=" text-white hover:text-blue-600 hover:underline no-underline">
                                Patient Portal
                            </Link>
                            <Link to="/" className=" text-white hover:text-[#0f3f8a] hover:underline no-underline">
                                Referrals
                            </Link>
                            <Link to="/" className=" text-white hover:text-[#0f3f8a] hover:underline no-underline">                                 Pay Mybill
                            </Link>
                            <Link to="/" className=" text-white hover:text-[#0f3f8a] hover:underline no-underline">
                                Feedback
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>


            {/* Navbar Section */}
            <Navbar expand="lg" className="sticky-top bg-white shadow">
                <Container className="justify-center">
                    <Navbar.Brand as={Link} to="/" className="flex items-center">
                        <Image
                            src={require('../assets/HKI-2019-Logo.png.webp')}
                            alt="Logo"
                            width="170"
                            height="60"
                            className="me-2"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-center">
                        <Nav className="text-black font-bold">
                            {mainLinks.map((link, index) => {
                                if (link.isDropdown) {
                                    return (
                                        <NavDropdown title={<span className="text-black font-bold">{link.name}</span>} id={`dropdown-${index}`} className="px-3" key={index}>
                                            {link.name === "Services" && servicesLinks.map((service, serviceIndex) => (
                                                <NavDropdown.Item key={serviceIndex} as={Link} to={service.href} className="text-black font-bold">
                                                    {service.name}
                                                </NavDropdown.Item>
                                            ))}
                                            {link.name === "Education" && educationLinks.map((education, educationIndex) => (
                                                <NavDropdown.Item key={educationIndex} as={Link} to={education.href} className="text-black font-bold">
                                                    {education.name}
                                                </NavDropdown.Item>
                                            ))}
                                        </NavDropdown>
                                    );
                                }
                                return (
                                    <Nav.Link key={index} as={Link} to={link.href} className="px-3 text-black font-bold">
                                        {link.name}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>

                {/* Service Excellence Logo at the right bottom half */}
                {/* <div className="absolute right-0 top-12 mr-4"> */}
                {/* <div className="absolute right-0 top-16"> */}
                <div className="absolute right-0 top-16 sm:top-16 md:top-14 lg:top-10">
                    <ServiceExcellenceLogo />
                </div>

            </Navbar>

        </>
    );
};

export default CustomNavbar;








// // import React from 'react';
// import { useState } from "react";
// import { Link } from 'react-router-dom';
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// // import Image from 'react-bootstrap/Image';
// import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
// import FaxIcon from '../assets/FaxIcon';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const CustomNavbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(null);

//     const toggleDropdown = (index) => {
//         setDropdownOpen(dropdownOpen === index ? null : index);
//     };

//     const handleLinkClick = () => {
//         setIsOpen(false); // Close the mobile menu after clicking a link
//     };

//     const mainLinks = [
//         { name: "Home", href: "/" },
//         { name: "Physicians", href: "/physicians" },
//         { name: "Services", href: "/services", isDropdown: true },
//         { name: "Patient Registration", href: "/patient-registration" },
//         { name: "Education", href: "/education", isDropdown: true },
//         { name: "Locations/Directions", href: "/locations-directions" }
//     ];

//     const educationLinks = [{ name: "Blog", href: "/education/blog" }];
//     const servicesLinks = [
//         { name: "Dialysis", href: "/services/dialysis" },
//         { name: "Hypertension", href: "/services/hypertension" },
//         { name: "Kidney Disease", href: "/services/kidney-disease" },
//         { name: "What is a Kidney Doctor?", href: "/services/kidney-doctor" },
//         { name: "Kidney Stones", href: "/services/kidney-stones" }
//     ];

//     return (
//         <>
//             {/* Contact Info Section */}
//             <div className="bg-[#c64f22] py-1 border-b">
//                 <div className="max-w-5xl mx-auto p-1">
//                     <Row className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
//                         {/* Left Side Icons */}
//                         <Col xs="auto" className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
//                             <div className="flex items-center border border-white rounded-lg p-1 cursor-pointer contact-info">
//                                 <a href="tel:+18326102822" className="text-white no-underline font-bold" ><PhoneOutlined className="me-2 text-white font-bold" />(832) 610-2822</a>
//                             </div>
//                             <div className="flex items-center border border-white rounded-lg p-1 cursor-pointer contact-info">
//                                 <FaxIcon className="me-2 text-white font-bold" />
//                                 <span className="text-white font-bold">(936) 777-8831</span>
//                             </div>
//                             <div className="flex items-center border border-white rounded-lg p-1 cursor-pointer contact-info">
//                                 <a href="mailto:healingkidneys@gmail.com" className="text-white no-underline font-bold" ><MailOutlined className="me-2 text-white font-bold" />
//                                     healingkidneys@gmail.com</a>
//                             </div>
//                         </Col>

//                         {/* Right Side Links */}
//                         <Col xs="auto" className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 font-bold text-center sm:text-left">
//                             <Link to="https://mychart.davitaphysiciansolutions.com/MyChart/Authentication/Login?" target='_blank' className=" text-white hover:text-blue-600 hover:underline no-underline">
//                                 Patient Portal
//                             </Link>
//                             <Link to="/" className=" text-white hover:text-[#0f3f8a] hover:underline no-underline">
//                                 Referrals
//                             </Link>
//                             <Link to="/" className=" text-white hover:text-[#0f3f8a] hover:underline no-underline">
//                                 Pay Mybill
//                             </Link>
//                             <Link to="/" className=" text-white hover:text-[#0f3f8a] hover:underline no-underline">
//                                 Feedback
//                             </Link>
//                         </Col>
//                     </Row>
//                 </div>
//             </div>


//             {/* Navbar Section */}
//             {/* <Navbar expand="lg" className="sticky-top bg-white shadow">
//                 <Container className="justify-center">
//                     <Navbar.Brand as={Link} to="/" className="flex items-center">
//                         <Image
//                             src={require('../assets/HKI-2019-Logo.png.webp')}
//                             alt="Logo"
//                             width="170"
//                             height="60"
//                             className="me-2"
//                         />
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav" className="justify-center">
//                         <Nav className="text-black font-bold">
//                             {mainLinks.map((link, index) => {
//                                 if (link.isDropdown) {
//                                     return (
//                                         <NavDropdown title={<span className="text-black font-bold">{link.name}</span>} id={`dropdown-${index}`} className="px-3" key={index}>
//                                             {link.name === "Services" && servicesLinks.map((service, serviceIndex) => (
//                                                 <NavDropdown.Item key={serviceIndex} as={Link} to={service.href} className="text-black font-bold">
//                                                     {service.name}
//                                                 </NavDropdown.Item>
//                                             ))}
//                                             {link.name === "Education" && educationLinks.map((education, educationIndex) => (
//                                                 <NavDropdown.Item key={educationIndex} as={Link} to={education.href} className="text-black font-bold">
//                                                     {education.name}
//                                                 </NavDropdown.Item>
//                                             ))}
//                                         </NavDropdown>
//                                     );
//                                 }
//                                 return (
//                                     <Nav.Link key={index} as={Link} to={link.href} className="px-3 text-black font-bold">
//                                         {link.name}
//                                     </Nav.Link>
//                                 );
//                             })}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar> */}


//             {/* Navbar Section */}
//             <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
//                 <div className="max-w-5xl mx-auto flex justify-between items-center py-3">
//                     {/* Logo */}
//                     <div className="flex items-center">
//                         <Link to="/" className="flex items-center">
//                             <img
//                                 src={require('../assets/HKI-2019-Logo.png.webp')}
//                                 alt="Logo"
//                                 className="w-[170px] h-[60px] mr-2"
//                             />
//                         </Link>
//                     </div>

//                     {/* Mobile Toggle Button (Hamburger Menu) */}
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 border border-gray-300 hover:border-blue-600 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//                         aria-controls="navbar-content"
//                         aria-expanded={isOpen ? "true" : "false"}
//                     >
//                         <span className="sr-only">Open main menu</span>
//                         <svg
//                             className="w-5 h-5"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             aria-hidden="true"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>

//                     {/* Navbar Links for Desktop */}
//                     <div className={`hidden lg:flex lg:items-center w-full lg:w-auto`} id="navbar-content">
//                         <ul className="flex flex-col lg:flex-row lg:space-x-4 text-black font-bold mt-3 lg:mt-0">
//                             {mainLinks.map((link, index) => (
//                                 link.isDropdown ? (
//                                     <div key={index} className="relative group">
//                                         <button
//                                             onClick={() => toggleDropdown(index)}
//                                             className="flex items-center px-3 py-2 hover:text-blue-600 focus:outline-none"
//                                         >
//                                             {link.name}
//                                             {/* Chevron Icon */}
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="ml-1 h-4 w-4 transition-transform"
//                                                 viewBox="0 0 20 20"
//                                                 fill="currentColor"
//                                             >
//                                                 <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.14.98l-4.25 4.65a.75.75 0 01-1.08 0L5.23 8.25a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//                                             </svg>
//                                         </button>
//                                         {/* Dropdown Menu */}
//                                         <div
//                                             className={`absolute mt-2 bg-white shadow-lg w-48 group-hover:block ${dropdownOpen === index ? 'block' : 'hidden'} group-focus-within:hidden`}
//                                             onClick={() => setDropdownOpen(null)} // Close on click
//                                         >
//                                             {link.name === "Services" && servicesLinks.map((service, serviceIndex) => (
//                                                 <Link
//                                                     key={serviceIndex}
//                                                     to={service.href}
//                                                     className="block px-1 py-2 text-black font-bold hover:bg-gray-200"
//                                                     onClick={handleLinkClick} // Close menu on link click
//                                                 >
//                                                     {service.name}
//                                                 </Link>
//                                             ))}
//                                             {link.name === "Education" && educationLinks.map((education, educationIndex) => (
//                                                 <Link
//                                                     key={educationIndex}
//                                                     to={education.href}
//                                                     className="block px-1 py-2 text-black font-bold hover:bg-gray-200"
//                                                     onClick={handleLinkClick} // Close menu on link click
//                                                 >
//                                                     {education.name}
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <Link
//                                         key={index}
//                                         to={link.href}
//                                         className="py-2 text-black font-bold hover:text-blue-600"
//                                         onClick={handleLinkClick} // Close menu on link click
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 )
//                             ))}
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Mobile Navbar Links */}
//                 {isOpen && (
//                     <div className="block lg:hidden bg-white shadow-lg mt-2">
//                         <ul className="flex flex-col space-y-2 p-4">
//                             {mainLinks.map((link, index) => (
//                                 <li key={index}>
//                                     {link.isDropdown ? (
//                                         <>
//                                             <button
//                                                 onClick={() => toggleDropdown(index)}
//                                                 className="flex items-center justify-between w-full px-3 py-2 hover:text-blue-600"
//                                             >
//                                                 {link.name}
//                                                 <svg
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="ml-1 h-4 w-4 transition-transform"
//                                                     viewBox="0 0 20 20"
//                                                     fill="currentColor"
//                                                 >
//                                                     <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.14.98l-4.25 4.65a.75.75 0 01-1.08 0L5.23 8.25a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//                                                 </svg>
//                                             </button>
//                                             {dropdownOpen === index && (
//                                                 <div className="pl-4 mt-2">
//                                                     {link.name === "Services" && servicesLinks.map((service, serviceIndex) => (
//                                                         <Link
//                                                             key={serviceIndex}
//                                                             to={service.href}
//                                                             className="block px-4 py-2 text-black font-bold hover:bg-gray-200"
//                                                             onClick={handleLinkClick} // Close menu on link click
//                                                         >
//                                                             {service.name}
//                                                         </Link>
//                                                     ))}
//                                                     {link.name === "Education" && educationLinks.map((education, educationIndex) => (
//                                                         <Link
//                                                             key={educationIndex}
//                                                             to={education.href}
//                                                             className="block px-4 py-2 text-black font-bold hover:bg-gray-200"
//                                                             onClick={handleLinkClick} // Close menu on link click
//                                                         >
//                                                             {education.name}
//                                                         </Link>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </>
//                                     ) : (
//                                         <Link
//                                             to={link.href}
//                                             className="block px-3 py-2 text-black font-bold hover:text-blue-600"
//                                             onClick={handleLinkClick} // Close menu on link click
//                                         >
//                                             {link.name}
//                                         </Link>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </nav>



//         </>
//     );
// };

// export default CustomNavbar;









