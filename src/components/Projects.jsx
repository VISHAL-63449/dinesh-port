import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Web", "React", "Python", "Java", "Database"];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projects.filter(project =>
        activeCategory === "All" || project.category === activeCategory || project.technologies.includes(activeCategory)
    );

    return (
        <section id="projects" className="py-20 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col items-center text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4 mb-8"></div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-900'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden bg-slate-200">
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    {/* Overlay buttons on hover */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-sm">
                                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-colors transform hover:scale-110">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-800 hover:text-white transition-colors transform hover:scale-110">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-semibold">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                            <a href="#" className="font-semibold text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                                                View Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
