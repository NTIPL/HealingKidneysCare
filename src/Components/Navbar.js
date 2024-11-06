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
            <div className="bg-gray-200 py-1 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 p-1">
                    <Row className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        {/* Left Side Icons */}
                        <Col xs="auto" className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center border border-black rounded-lg bg-lightblue-200 p-2 hover:bg-blue-200 cursor-pointer contact-info">
                                <a href="tel:+18326102822" className="text-black no-underline font-bold" ><PhoneOutlined className="me-2 text-black font-bold" />(832) 610-2822</a>
                            </div>
                            <div className="flex items-center border border-black rounded-lg bg-lightblue-200 p-2 hover:bg-blue-200 cursor-pointer contact-info">
                                <FaxIcon className="me-2 text-black font-bold" />
                                <span className="text-black font-bold">(936) 777-8831</span>
                            </div>
                            <div className="flex items-center border border-black rounded-lg bg-lightblue-200 p-2 hover:bg-blue-200 cursor-pointer contact-info">
                            <a href="mailto:healingkidneys@gmail.com" className="text-black no-underline font-bold" ><MailOutlined className="me-2 text-black font-bold" />
                                healingkidneys@gmail.com</a>
                            </div>
                        </Col>

                        {/* Right Side Links */}
                        <Col xs="auto" className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 font-bold text-center sm:text-left">
                            <Link to="https://mychart.davitaphysiciansolutions.com/MyChart/Authentication/Login?" target='_blank' className="hover:text-blue-600 hover:underline no-underline">
                                Patient Portal
                            </Link>
                            <Link to="/" className="hover:text-blue-600 hover:underline no-underline">
                                Referrals
                            </Link>
                            <Link to="/" className="hover:text-blue-600 hover:underline no-underline">
                                Pay Mybill
                            </Link>
                            <Link to="/" className="hover:text-blue-600 hover:underline no-underline">
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
            </Navbar>
        </>
    );
};

export default CustomNavbar;
