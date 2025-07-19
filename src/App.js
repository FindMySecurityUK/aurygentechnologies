import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import TaglineSection from './components/TaglineSection/TaglineSection';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import ScheduleMeeting from './components/ScheduleMeeting/ScheduleMeeting';
import OurServices from './components/OurServices/OurServices';
import CaseStudies from './components/CaseStudies/CaseStudies';
import BlogsSection from './components/BlogsSection/BlogsSection';
import NewsInsights from './components/NewsInsights/NewsInsights';
import ClientTestimonials from './components/ClientTestimonials/ClientTestimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import Services from './components/Services/Services';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';

// Home page component
const HomePage = () => {
  return (
    <>
      <LandingPage />
      <TaglineSection />
      <WhoWeAre />
      <ScheduleMeeting />
      <OurServices />
      <CaseStudies />
      <BlogsSection />
      <NewsInsights />
      <ClientTestimonials />
      <ContactUs />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;