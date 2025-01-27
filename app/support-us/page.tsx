'use client';

import { motion } from 'framer-motion';
import {DonationForm} from "@/components/donation/DonationForm";

export default function SupportPage() {
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
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Support Our Mission
                        </h1>
                        <p className="text-xl text-emerald-50 max-w-2xl">
                            Every contribution helps us create meaningful change and support communities in need.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Donation Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Donation Explanation - Left Side */}
                        <div className="pr-8">
                            <h2 className="text-3xl font-serif text-emerald-900 mb-6">
                                Make a Meaningful Contribution
                            </h2>
                            <p className="text-emerald-700 mb-4 text-lg">
                                Your donation directly supports our ongoing initiatives and helps create sustainable change in communities.
                            </p>
                            <ul className="list-disc list-inside text-emerald-600 space-y-2 mb-6">
                                <li>100% Transparent Funding</li>
                                <li>Tax Deductible Donations</li>
                                <li>Secure Online Payment</li>
                                <li>Recurring Donation Options</li>
                            </ul>
                            <div className="bg-emerald-50 p-4 rounded-lg">
                                <p className="text-emerald-800 italic">
                                    &#34;Every donation, no matter the size, creates a ripple effect of positive change in communities.&#34;
                                </p>
                            </div>
                        </div>

                        {/* Donation Form - Right Side */}
                        <div className="bg-emerald-50 rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-serif text-emerald-900 mb-6 text-center">
                                Donate Now
                            </h3>
                            <DonationForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-white mb-6">
                        Together, We Can Make a Difference
                    </h2>
                    <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
                        Every contribution, big or small, helps us continue our mission of creating positive change.
                    </p>
                </div>
            </section>
        </main>
    );
}
