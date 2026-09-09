import React from 'react';
import { skillsData } from '../data/skills';
import { motion } from 'framer-motion';

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4"></div>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Technologies and tools I have exploring and working with during my academic journey.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="h-2 w-12 bg-blue-100 rounded-full mb-6 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500"></div>
                            <h3 className="text-xl font-bold text-slate-800 mb-6">{category.category}</h3>

                            <ul className="space-y-3">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center gap-3 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/item:bg-blue-600 group-hover/item:scale-150 transition-all"></div>
                                        <span className="text-slate-600 font-medium group-hover/item:text-slate-900 transition-colors">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
