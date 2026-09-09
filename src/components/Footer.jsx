import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">

                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-2xl font-bold font-['Outfit'] text-white">DINESH.M</h2>
                        <p className="text-slate-400 max-w-sm">
                            B.Tech Information Technology Student & Aspiring Software Developer building modern digital experiences.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="[GitHub URL]" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="[LinkedIn URL]" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:dinesh9985@mountzion.ac.in" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-colors">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 font-['Outfit']">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors">Skills</a></li>
                            <li><a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4 font-['Outfit']">Connect</h3>
                        <ul className="space-y-2">
                            <li><a href="#education" className="text-slate-400 hover:text-blue-400 transition-colors">Education</a></li>
                            <li><a href="#certifications" className="text-slate-400 hover:text-blue-400 transition-colors">Certifications</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2026 Dinesh.M. All Rights Reserved.</p>
                    <p>Designed with ❤️ using React</p>
                </div>
            </div>
        </footer>
    );
}
