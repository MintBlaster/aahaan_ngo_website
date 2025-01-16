"use client"
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Privacy Policy</h1>
                        <p className="text-xl text-emerald-50">Last Updated: January 16, 2025</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">1. Information We Collect</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Personal Information</h3>
                                            <p className="text-emerald-700 text-sm">
                                                We collect basic contact information (name and email) when you make donations or subscribe to our newsletter.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Payment Information</h3>
                                            <p className="text-emerald-700 text-sm">
                                                When you make a donation, our payment processor Razorpay collects necessary payment information. We do not store your payment details.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Automatic Information</h3>
                                            <p className="text-emerald-700 text-sm">
                                                We use cookies to improve your browsing experience and understand website usage patterns.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Use of Information */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">2. How We Use Your Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Processing Donations</h3>
                                            <p className="text-emerald-700 text-sm">
                                                To process your donations and send receipts through Razorpay's secure platform.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Communications</h3>
                                            <p className="text-emerald-700 text-sm">
                                                To send newsletters and updates if you've subscribed to them.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Information Sharing */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">3. Information Sharing</h2>
                                <p className="text-emerald-800 mb-6">
                                    We share your information only with:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Payment Processor</h3>
                                            <p className="text-emerald-700 text-sm">
                                                Razorpay processes your payment information securely according to their privacy policy.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Legal Requirements</h3>
                                            <p className="text-emerald-700 text-sm">
                                                When required by law or to protect our legal rights.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Data Security */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">4. Data Security</h2>
                                <p className="text-emerald-800 mb-6">
                                    We implement appropriate security measures to protect your personal information. All payment processing is handled through Razorpay's secure, PCI-DSS compliant platform.
                                </p>
                            </div>

                            {/* Your Rights */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">5. Your Rights</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <p className="text-emerald-700 text-sm">
                                                Request access to your personal information
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <p className="text-emerald-700 text-sm">
                                                Request correction of inaccurate or incomplete data.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <p className="text-emerald-700 text-sm">
                                                Request deletion of your personal information, where applicable.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <p className="text-emerald-700 text-sm">
                                                Opt-out of marketing communications at any time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">6. Contact Us</h2>
                                <p className="text-emerald-700 text-sm">
                                    If you have any questions or concerns about this privacy policy, please contact us at: <a href="mailto:support@aahanngo.org" className="text-emerald-600 underline">support@aahanngo.org</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
);
}
