import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import WelcomeSection from './components/WelcomeSection';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                {/* Define routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/welcomesection" element={<WelcomeSection />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/footer" element={<Footer />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;