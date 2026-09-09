import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
            alert("Message sent successfully!");
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Let's Build Something <span className="gradient-text">Together</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4 mb-4"></div>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Have an idea, project, or opportunity? Feel free to connect with me.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 max-w-5xl mx-auto">

                    {/* Contact Info */}
                    <div className="lg:col-span-2 bg-slate-900 p-8 md:p-10 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                        <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                    <Mail size={18} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium mb-1">Email</p>
                                    <a href="mailto:dinesh9985@mountzion.ac.in" className="text-slate-200 hover:text-white transition-colors">dinesh9985@mountzion.ac.in</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                    <Phone size={18} className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium mb-1">Phone</p>
                                    <a href="tel:9080113374" className="text-slate-200 hover:text-white transition-colors">9080113374</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                    <MapPin size={18} className="text-green-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 font-medium mb-1">College</p>
                                    <p className="text-slate-200 leading-relaxed max-w-[200px]">Mount Zion College of Engineering and Technology</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <><Send size={18} /> Send Message</>
                                )}
                            </button>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
