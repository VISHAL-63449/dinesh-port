import React from 'react';
import { certifications } from '../data/certifications';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Certifications & <span className="gradient-text">Learning</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={cert.id}
                            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Award size={24} />
                            </div>

                            <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">{cert.title}</h3>
                            <p className="text-slate-600 text-sm mb-4">Issued by: <span className="font-semibold text-slate-700">{cert.issuer}</span></p>

                            <div className="space-y-1 mb-6">
                                <p className="text-xs text-slate-500 font-mono">Date: {cert.date}</p>
                                <p className="text-xs text-slate-500 font-mono">ID: {cert.credentialId}</p>
                            </div>

                            <a
                                href={cert.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                View Certificate <ExternalLink size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
