import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Custom Cursor Component
const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only enable custom cursor on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        document.body.classList.add('custom-cursor-enabled');

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            document.body.classList.remove('custom-cursor-enabled');
        };
    }, []);

    if (window.matchMedia("(pointer: coarse)").matches) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-[9999] mix-blend-exclusion"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-blue-500 rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "tween", ease: "circOut", duration: 0.5 }}
            />
        </>
    );
};

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeSection, setActiveSection] = useState('home');
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show back to top button
            if (window.scrollY > 400) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }

            // Update active section
            const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="relative">
            <CustomCursor />
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
                style={{ scaleX }}
            />

            <Navbar activeSection={activeSection} />

            <main>
                <Hero />
                <About />
                <Skills />
                <Journey />
                <Projects />
                <Education />
                <Certifications />
                <Achievements />
                <Interests />
                <Contact />
            </main>

            <Footer />

            {/* Back to top button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: showBackToTop ? 1 : 0,
                    scale: showBackToTop ? 1 : 0,
                    pointerEvents: showBackToTop ? 'auto' : 'none'
                }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors z-50"
            >
                <ArrowUp size={24} />
            </motion.button>
        </div>
    )
}

export default App;
