// app/contact/page.tsx
"use client"
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <main className="pt-20">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Contact Us</h1>
                        <p className="text-xl text-emerald-50 max-w-2xl">
                            Have questions or want to get involved? We&#39;d love to hear from you.
                            Reach out to us using any of the methods below.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-serif text-emerald-900 mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-emerald-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                                 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                                 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                                 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Message</label>
                                    <textarea
                                        rows={6}
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                                 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-emerald-600 text-white py-3 rounded-md
                                             hover:bg-emerald-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-serif text-emerald-900 mb-6">Get in Touch</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-medium text-emerald-800 mb-2">Office Address</h3>
                                    <p className="text-emerald-600">
                                        123 NGO Street<br />
                                        Community Center, Floor 2<br />
                                        City, State 12345
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-emerald-800 mb-2">Contact Details</h3>
                                    <p className="text-emerald-600">
                                        Email: info@aahaan.org<br />
                                        Phone: (123) 456-7890<br />
                                        Hours: Monday-Friday, 9:00 AM - 5:00 PM
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-emerald-800 mb-2">Social Media</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-emerald-600 hover:text-emerald-700">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                {/* Facebook icon */}
                                            </svg>
                                        </a>
                                        <a href="#" className="text-emerald-600 hover:text-emerald-700">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                {/* Twitter icon */}
                                            </svg>
                                        </a>
                                        <a href="#" className="text-emerald-600 hover:text-emerald-700">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                {/* LinkedIn icon */}
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 relative">
                {/* Replace with actual map implementation */}
                <div className="absolute inset-0 bg-emerald-100 flex items-center justify-center">
                    <p className="text-emerald-600">Map placeholder</p>
                </div>
            </section>
        </main>
    );
}
