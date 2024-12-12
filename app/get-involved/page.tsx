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
                            Support Us
                        </h1>
                        <p className="text-xl text-emerald-50 max-w-2xl">
                            Your contributions help us continue our mission and create lasting impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Where Your Donation Goes Section */}
            <section className="py-16 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <aside className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-emerald-900 mb-4">Where Your Donation Goes</h2>
                            <ul className="list-disc list-inside text-emerald-700 space-y-2">
                                <li>Community Outreach Programs</li>
                                <li>Educational Resources</li>
                                <li>Health and Wellness Initiatives</li>
                                <li>Environmental Conservation Efforts</li>
                            </ul>
                        </aside>

                        {/* Donation Form Section */}
                        <div className="col-span-2">
                            <h2 className="text-2xl font-bold text-emerald-900 mb-6">Make a Donation</h2>
                            <p className="text-gray-700 mb-6">
                                Your generous donations help us continue our mission. Thank you for your support!
                            </p>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
                                <DonationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
