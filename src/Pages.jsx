import { Routes, Route } from "react-router-dom";
import SolutionsPage from "./components/Solutions";
import Homepage from "./components/Homepage";
import PricingPage from "./components/Price";
import ResourcesPage from "./components/Resources";
import ContactPage from "./components/Contact";
import IntegrationsPage from "./components/Integrations";

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
    </Routes>
  );
}

export default Pages;
