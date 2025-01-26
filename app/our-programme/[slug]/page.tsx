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
                    <h1 className="text-4xl text-gray-800 mb-6">Programme not found</h1>
                    <Link
                        href="/our-programme"
                        className="text-emerald-600 hover:text-emerald-700 font-medium text-xl"
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
            <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 py-24 lg:py-36">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="flex items-center mb-8">
                            <Link
                                href="/our-programme"
                                className="text-emerald-50 hover:text-white flex items-center text-xl"
                            >
                                <svg
                                    className="w-6 h-6 mr-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Programmes
                            </Link>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
                            {programme.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-emerald-50">
                            {programme.shortDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programme Details */}
            <section className="py-20 lg:py-28 bg-emerald-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="prose prose-xl prose-emerald max-w-none lg:prose-2xl"
                        >
                            <div className="text-gray-700 whitespace-pre-line text-lg md:text-xl">
                                {programme.description}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="sticky top-28">
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
                                    <Image
                                        src={programme.images[0]}
                                        alt={programme.title}
                                        width={1000}
                                        height={600}
                                        className="w-full object-cover"
                                        priority
                                    />
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                    {programme.images.slice(1).map((image, index) => (
                                        <div key={index} className="relative aspect-square">
                                            <Image
                                                src={image}
                                                alt={`${programme.title} - Image ${index + 1}`}
                                                fill
                                                className="rounded-xl object-cover"
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
