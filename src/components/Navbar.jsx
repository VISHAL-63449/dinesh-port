import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold font-['Outfit'] text-slate-800 tracking-tighter">
                    DINESH.M
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6 text-sm font-medium text-slate-600">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`transition-colors hover:text-blue-600 ${activeSection === link.name.toLowerCase() ? 'text-blue-600 font-semibold' : ''}`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                        <Download size={16} /> Resume
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-800 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <ul className="px-4 py-4 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-slate-700 hover:text-blue-600 font-medium text-lg"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2">
                                <a href="#" className="flex justify-center items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg font-medium w-full">
                                    <Download size={18} /> Download Resume
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
