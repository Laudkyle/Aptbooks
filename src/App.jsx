import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Pages from "./Pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Pages />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
