import React from 'react';
import { Layout, Cpu, Edit3, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const interests = [
    {
        title: "Web Applications",
        description: "Modern responsive web experiences tailored for smooth performance and user satisfaction.",
        icon: Layout,
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Software Solutions",
        description: "Practical applications designed to solve real world problems efficiently.",
        icon: Cpu,
        color: "from-purple-500 to-pink-400"
    },
    {
        title: "UI Development",
        description: "Clean, accessible and responsive interfaces building scalable components.",
        icon: Edit3,
        color: "from-orange-500 to-yellow-400"
    },
    {
        title: "Continuous Learning",
        description: "Exploring modern technologies, architectures and improving development skills.",
        icon: Rocket,
        color: "from-green-500 to-emerald-400"
    }
];

export default function Interests() {
    return (
        <section className="py-20 bg-slate-900 relative">
            {/* Background styling for contrast section */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        What I Love <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Building</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-500 rounded-full mx-auto mt-4"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {interests.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
