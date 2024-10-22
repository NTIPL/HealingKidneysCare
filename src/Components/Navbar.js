import React, { useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'; // Import necessary icons
import FaxIcon from './../assets/FaxIcon'; // Ensure correct path to FaxIcon
import logo from '../assets/HKI-2019-Logo.png.webp'; // Ensure correct path to logo

const { Header } = Layout;

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [current, setCurrent] = useState('1'); // Add state to track current menu item

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleClick = (e) => {
        setCurrent(e.key); // Update the current selected menu item
    };

    return (
        <Layout>
            {/* Top Header with logo, mobile number, fax, and email */}
            <div className="bg-pink p-4 border-b border-gray-200">
                <Row justify="space-between" align="middle" gutter={[16, 16]} className="flex-wrap">
                    {/* Logo Section */}
                    <Col xs={24} sm={8} lg={6} className="flex justify-center sm:justify-start">
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="w-40 h-auto mr-2" />
                        </div>
                    </Col>

                    {/* Contact Info Section */}
                    <Col xs={24} sm={16} lg={18} className="flex justify-center sm:justify-end">
                        <div className="flex space-x-4">
                            <div className="border border-blue-500 px-4 py-2 rounded-md text-blue-500 flex items-center">
                                <PhoneOutlined className="mr-2" />
                                (832) 610-2822
                            </div>
                            <div className="border border-blue-500 px-4 py-2 rounded-md text-blue-500 flex items-center">
                                <FaxIcon className="text-xl mr-2" />
                                (936) 777-8831
                            </div>
                            <div className="border border-blue-500 px-4 py-2 rounded-md text-blue-500 flex items-center">
                                <MailOutlined className="mr-2" />
                                <span>healingkidneys@gmail.com</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <Header className="bg-blue-500 p-0">
                <div className="flex justify-center items-center w-full">
                    {/* Hamburger Icon for Mobile Only */}
                    <div className="lg:hidden mr-4" onClick={toggleMenu}>
                        <button className="text-white">
                            ☰
                        </button>
                    </div>

                    {/* Responsive Menu for Desktop and Mobile */}
                    <Menu
                        theme="light"
                        mode="horizontal"
                        selectedKeys={[current]} // Add selected key prop
                        onClick={handleClick} // Add onClick handler
                        className={`bg-green-500 text-black ${menuVisible ? 'block' : 'hidden'} lg:flex lg:justify-center w-full`}
                    >
                        <Menu.Item
                            key="1"
                            className={`flex-1 text-center px-12 py-1 ${current === '1' ? 'text-red-400' : 'text-black'} hover:bg-blue-700`} // Increased padding
                        >
                            <a className={`${current === '1' ? 'text-red-400' : 'text-black'} font-bold hover:text-white`} href="#home">Home</a>
                        </Menu.Item>
                        <Menu.Item
                            key="2"
                            className={`flex-1 text-center px-12 py-1 ${current === '2' ? 'text-red-400' : 'text-black'} hover:bg-blue-700`} // Increased padding
                        >
                            <a className={`${current === '2' ? 'text-red-400' : 'text-black'} font-bold hover:text-white`} href="#about">Physicians</a>
                        </Menu.Item>
                        <Menu.Item
                            key="3"
                            className={`flex-1 text-center px-12 py-1 ${current === '3' ? 'text-red-400' : 'text-black'} hover:bg-blue-700`} // Increased padding
                        >
                            <a className={`${current === '3' ? 'text-red-400' : 'text-black'} font-bold hover:text-white`} href="#service">Services</a>
                        </Menu.Item>
                        <Menu.Item
                            key="4"
                            className={`flex-1 text-center px-12 py-1 ${current === '4' ? 'text-red-400' : 'text-black'} hover:bg-blue-700`} // Increased padding
                        >
                            <a className={`${current === '4' ? 'text-red-400' : 'text-black'} font-bold hover:text-white`} href="#doctor">Patient Registration</a>
                        </Menu.Item>
                        <Menu.Item
                            key="5"
                            className={`flex-1 text-center px-12 py-1 ${current === '5' ? 'text-red-400' : 'text-black'} hover:bg-blue-700`} // Increased padding
                        >
                            <a className={`${current === '5' ? 'text-red-400' : 'text-black'} font-bold hover:text-white`} href="#pages">Education</a>
                        </Menu.Item>
                        <Menu.Item
                            key="6"
                            className={`flex-1 text-center px-12 py-1 ${current === '6' ? 'text-red-400' : 'text-black'} hover:bg-blue-700`} // Increased padding
                        >
                            <a className={`${current === '6' ? 'text-red-400' : 'text-black'} font-bold hover:text-white`} href="#blog">Locations/Directions</a>
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>
        </Layout>
    );
};

export default Navbar;
