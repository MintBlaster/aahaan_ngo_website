// app/our-work/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { programmes } from "@/data/our-programme";
import React from "react";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function OurWork() {
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
                            Our Programmes
                        </h1>
                        <p className="text-xl text-emerald-50 max-w-2xl">
                            Discover the diverse initiatives we lead to create meaningful change in communities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programmes Grid */}
            <section className="py-16 lg:py-24 bg-emerald-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programmes.map((programme, index) => (
                            <motion.div
                                key={programme.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: index * 0.1}}
                            >
                                <Link href={`/our-programme/${programme.slug}`}>
                                    <div
                                        className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                                        <div className="relative aspect-[16/9]">
                                            <Image
                                                src={programme.images[0]}
                                                alt={programme.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col">
                                            <h3 className="text-xl font-serif text-emerald-900 mb-3 line-clamp-2">
                                                {programme.title}
                                            </h3>
                                            <p className="text-emerald-700 mb-4 flex-grow line-clamp-3">
                                                {programme.shortDescription}
                                            </p>
                                            <span
                                                className="text-emerald-600 font-medium inline-flex items-center group">
                                                Learn More
                                                <svg
                                                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M9 5l7 7-7 7"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}