// app/not-found.tsx
"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-white pt-20">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Large 404 Display */}
                    <div className="text-9xl font-bold text-emerald-200 mb-8">
                        404
                    </div>

                    {/* Error Message */}
                    <h1 className="text-4xl md:text-5xl font-serif text-emerald-900 mb-6">
                        Page Not Found
                    </h1>
                    <p className="text-lg text-emerald-700 mb-12">
                        Oops! The page you&#39;re looking for seems to have wandered off.
                        Let&#39;s get you back on track to making a difference.
                    </p>

                    {/* Quick Links */}
                    <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
                        <Link href="/"
                              className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700
                                     transition-colors shadow-sm">
                            Back to Home
                        </Link>
                        <Link href="/contact"
                              className="bg-white text-emerald-600 px-6 py-3 rounded-md border border-emerald-600
                                     hover:bg-emerald-50 transition-colors">
                            Contact Support
                        </Link>
                    </div>

                    {/* Helpful Links */}
                    <div className="text-emerald-700">
                        <p className="mb-4">You might want to check out:</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <Link href="/about"
                                  className="hover:text-emerald-900 hover:underline">
                                About Us
                            </Link>
                            <span className="hidden md:inline text-emerald-300">•</span>
                            <Link href="/our-programme"
                                  className="hover:text-emerald-900 hover:underline">
                                Our Programs
                            </Link>
                            <span className="hidden md:inline text-emerald-300">•</span>
                            <Link href="/get-involved"
                                  className="hover:text-emerald-900 hover:underline">
                                Get Involved
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
