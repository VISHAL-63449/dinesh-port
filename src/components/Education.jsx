import React from 'react';
import { BookOpen, MapPin, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Education
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl max-w-4xl"
                >
                    {/* Background decoration */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>

                    <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">

                        <div className="md:col-span-2 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
                                <BookOpen size={16} /> Bachelor of Technology
                            </div>

                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Information Technology</h3>
                                <h4 className="text-xl text-slate-300 font-medium flex items-center gap-2">
                                    <MapPin size={20} className="text-blue-400" />
                                    Mount Zion College of Engineering and Technology
                                </h4>
                            </div>

                            <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-700/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium">Department</p>
                                        <p className="text-sm font-semibold text-slate-200">IT</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium">Status</p>
                                        <p className="text-sm font-semibold text-slate-200">Current Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex justify-end">
                            <div className="w-48 h-56 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl relative">
                                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-400 rounded-full transform translate-x-1/2 opacity-50"></div>
                                <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2 opacity-50"></div>

                                <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex flex-col items-center justify-center p-4">
                                    <GraduationIcon />
                                    <p className="mt-4 font-bold text-center text-sm text-slate-300 tracking-widest uppercase">Class of [Year]</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

function GraduationIcon() {
    return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    );
}
