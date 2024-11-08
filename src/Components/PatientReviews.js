// import React from 'react';

// const PatientReviews = () => {
//     return (
//         <div className="bg-gray-100">
//             <div className="max-w-5xl mx-auto">

//                 {/* Patient Reviews Section */}
//                 <h2 className="text-center text-xl lg:text-2xl font-bold text-gray-800 mb-6">What our patients are saying</h2>

//                 {/* Reviews and Ratings Links Section */}
//                 <div className="text-center mb-10 bg-gray-200 p-2 rounded-lg flex flex-wrap justify-center items-center"> {/* Added flex wrap for responsiveness */}
//                     <a href="#all-reviews" className="font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">All Reviews</a> 4.9
//                     <span className="mx-2">|</span>

//                     <a href="#google" className="flex items-center font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">
//                         <img src={require('../assets/google.webp')} alt="Google" className="h-5 w-5 mr-1" /> {/* Google Icon */}
//                         Google
//                     </a> 3.5
//                     <span className="mx-2">|</span>

//                     <a href="#google5" className="flex items-center font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">
//                         <img src={require('../assets/google.webp')} alt="Google" className="h-5 w-5 mr-1" /> {/* Google Icon */}
//                         Google
//                     </a> 5.0
//                     <span className="mx-2">|</span>

//                     <a href="#Healthgrades" className="flex items-center font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">
//                         <img src={require('../assets/png-transparent-healthgrades-hd-logo.png')} alt="Healthgrades" className="h-5 w-5 mr-1" /> {/* Healthgrades Icon */}
//                         Healthgrades
//                     </a> 5.0
//                     <span className="mx-2">|</span>

//                     <a href="#Healthgrades5" className="flex items-center font-bold text-blue-500 hover:text-blue-800 no-underline mx-2">
//                         <img src={require('../assets/png-transparent-healthgrades-hd-logo.png')} alt="Healthgrades" className="h-5 w-5 mr-1" /> {/* Healthgrades Icon */}
//                         Healthgrades
//                     </a> 5.0
//                 </div>


//                 {/* Reviews Grid */}
//                 <div className="flex flex-wrap mx-auto justify-center text-center p-0">
//                     {[
//                         {
//                             name: "Charles Martin",
//                             rating: "★★★★★",
//                             description: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner."
//                         },
//                         {
//                             name: "Jo Ann Koontz",
//                             rating: "★★★★★",
//                             description: "Was referred by PCP for high blood pressure. Front desk very good about it."
//                         },
//                         {
//                             name: "Richard Kohler",
//                             rating: "★★★★★",
//                             description: "I have nothing bad to say. Medical staff helped me get medication assistance."
//                         },
//                         {
//                             name: "Alex Johnson",
//                             rating: "★★★★★",
//                             description: "Excellent service and care. I always feel listened to and well cared for."
//                         },
//                         {
//                             name: "Linda Green",
//                             rating: "★★★★★",
//                             description: "Very compassionate and skilled doctors. I highly recommend their care."
//                         },
//                         {
//                             name: "Tom White",
//                             rating: "★★★★★",
//                             description: "Highly knowledgeable staff. They made my treatment a smooth experience."
//                         },
//                         {
//                             name: "Samantha Brown",
//                             rating: "★★★★★",
//                             description: "The staff is very attentive and supportive. They always provide helpful insights."
//                         },
//                         {
//                             name: "James Lee",
//                             rating: "★★★★★",
//                             description: "Excellent follow-up and care. The doctors are very thorough in explaining treatment."
//                         }
//                     ].map((review, index) => (
//                         <div key={index} className="bg-white border p-6 mb-4 rounded-lg flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/4">

//                             {/* <div key={index} className="bg-white flex-1 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center min-w-[250px] max-w-full sm:max-w-[45%] lg:max-w-[30%]"> */}
//                             {/* <div key={index} className="bg-white p-6 w-60 m-2 rounded-lg shadow-lg flex flex-col items-center justify-center"> */}
//                             <div className="text-yellow-500 text-xl mb-4">{review.rating}</div>
//                             <h3 className="font-bold text-base text-gray-800 mb-2">{review.name}</h3>
//                             <p className="text-base text-left text-gray-600">{review.description}</p>
//                             <button className="border-1 border-t-blue-400 border-blue-400 font-bold text-black px-4 py-2 rounded-full mt-2 hover:bg-blue-500">
//                                 READ MORE
//                             </button>


//                         </div>
//                     ))}
//                 </div>


//                 {/* Load More Button
//                 < div className="text-center mt-6" >
//                     <button className="bg-blue-500 font-bold text-white px-6 py-2 rounded-full hover:bg-blue-800">
//                         LOAD MORE
//                     </button>
//                 </div> */}

//             </div>
//         </div>
//     );
// };

// export default PatientReviews;





import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PatientReviews = () => {
  const reviews = [
    {
      id: 1,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 2,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"

    },
    {
      id: 3,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 4,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 5,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNaN2FfQmhRRRAB!2m1!1s0x0:0xede38bc716d3941b!3m1!1s2@1:CIHM0ogKEICAgICZ7a_BhQE%7CCgsIhO-TqAYQqLHTOg%7C"
    },

    {
      id: 6,
      text: "Best Nephrology in Texas - Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://www.healthgrades.com/physician/dr-sushmitha-gandra-32f6x"
    },
    {
      id: 7,
      text: "Dr. Vuppali is a good doctor, she is always aware of my kidneys and makes sure everything is looking good.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 8,
      text: "Dr. Vuppali is efficient and she cares for her patients.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },

    {
      id: 9,
      text: "Shes really easy to talk to, seems like she really cares about the patient.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 10,
      text: "Follow Up appointment - The doctor was very knowledagable and was very interested in my well being. was very sincere.",
      author: "Flores, Martin",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 11,
      text: "Dr. Vuppali is very concerned about my issues and takes the time to address them. I never have to second guess her medical advice, or her plan of care.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 12,
      text: "Best of my Doctors - Dr Gandra treats me like a friend that she cares about. She is very concerned about my issues and takes the time to address them. I wish all doctors would have the commitment to patients that she has. Just want to thank her for who she is.",
      author: "A DOCTOR I WANT ON MY SIDE",
      link: "https://www.healthgrades.com/physician/dr-sushmitha-gandra-32f6x"
    },

    {
      id: 13,
      text: "I feel very blessed that I found Dr Vuppali. She cares very much about her patients. She explained everything about my illness, so I could understand exactly what I needed to do to take care of myself. I have made some diet changes per her recommendation and now I'm doing much better.",
      author: "F Rodriguez",
      link: "https://www.healthgrades.com/physician/dr-madhavilatha-vuppali-x5q73"
    },
    {
      id: 14,
      text: "She's a great doctor and takes her time explaining things & listening to each patient. She's also very thorough and thinks about the ENTIRE body, and not just the kidneys. Her and her staff are very kind, patient and gracious. My only reason for not giving 5 ⭐'s is bc the wait time can be long a lot of the time. But I understand why, it's bc she takes time with each patient instead of rushing us out of the door. Personally I think she's worth the wait; I just bring a good book & get comfortable in the lobby.",
      author: "QuirkyCercle",
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUM2ek1HMzFnRRAB!2m1!1s0x0:0xede38bc716d3941b!3m1!1s2@1:CIHM0ogKEICAgIC6zMG31gE%7CCgwIxJ-5iQYQyOvvgQE%7C"
    },
    {
      id: 15,
      text: "We saw Dr Gandra, she is very caring and listened to my concerns , we wish her well always.",
      author: "Gomez Sara",
      link: "https://www.google.com/maps/contrib/116277555914223581337/place/ChIJUcnuXz3LQIYR0oLtWCrvkaQ"
    },
    {
      id: 16,
      text: "God gift to profession amazing doctor best in clinical care and patient management always available . All the staff love her.",
      author: "Healthgrades User",
      link: "https://www.healthgrades.com/physician/dr-sushmitha-gandra-32f6x"
    },

    {
      id: 17,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://example.com/jane-doe"
    },
    {
      id: 18,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://example.com/jane-doe"
    },
    {
      id: 19,
      text: "Best Nephrology in Texas Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://example.com/jane-doe"
    },
    {
      id: 20,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://example.com/jane-doe"
    },

    {
      id: 21,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://example.com/jane-doe"
    },
    {
      id: 22,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://example.com/jane-doe"
    },
    {
      id: 23,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://example.com/jane-doe"
    },
    {
      id: 24,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://example.com/jane-doe"
    },

    {
      id: 25,
      text: "Best Nephrology in Texas Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://example.com/jane-doe"
    },
    {
      id: 26,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://example.com/jane-doe"
    },
    {
      id: 27,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://example.com/jane-doe"
    },
    {
      id: 28,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://example.com/jane-doe"
    },

    {
      id: 29,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://example.com/jane-doe"
    },
    {
      id: 30,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://example.com/jane-doe"
    },
    {
      id: 31,
      text: "Best Nephrology in Texas Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://example.com/jane-doe"
    },
    {
      id: 32,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://example.com/jane-doe"
    },

    {
      id: 33,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://example.com/jane-doe"
    },
    {
      id: 34,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://example.com/jane-doe"
    },
    {
      id: 35,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://example.com/jane-doe"
    },
    {
      id: 36,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://example.com/jane-doe"
    },

    {
      id: 37,
      text: "Best Nephrology in Texas Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://example.com/jane-doe"
    },
    {
      id: 38,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://example.com/jane-doe"
    },
    {
      id: 39,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://example.com/jane-doe"
    },
    {
      id: 40,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://example.com/jane-doe"
    },

    {
      id: 41,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://example.com/jane-doe"
    },
    {
      id: 42,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://example.com/jane-doe"
    },
    {
      id: 43,
      text: "Best Nephrology in Texas Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://example.com/jane-doe"
    },
    {
      id: 44,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://example.com/jane-doe"
    },

    {
      id: 45,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://example.com/jane-doe"
    },
    {
      id: 46,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://example.com/jane-doe"
    },
    {
      id: 47,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://example.com/jane-doe"
    },
    {
      id: 48,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://example.com/jane-doe"
    },

    {
      id: 49,
      text: "Best Nephrology in Texas Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://example.com/jane-doe"
    },
    {
      id: 50,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://example.com/jane-doe"
    },
    {
      id: 51,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://example.com/jane-doe"
    },
    {
      id: 52,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://example.com/jane-doe"
    },

    {
      id: 53,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://example.com/jane-doe"
    },
    {
      id: 54,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://example.com/jane-doe"
    },
    {
      id: 55,
      text: "Best Nephrology in Texas Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://example.com/jane-doe"
    },
    {
      id: 56,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://example.com/jane-doe"
    },

    {
      id: 57,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://example.com/jane-doe"
    },
    {
      id: 58,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://example.com/jane-doe"
    },
    {
      id: 59,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://example.com/jane-doe"
    },
    {
      id: 60,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://example.com/jane-doe"
    },

    {
      id: 61,
      text: "Best Nephrology in Texas Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://example.com/jane-doe"
    },
    {
      id: 62,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://example.com/jane-doe"
    },
    {
      id: 63,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://example.com/jane-doe"
    },
    {
      id: 64,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://example.com/jane-doe"
    },

    {
      id: 65,
      text: "Dr. Vuppali is very knowledgeable and professional. Her staff is very friendly and helpful.",
      author: "Healthgrades User",
      link: "https://example.com/jane-doe"
    },
    {
      id: 66,
      text: "She took THE best care of my dad!! She was very attentive, respectful, explained everything to us clearly where we could understand. If I needed a nephro I would choose her with my life 💜.",
      author: "Yo Mama",
      link: "https://example.com/jane-doe"
    },
    {
      id: 67,
      text: "Best Nephrology in Texas Hands down one of the best doctors in Texas. Doctor Gandra and her staff(Veronica & Diana) are truly amazing, that's why I'm trying to figure out who idea is it to remove Veronica to another office. If it's not broke, don't touch it! As a patient when you walk in the doctor, it could be one of the most scariest place, but at the location you always walk into a smiling face by Veronica and Diana(and they always know you by name not a chart). Dr. Gandra and her staff is exceptional. KEEP THEM TOGETHER!",
      author: "James McGee",
      link: "https://example.com/jane-doe"
    },
    {
      id: 68,
      text: "Always great, easy to talk to, pleasant, professional, and has a good bedside manner.",
      author: "Charles Martin",
      link: "https://example.com/jane-doe"
    },

    {
      id: 69,
      text: "Was referred by PCP for high blood pressure. Front desk very good about explain what Dr. is ordering and professional. Has had stress free visits.",
      author: "Jo Ann Koontz",
      link: "https://example.com/jane-doe"
    },
    {
      id: 70,
      text: "I have nothing bad to say. Medical staff help get medication assistance.",
      author: "Richard Kohler",
      link: "https://example.com/jane-doe"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-100 py-8"> {/* Reduced top and bottom padding */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">

          {/* Title */}
          <h2 className="text-3xl font-bold text-blue-900 mb-4"> {/* Reduced bottom margin */}
            Patient Reviews
          </h2>

          {/* Review Container */}
          <div className="relative w-full max-w-5xl">
            <div className="flex items-center">
              {/* Left Arrow */}
              <button
                onClick={handlePrevious}
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Review Content */}
              <div className="flex-1 px-8 min-h-[200px] flex flex-col justify-center">
                <p className="text-gray-700 italic text-lg mb-2 transition-opacity duration-300"> {/* Reduced bottom margin */}
                  {reviews[currentIndex].text}
                </p>

                <p className="text-blue-900 font-medium">
                  <a
                    href={reviews[currentIndex].link || '#'} // Fallback to '#' if no link is provided
                    className="no-underline hover:underline"
                    aria-label={`More reviews from ${reviews[currentIndex].author}`}
                  >
                    - {reviews[currentIndex].author}
                  </a>
                </p>

              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {reviews
                .slice(
                  Math.max(0, currentIndex - 2), // Start from two before the current index
                  Math.min(currentIndex + 3, reviews.length) // Up to three after the current index
                )
                .map((_, index) => {
                  // Calculate the actual index in the reviews array
                  const actualIndex = Math.max(0, currentIndex - 2) + index;
                  return (
                    <button
                      key={actualIndex}
                      onClick={() => setCurrentIndex(actualIndex)}
                      className={`w-2 h-2 rounded-full transition-colors ${currentIndex === actualIndex ? 'bg-blue-900' : 'bg-gray-300'
                        }`}
                      aria-label={`Go to review ${actualIndex + 1}`}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReviews;
