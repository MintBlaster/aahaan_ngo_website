// app/get-involved/page.tsx
"use client"
import { motion } from 'framer-motion';
import MembershipForm from "@/components/MembershipForm";

export default function GetInvolved() {
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
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Get Involved
                        </h1>
                        <p className="text-xl text-emerald-50 max-w-2xl">
                            Join our community of change-makers and help us create lasting impact.
                            There are many ways to contribute to our cause.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Ways to Help Section */}
            <section className="py-16 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Donate Card */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div
                                className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-emerald-900 mb-3">Make a Donation</h3>
                            <p className="text-emerald-700 mb-4">
                                Support our work through financial contributions. Every amount helps
                                us create meaningful change.
                            </p>
                            <a
                                href="/support-us"
                                className="bg-emerald-600 text-white px-6 py-2 rounded-md
                               hover:bg-emerald-700 transition-colors"
                            >
                                Donate Now
                            </a>
                        </div>

                        {/* Member Card */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div
                                className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-emerald-900 mb-3">Member</h3>
                            <p className="text-emerald-700 mb-4">
                                Share your time and skills to support our initiatives and make a
                                direct impact in communities.
                            </p>
                            <button
                                onClick={() => {
                                    const volunteerSection = document.querySelector("#volunteer-form");
                                    volunteerSection?.scrollIntoView({behavior: "smooth"});
                                }}
                                className="bg-emerald-600 text-white px-6 py-2 rounded-md
                               hover:bg-emerald-700 transition-colors"
                            >
                                Join as Member
                            </button>
                        </div>

                        {/* Partner Card */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div
                                className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-serif text-emerald-900 mb-3">Partner With Us</h3>
                            <p className="text-emerald-700 mb-4">
                                Collaborate with us to create larger impact through strategic partnerships
                                and joint initiatives.
                            </p>
                            <button
                                disabled
                                className="bg-gray-300 text-gray-600 px-6 py-2 rounded-md cursor-not-allowed"
                            >
                                Coming Soon
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer Form Section */}
            <MembershipForm />
        </main>
    );
}
