
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
// import Slider from 'react-slick';
// import Image1 from '../assets/hki-group-providers2.jpg.webp';
// import Image2 from '../assets/shutterstock_692941057.jpg.webp';
// import Image3 from '../assets/hki-group-providers2.jpg.webp';

// const Carsouelpage = () => {
//     const [isPaused, setIsPaused] = useState(false);

//     // Slick carousel settings
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: !isPaused,
//         autoplaySpeed: 3000,
//         pauseOnHover: true,
//     };

//     const handlePausePlay = () => {
//         setIsPaused(!isPaused);
//     };


//     return (

//         <div className="py-10">

//             {/* Header Section */}
//             <div className="max-w-5xl mx-auto mb-10">
//                 <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-600">
//                     NORTH HOUSTON, WOODLANDS AND CONROE'S TRUSTED COMPREHENSIVE KIDNEY CARE PROVIDER WHENEVER YOU NEED
//                 </h1>
//             </div>

//             <div className="max-w-5xl mx-auto">

//                 {/* Main Content Section */}
//                 <div className="mx-auto max-w-5xl relative">


//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-6 border">
//                         {/* Image Carousel Section */}
//                         <div className="lg:col-span-1">
//                             <Slider {...settings}>
//                                 <div><img src={Image1} alt="Kidney Care Group 1" className="w-full rounded-lg" /></div>
//                                 <div><img src={Image2} alt="Kidney Care Group 2" className="w-full rounded-lg" /></div>
//                                 <div><img src={Image3} alt="Kidney Care Group 3" className="w-full rounded-lg" /></div>
//                             </Slider>
//                             <div className="mt-4 text-center">
//                                 <FontAwesomeIcon
//                                     icon={isPaused ? faPlay : faPause}
//                                     className="text-link-orange text-2xl cursor-pointer"
//                                     onClick={handlePausePlay}
//                                     aria-label={isPaused ? "Play Carousel" : "Pause Carousel"}
//                                 />
//                             </div>
//                         </div>
//                         {/* Text Section */}
//                         <div className="lg:col-span-1 px-4">
//                             <p className="text-base text-gray-600 mb-4">
//                                 We are a group of committed, compassionate and caring
//                                 <a href="/services/kidney-doctor" className="font-bold text-link-orange no-underline hover:underline"> kidney doctors </a>
//                                 dedicated to providing high-quality care for patients.
//                             </p>
//                             <p className="text-base text-gray-600 mb-4">
//                                 We offer a wide range of nephrology services for
//                                 <a href="/services/kidney-disease" className="font-bold text-link-orange no-underline hover:underline"> kidney diseases</a>,
//                                 <a href="/services/hypertension" className="font-bold text-link-orange no-underline hover:underline"> hypertension</a>,
//                                 <a href="/services/kidney-stones" className="font-bold text-link-orange no-underline hover:underline"> kidney stones</a>,
//                                 and other kidney-related disorders. Additionally, we offer comprehensive
//                                 <a href="/services/dialysis" className="font-bold text-link-orange no-underline hover:underline"> dialysis</a> treatment options.
//                             </p>
//                             <p className="text-base text-gray-600 mb-4">
//                                 We believe in treating our patients as if they are our family, providing
//                                 the excellent care they deserve at any time of need.
//                             </p>
//                             <h2 className="font-bold text-xl text-gray-600">OUR MISSION</h2>
//                             <p className="text-base text-gray-600">
//                                 To treat and care for patients as we want to be treated.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Carsouelpage;




import React from 'react';
import Image1 from '../assets/hki-group-providers2.jpg.webp';

const Carsouelpage = () => {
    return (
        <div className="mt-10">
            {/* Header Section */}
            <div className="max-w-5xl mx-auto mb-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-600">
                    NORTH HOUSTON, WOODLANDS AND CONROE'S TRUSTED COMPREHENSIVE KIDNEY CARE PROVIDER WHENEVER YOU NEED
                </h1>
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Main Content Section */}
                <div className="mx-auto max-w-5xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 border">
                        {/* Static Image Section */}
                        <div className="lg:col-span-1">
                            <img src={Image1} alt="Kidney Care Group 1" className="w-full rounded-lg" />
                        </div>

                        {/* Text Section */}
                        <div className="lg:col-span-1 px-2">
                            <p className="text-base text-gray-600 mb-4">
                                We are a group of committed, compassionate and caring
                                <a href="/services/kidney-doctor" className="font-bold text-link-orange no-underline hover:underline"> kidney doctors </a>
                                dedicated to providing the high-quality care for patients.
                            </p>
                            <p className="text-base text-gray-600 mb-4">
                                We offer a wide range of nephrology services for
                                <a href="/services/kidney-disease" className="font-bold text-link-orange no-underline hover:underline"> kidney diseases</a>,
                                <a href="/services/hypertension" className="font-bold text-link-orange no-underline hover:underline"> hypertension</a>,
                                <a href="/services/kidney-stones" className="font-bold text-link-orange no-underline hover:underline"> kidney stones</a>,
                                and other kidney related disorders. Additionally, we offer comprehensive
                                <a href="/services/dialysis" className="font-bold text-link-orange no-underline hover:underline"> dialysis </a>
                                treatment options.
                            </p>
                            <p className="text-base text-gray-600 mb-4">
                                We believe in treating our patients as if they are our family and
                                providing the excellent care they deserve any time of need.
                            </p>
                            <h2 className="font-bold text-xl text-gray-600">OUR MISSION</h2>
                            <p className="text-base text-gray-600">
                                To treat and care for patients as we want to be treated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carsouelpage;
