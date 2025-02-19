// app/initiatives/page.tsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";

export default function Initiatives() {
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
                        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Initiatives</h1>
                        <p className="text-xl text-emerald-50 max-w-2xl">
                            Explore our key focus areas and ongoing programs that drive positive change
                            in communities across the region.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Initiatives Grid */}
            <section className="py-16 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Initiative 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src="/images/education-initiative.jpg"
                                    alt="Education Initiative"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif text-emerald-900 mb-3">
                                    Education for All
                                </h3>
                                <p className="text-emerald-700 mb-4">
                                    Ensuring quality education reaches every child through our
                                    comprehensive programs and resources.
                                </p>
                            </div>
                        </div>

                        {/* Initiative 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src="/images/health-initiative.jpg"
                                    alt="Healthcare Initiative"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif text-emerald-900 mb-3">
                                    Healthcare Access
                                </h3>
                                <p className="text-emerald-700 mb-4">
                                    Bringing essential healthcare services to underserved communities
                                    through mobile clinics and awareness programs.
                                </p>
                            </div>
                        </div>

                        {/* Initiative 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src="/images/women-empowerment.jpg"
                                    alt="Women Empowerment"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif text-emerald-900 mb-3">
                                    Women Empowerment
                                </h3>
                                <p className="text-emerald-700 mb-4">
                                    Supporting women through skill development, education, and
                                    entrepreneurship opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Get Involved Section */}
            <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-white mb-6">
                        Be Part of the Change
                    </h2>
                    <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
                        Join us in making a difference. Support our initiatives through
                        donations or volunteer your time and skills.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/support-us">
                            <button className="bg-white text-emerald-700 px-8 py-3 rounded-md font-medium
                                             hover:bg-emerald-50 transition-colors shadow-lg">
                                Donate Now
                            </button>
                        </Link>
                        <Link href="/get-involved">
                            <button className="bg-transparent border-2 border-white text-white px-8 py-3
                                             rounded-md font-medium hover:bg-white/10 transition-colors">
                                Volunteer
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
