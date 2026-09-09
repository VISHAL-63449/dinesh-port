import React from 'react';
import { Mail, Github, Linkedin, Phone, ArrowRight, Download, Terminal, Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
            {/* Background blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
                        B.Tech Information Technology Student
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-6xl font-bold font-['Outfit'] text-slate-800">
                            Hi, I'm <span className="gradient-text">Dinesh.M</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-600">
                            Aspiring Software Developer
                        </h2>
                    </div>

                    <p className="text-slate-600 leading-relaxed max-w-lg text-lg">
                        Passionate Information Technology student focused on building modern software solutions,
                        exploring emerging technologies, and transforming ideas into practical digital experiences.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-200">
                            View My Projects <ArrowRight size={18} />
                        </a>
                        <a href="#" className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                            <Download size={18} /> Download Resume
                        </a>
                    </div>

                    <div className="flex gap-4 pt-6 text-slate-500">
                        <a href="mailto:dinesh9985@mountzion.ac.in" className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" aria-label="Email">
                            <Mail size={22} />
                        </a>
                        <a href="[GitHub URL]" target="_blank" rel="noreferrer" className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" aria-label="GitHub">
                            <Github size={22} />
                        </a>
                        <a href="[LinkedIn URL]" target="_blank" rel="noreferrer" className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" aria-label="LinkedIn">
                            <Linkedin size={22} />
                        </a>
                        <a href="tel:9080113374" className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" aria-label="Phone">
                            <Phone size={22} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Abstract Tech Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[500px] hidden md:block"
                >
                    {/* Main Card (Image) */}
                    <div className="absolute top-1/2 left-1/2 -transform-x-1/2 -transform-y-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 rounded-2xl p-2 shadow-2xl flex flex-col justify-between border border-white/50 bg-white/40 backdrop-blur-md z-10 group">
                        <div className="w-full h-full overflow-hidden rounded-xl">
                            <img src="/my-image.png" alt="Dinesh.M" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 glass-card p-4 rounded-xl flex items-center gap-3 z-20"
                    >
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Code size={20} /></div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">B.Tech</p>
                            <p className="text-sm font-bold text-slate-800">IT Student</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 -left-4 glass-card p-4 rounded-xl flex items-center gap-3 z-20"
                    >
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Terminal size={20} /></div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium">Developer</p>
                            <p className="text-sm font-bold text-slate-800">Aspiring Software Dev</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-10 right-4 glass-card p-4 rounded-xl flex items-center gap-3 z-20"
                    >
                        <div className="bg-green-100 flex items-center justify-center w-10 h-10 rounded-lg text-green-600 font-bold font-['Outfit']">
                            01
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">Projects</p>
                            <p className="text-xs text-slate-500 font-medium">Built</p>
                        </div>
                    </motion.div>

                    {/* Subtle dots background */}
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

                </motion.div>
            </div>
        </section>
    );
}
