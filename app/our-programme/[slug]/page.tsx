"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { programmes } from "@/data/our-programme";

export default function ProgrammeDetails() {
    const params = useParams();
    const slug = params.slug as string;
    const programme = programmes.find((p) => p.slug === slug);

    if (!programme) {
        return (
            <div className="bg-emerald-50 min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-3xl text-gray-800 mb-4">Programme not found</h1>
                    <Link
                        href="/our-programme"
                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                        Return to Programmes
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="pt-20">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 py-20 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex items-center mb-6">
                            <Link
                                href="/our-work"
                                className="text-emerald-50 hover:text-white flex items-center"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Programmes
                            </Link>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                            {programme.title}
                        </h1>
                        <p className="text-lg sm:text-xl text-emerald-50">
                            {programme.shortDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programme Details */}
            <section className="py-16 lg:py-24 bg-emerald-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="prose prose-lg prose-emerald max-w-none lg:prose-xl"
                        >
                            <div className="text-gray-700 whitespace-pre-line">
                                {programme.description}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="sticky top-24">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                                    <Image
                                        src={programme.images[0]}
                                        alt={programme.title}
                                        width={800}
                                        height={500}
                                        className="w-full object-cover"
                                        priority
                                    />
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {programme.images.slice(1).map((image, index) => (
                                        <div key={index} className="relative aspect-square">
                                            <Image
                                                src={image}
                                                alt={`${programme.title} - Image ${index + 1}`}
                                                fill
                                                className="rounded-lg object-cover"
                                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}