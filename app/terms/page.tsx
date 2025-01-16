"use client"
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
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
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Terms and Conditions</h1>
                        <p className="text-xl text-emerald-50">Last Updated: January 16, 2025</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {/* Acceptance Section */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">1. Acceptance of Terms</h2>
                                <p className="text-emerald-800 mb-6">
                                    By accessing and using the Aahan website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                                </p>
                            </div>

                            {/* Donations Section */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">2. Donations and Payments</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Payment Processing</h3>
                                            <p className="text-emerald-700 text-sm">
                                                All donations are processed securely through Razorpay Payment Solutions. By making a donation, you agree to Razorpay&#39;s terms of service and privacy policy.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Authorization</h3>
                                            <p className="text-emerald-700 text-sm">
                                                You confirm that you are authorized to use the chosen payment method and that the information provided is accurate and complete.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Transaction Security</h3>
                                            <p className="text-emerald-700 text-sm">
                                                All payment information is encrypted and processed securely through Razorpay&#39;s PCI-DSS compliant platform.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Website Usage */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">3. Website Usage</h2>
                                <p className="text-emerald-800 mb-6">
                                    You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <p className="text-emerald-700 text-sm">
                                                Use the website in any way that violates applicable laws or regulations
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <p className="text-emerald-700 text-sm">
                                                Attempt to gain unauthorized access to any portion of the website
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <p className="text-emerald-700 text-sm">
                                                Use the website in any manner that could damage or impair its functioning
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">4. Intellectual Property</h2>
                                <p className="text-emerald-800 mb-6">
                                    All content on this website is the property of Aahan and is protected by copyright and other intellectual property laws.
                                </p>
                            </div>

                            {/* Limitation of Liability */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">5. Limitation of Liability</h2>
                                <p className="text-emerald-800 mb-6">
                                    Aahan and its partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.
                                </p>
                            </div>

                            {/* Changes to Terms */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">6. Changes to Terms</h2>
                                <p className="text-emerald-800 mb-6">
                                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after any modifications indicates your acceptance of the modified terms.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">7. Contact Information</h2>
                                <p className="text-emerald-800 mb-6">
                                    For any questions about these terms, please contact us at <a href="mailto:support@aahanngo.org" className="text-emerald-600 underline">support@aahanngo.org</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}