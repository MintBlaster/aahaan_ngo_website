"use client"
import { motion } from 'framer-motion';

export default function RefundPolicy() {
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
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Refund & Cancellation Policy</h1>
                        <p className="text-xl text-emerald-50">Last Updated: January 16, 2025</p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {/* General Policy */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">1. General Policy</h2>
                                <p className="text-emerald-800 mb-6">
                                    We value transparency in our operations. While donations are generally non-refundable, we understand that mistakes can happen and we will address each refund request on a case-by-case basis.
                                </p>
                            </div>

                            {/* Refund Conditions */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">2. Refund Conditions</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Technical Errors</h3>
                                            <p className="text-emerald-700 text-sm">
                                                If you experience technical issues resulting in unintended donations or duplicate charges.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Incorrect Amounts</h3>
                                            <p className="text-emerald-700 text-sm">
                                                If you accidentally donated an incorrect amount.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Refund Process */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">3. Refund Process</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Submit Request</h3>
                                            <p className="text-emerald-700 text-sm">
                                                Contact us at <a href="mailto:support@aahanngo.org" className="text-emerald-600 underline">support@aahanngo.org</a> with your donation reference number and reason for refund.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Processing Time</h3>
                                            <p className="text-emerald-700 text-sm">
                                                We will review and respond to your request within 48 hours.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Refund Method</h3>
                                            <p className="text-emerald-700 text-sm">
                                                Approved refunds will be processed through Razorpay to the original payment method.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cancellation Policy */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">4. Cancellation of Recurring Donations</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">How to Cancel</h3>
                                            <p className="text-emerald-700 text-sm">
                                                You can cancel recurring donations by contacting us or through your Razorpay dashboard.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                        <div>
                                            <h3 className="font-medium mb-1 text-emerald-900">Processing Time</h3>
                                            <p className="text-emerald-700 text-sm">
                                                Cancellations will be processed immediately, but may take effect from the next billing cycle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-emerald-900">5. Contact Us</h2>
                                <p className="text-emerald-800">
                                    For any questions about refunds or cancellations, please contact us at <a href="mailto:support@aahanngo.org" className="text-emerald-600 underline">support@aahanngo.org</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}