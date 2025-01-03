"use client"
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <main className="pt-20">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
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
                                        Village Nagar<br/>
                                        Post office Kunihar<br/>
                                        Solan, Himachal Pradesh<br/>
                                        India - 173206
                                    </p>
                                    <a
                                        href="https://www.google.com/maps/place/Nagar+Village/@31.0828439,76.9783437,17.25z/data=!4m15!1m8!3m7!1s0x3905645e26c2bfc3:0xae6caf35425b0ee4!2sKunihar,+Himachal+Pradesh+173207!3b1!8m2!3d31.0795387!4d76.9614255!16s%2Fm%2F04n1g8x!3m5!1s0x390565005f326f31:0x6069968aeaf22b0c!8m2!3d31.083508!4d76.979004!16s%2Fg%2F11y98hgvx1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center mt-2 text-emerald-600 hover:text-emerald-700"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        Open in Google Maps
                                    </a>
                                </div>

                                <div>
                                    <h3 className="font-medium text-emerald-800 mb-2">Contact Details</h3>
                                    <p className="text-emerald-600">
                                        Email: aahanngo@gmail.com<br/>
                                        Phone: 9459244849
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
        </main>
    );
}
