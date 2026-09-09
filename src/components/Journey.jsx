import React from 'react';
import { motion } from 'framer-motion';

const journeyNodes = [
    { id: '01', title: 'Started Programming', description: 'Began exploring fundamentals of coding and logical problem solving.' },
    { id: '02', title: 'Learned Web Development', description: 'Dived into HTML, CSS, and basic JavaScript to build static interfaces.' },
    { id: '03', title: 'Built Academic Projects', description: 'Collaborated on database-driven applications like management systems.' },
    { id: '04', title: 'Explored React & Modern Frontend', description: 'Transitioned to component-based architecture using React and Tailwind.' },
    { id: '05', title: 'Developing Software Engineering Skills', description: 'Focusing on building holistic, scalable, and responsive applications.' },
];

export default function Journey() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        My <span className="gradient-text">Development Journey</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -transform-x-1/2 rounded-full"></div>

                    <div className="space-y-12 relative">
                        {journeyNodes.map((node, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={node.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
                                >
                                    {/* Node Circle */}
                                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-500 shadow-md font-bold text-[10px] text-blue-600 flex items-center justify-center -translate-x-[15px] md:-translate-x-1/2 z-10 top-0">
                                        {node.id}
                                    </div>

                                    {/* Content Box */}
                                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{node.title}</h3>
                                            <p className="text-slate-600">{node.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
