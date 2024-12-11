// app/our-work/page.tsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurWork() {
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
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Work</h1>
                        <p className="text-xl text-emerald-50 max-w-2xl">
                            Discover how we&#39;re making a difference through our various programs
                            and initiatives across communities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Projects Grid */}
            <section className="py-16 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Project 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative h-64">
                                <Image
                                    src="/work/work5.jpg"
                                    alt="Education Initiative"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-serif text-emerald-900 mb-3">
                                    Education Empowerment
                                </h3>
                                <p className="text-emerald-700 mb-4">
                                    Providing quality education and resources to underprivileged
                                    children and young adults.
                                </p>
                                <ul className="text-emerald-600 space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                        Digital literacy programs
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                        After-school support
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                        Educational resources distribution
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative h-64">
                                <Image
                                    src="/images/Medical.jpg"
                                    alt="Healthcare Initiative"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-serif text-emerald-900 mb-3">
                                    Healthcare Access
                                </h3>
                                <p className="text-emerald-700 mb-4">
                                    Improving healthcare accessibility and awareness in rural communities.
                                </p>
                                <ul className="text-emerald-600 space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                        Mobile health camps
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                        Health awareness programs
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                        Medical resource distribution
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif text-emerald-900 text-center mb-12">
                        Our Impact in Numbers
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-6 bg-emerald-50 rounded-lg text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
                            <div className="text-emerald-800">Active Projects</div>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-lg text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
                            <div className="text-emerald-800">Beneficiaries</div>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-lg text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">3+</div>
                            <div className="text-emerald-800">Years Active</div>
                        </div>
                        <div className="p-6 bg-emerald-50 rounded-lg text-center">
                            <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
                            <div className="text-emerald-800">Partner Organizations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-white mb-6">
                        Support Our Cause
                    </h2>
                    <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
                        Your support enables us to continue making a positive impact
                        in communities that need it most.
                    </p>
                    <button className="bg-white text-emerald-700 px-8 py-3 rounded-md font-medium
                                     hover:bg-emerald-50 transition-colors shadow-lg">
                        Donate Now
                    </button>
                </div>
            </section>
        </main>
    );
}
