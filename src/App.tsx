import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import BookRecommendations from './components/BookRecommendations';
import NotificationReminder from './components/NotificationReminder';


function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12">
        <Header
          title="Jamila Azad"
          links={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-recommendations" element={<BookRecommendations />} />
            <Route path="/notification-reminder" element={<NotificationReminder />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
