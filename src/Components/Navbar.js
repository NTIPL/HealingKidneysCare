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
        { name: "Services", href: "/services", isDropdown: true }, // Dropdown for services
        { name: "Patient Registration", href: "/patient-registration" },
        { name: "Education", href: "/education", isDropdown: true }, // Dropdown for education
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
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col xs={12} className="text-center">
                            <div className="flex justify-center font-bold flex-wrap">
                                <div className="flex items-center my-1 border border-black rounded-lg bg-lightblue-200 mx-2 p-2 hover:bg-blue-200 cursor-pointer contact-info">
                                    <PhoneOutlined className="me-2" />
                                    (832) 610-2822
                                </div>
                                <div className="flex items-center my-1 border border-black rounded-lg bg-lightblue-200 mx-2 p-2 hover:bg-blue-200 cursor-pointer contact-info">
                                    <FaxIcon className="me-2" />
                                    (936) 777-8831
                                </div>
                                <div className="flex items-center my-1 border border-black rounded-lg bg-lightblue-200 mx-2 p-2 hover:bg-blue-200 cursor-pointer contact-info">
                                    <MailOutlined className="me-2" />
                                    healingkidneys@gmail.com
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
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
                            {/* Rendering main links */}
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
}

export default CustomNavbar;
