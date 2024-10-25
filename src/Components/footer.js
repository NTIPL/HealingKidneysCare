import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-2 pb-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="font-bold mb-2 md:mb-0 underline">
                        © 2024 NTIPL amay.g@netlabindia.com.
                    </p>
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mt-2 md:mt-0">
                        <a href="/admin" className="hover:underline text-white font-bold mb-2 md:mb-0">Admin Log In</a>
                        <a href="/sitemap" className="hover:underline text-white font-bold">Site Map</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
