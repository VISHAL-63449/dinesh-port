import React from 'react';
import { Code, BookOpen, Award, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    { id: 1, label: "Projects Built", value: "[X]+", icon: Code, color: "text-blue-500", bg: "bg-blue-50" },
    { id: 2, label: "Technologies Learned", value: "[X]+", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-50" },
    { id: 3, label: "Certifications", value: "[X]+", icon: Award, color: "text-orange-500", bg: "bg-orange-50" },
    { id: 4, label: "Learning Hours", value: "[X]+", icon: Coffee, color: "text-green-500", bg: "bg-green-50" },
];

export default function Achievements() {
    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={stat.id}
                                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${stat.bg} ${stat.color}`}>
                                    <Icon size={24} />
                                </div>
                                <h4 className="text-3xl font-bold font-['Outfit'] text-slate-800 mb-2">{stat.value}</h4>
                                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
