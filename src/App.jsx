import Footer from "./components/Footer";
import Pages from "./Pages";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./components/AuthContext";

const App = () => {
  return (
    <AuthProvider>
    <div className="font-sans text-gray-800">
      <Navbar />
      <Pages />
      {/* Footer */}
      <Footer />
    </div>
    </AuthProvider>
  );
};

export default App;
