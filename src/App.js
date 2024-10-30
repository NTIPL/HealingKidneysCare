import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import CustomBreadcrumb from "./Components/CustomBreadcrumb";
import Homepage from "./Components/homepage";
import PhysiciansPage from "./Components/Physicians";
import ServicesPage from "./Components/Services";
import EducationPage from "./Components/Education";
import BlogPage from './Components/Blog';
import Footer from "./Components/footer";
import DialysisPage from "./Components/Dialysis";
import HypertensionPage from "./Components/Hypertension";
import KidneyDiseasePage from "./Components/KidneyDisease";
import KidneyDoctorPage from "./Components/KidneyDoctor";
import KidneyStonesPage from "./Components/KidneyStones";
import PatientRegistrationPage from "./Components/PatientRegistration";
import DirectionPage from "./Components/Direction";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <CustomBreadcrumb /> {/* Breadcrumb component */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/physicians" element={<PhysiciansPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/services/dialysis" element={<DialysisPage />} />
          <Route path="services/hypertension" element={<HypertensionPage />} />
          <Route path="/services/kidney-disease" element={<KidneyDiseasePage />} />
          <Route path="/services/kidney-doctor" element={<KidneyDoctorPage />} />
          <Route path="/services/kidney-stones" element={<KidneyStonesPage />} />
          <Route path="/patient-registration" element={<PatientRegistrationPage />} />
          <Route path="/education/blog" element={<BlogPage />} />
          <Route path="//locations-directions" element={<DirectionPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
