import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LenisProvider from './components/LenisProvider';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import ScheduleMeeting from './components/ScheduleMeeting/ScheduleMeeting';
import OurServices from './components/OurServices/OurServices';
import CaseStudies from './components/CaseStudies/CaseStudies';
import BlogsSection from './components/BlogsSection/BlogsSection';
import NewsInsights from './components/NewsInsights/NewsInsights';
import ClientTestimonials from './components/ClientTestimonials/ClientTestimonials';
import ContactUs from './components/ContactUs/ContactUs';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import BlogDetail from './components/BlogDetail/BlogDetail';
import ServiceCategories from './components/ServiceCategories';
import ServiceDetail from './components/ServiceDetail';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import CookiePolicy from './components/CookiePolicy/CookiePolicy';
import CaseStudyDetail from './components/CaseStudyDetail/CaseStudyDetail';
import WaitingPage from './components/WaitingPage/WaitingPage';

const HomePage = () => {
  return (
    <>
      <LandingPage />
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
  // TEMPORARY WAITING PAGE - Remove this section and uncomment below to restore full website
  // return (
  //   <div className="App">
  //     <WaitingPage />
  //   </div>
  // );

  /* ORIGINAL WEBSITE CODE - Uncomment this section and remove WaitingPage above to restore */ 
  return (
    <LenisProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceCategories />} />
            <Route path="/services/:serviceId/:subcategoryId" element={<ServiceDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LenisProvider>
  );
  
}

export default App;