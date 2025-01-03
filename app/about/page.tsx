// app/about/page.tsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";

export default function About() {
    return (
        <main className="pt-20">
            {/* Hero Section - New gradient background without image dependency */}
            <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">About Aahan</h1>
                        <p className="text-xl text-emerald-50 max-w-2xl">
                            Empowering communities through sustainable development and
                            positive social change.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-24 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif mb-6 text-emerald-900">Our Mission</h2>
                            <p className="text-emerald-800 mb-6">
                                We strive to create lasting positive change in communities
                                through focused initiatives in healthcare, education, and
                                sustainable development.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                    <div>
                                        <h3 className="font-medium mb-1 text-emerald-900">Community-First Approach</h3>
                                        <p className="text-emerald-700 text-sm">
                                            Working directly with local communities to understand
                                            and address their needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                                    <div>
                                        <h3 className="font-medium mb-1 text-emerald-900">Sustainable Solutions</h3>
                                        <p className="text-emerald-700 text-sm">
                                            Implementing long-term solutions that continue to
                                            benefit communities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/mission.jpg"
                                alt="Our mission in action"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif text-center mb-12 text-emerald-900">Our Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6 bg-emerald-50 rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">3+</div>
                            <div className="text-emerald-800">Years of Service</div>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
                            <div className="text-emerald-800">Active Projects</div>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
                            <div className="text-emerald-800">Lives Impacted</div>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">20+</div>
                            <div className="text-emerald-800">Team Members</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif mb-6">Join Our Mission</h2>
                    <p className="mb-8 max-w-2xl mx-auto text-emerald-50">
                        Whether through volunteering, donations, or partnerships,
                        your support helps us create lasting change.
                    </p>
                    <Link href="/get-involved">
                        <button className="bg-white text-emerald-700 px-8 py-3 rounded-md font-medium
                                     hover:bg-emerald-50 transition-colors shadow-lg">
                            Get Involved
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
