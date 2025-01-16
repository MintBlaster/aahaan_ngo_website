"use client"
import { motion } from 'framer-motion';

export default function CookiePolicy() {
    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Cookie Policy</h1>
                        <p className="text-xl text-emerald-50">Last Updated: January 16, 2025</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {/* What Are Cookies */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">1. What Are Cookies</h2>
                                <p className="text-emerald-800 mb-6">
                                    Cookies are small text files that are placed on your device when you visit our website. They help make websites work more efficiently and provide valuable information to website owners.
                                </p>
                            </div>

                            {/* Types of Cookies We Use */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">2. Types of Cookies We Use</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Essential Cookies</h3>
                                            <p className="text-emerald-700 text-sm">
                                                Required for the website to function properly, including processing donations through Razorpay.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Preference Cookies</h3>
                                            <p className="text-emerald-700 text-sm">
                                                Remember your preferences and settings for future visits.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Third-Party Cookies */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">3. Third-Party Cookies</h2>
                                <p className="text-emerald-800 mb-6">
                                    Our payment processor Razorpay may use cookies to ensure secure transactions and prevent fraud. Please refer to Razorpay&#39;s cookie policy for more information.
                                </p>
                            </div>

                            {/* Managing Cookies */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">4. Managing Cookies</h2>
                                <p className="text-emerald-800 mb-6">
                                    You can control and manage cookies in your browser settings. Please note that removing or blocking cookies may impact your website experience and some features may not work as intended.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}