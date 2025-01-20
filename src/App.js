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
            <div className="flex flex-col min-h-screen"> {/* Ensure full height for layout */}
                <Navbar />
                <main className="flex-grow"> {/* Allow main content to grow and push footer down */}
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
                    </Routes>
                </main>
                <Footer /> {/* Footer will always be at the bottom */}
            </div>
        </Router>
    );
};

export default App;