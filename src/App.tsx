// import './index.css'
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header
        title="Jamila Azad"
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer
        title="Jamila Azad"
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ]}
      />
    </div>
  );
}

export default App;
