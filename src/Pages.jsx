import { Routes, Route } from "react-router-dom";
import SolutionsPage from "./components/Solutions";
import Homepage from "./components/Homepage";
import PricingPage from "./components/Price";
import ResourcesPage from "./components/Resources";
import ContactPage from "./components/Contact";
import IntegrationsPage from "./components/Integrations";
import GDPRPage from "./components/Gdpr";
import TermsOfServicePage from "./components/Terms";
import PrivacyPolicyPage from "./components/Privacy";
import SecurityPage from "./components/Security";
import AboutPage from "./components/About";
import CareersPage from "./components/Careers";
import HelpCenterPage from "./components/Help";
import PageNotFound from "./components/NotFound";
import RegisterPage from "./components/Register";
import LoginPage from "./components/login";

function Pages() {
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/integrations" element={<IntegrationsPage />} />
      <Route path="/features" element={<Homepage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/gdpr" element={<GDPRPage />} />
      <Route path="/terms" element={<TermsOfServicePage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Help Center" element={<HelpCenterPage />} />
      <Route path="/mobile" element={<PageNotFound isMaintenance={true} />} />
      <Route path="/blog" element={<PageNotFound isMaintenance={true} />} />
      <Route path="/guides" element={<PageNotFound isMaintenance={true} />} />
      <Route path="/webinars" element={<PageNotFound isMaintenance={true} />} />
      <Route path="/api docs" element={<PageNotFound isMaintenance={true} />} />
    </Routes>
  );
}

export default Pages;
