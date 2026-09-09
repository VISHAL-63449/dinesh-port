import React from 'react';
import { User, GraduationCap, MapPin, Mail, Phone, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6 text-slate-600 text-lg leading-relaxed"
                    >
                        <p>
                            I am <span className="font-semibold text-slate-800">Dinesh.M</span>, a B.Tech Information Technology student at Mount Zion College of Engineering and Technology. I am passionate about software development, web technologies, problem solving, and building practical applications.
                        </p>
                        <p>
                            My journey in tech is driven by a deep curiosity for how things work under the hood. I am actively expanding my knowledge and exploring various domains including:
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {['Full-stack development', 'Software engineering', 'Web development', 'Database technologies', 'Programming', 'Emerging technologies'].map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="text-slate-700 text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                                        <img src="/my-image.png" alt="Dinesh.M" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Name</p>
                                        <p className="text-xl font-bold text-slate-800">Dinesh.M</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Degree & Department</p>
                                        <p className="font-semibold text-slate-800">B.Tech, Information Technology</p>
                                        <p className="text-sm text-slate-600 mt-1">Mount Zion College of Engineering and Technology</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <Code2 size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Role</p>
                                        <p className="font-semibold text-slate-800">Aspiring Software Developer</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Email</p>
                                        <a href="mailto:dinesh9985@mountzion.ac.in" className="font-semibold text-slate-800 hover:text-blue-600 transition-colors">dinesh9985@mountzion.ac.in</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Phone</p>
                                        <a href="tel:9080113374" className="font-semibold text-slate-800 hover:text-blue-600 transition-colors">9080113374</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
