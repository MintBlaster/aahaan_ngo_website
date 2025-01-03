// components/Impact.tsx
"use client"
import { motion } from 'framer-motion';
import OptimizedImage from "@/components/OptimizedImage";

interface ImpactStat {
    number: string;
    label: string;
}

interface ImpactContent {
    title: string;
    subtitle: string;
    description: string;
    stats: ImpactStat[];
    highlights: {
        title: string;
        description: string;
        image: string;
        date: string;
    }[];
}

const Impact = ({ content }: { content: ImpactContent }) => {
    if (!content || !content.stats) {
        return null;
    }

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                        {content.title}
                    </h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto mb-8" />
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {content.subtitle}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {content.stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="bg-white rounded-lg p-8 shadow-lg text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-green-500">
                                    {stat.number}
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700">
                                {stat.label}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Highlights Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-3xl font-serif text-gray-900 mb-4">
                        Recent Highlights
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {content.description}
                    </p>
                </motion.div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {content.highlights.map((highlight, index) => (
                        <motion.div
                            key={highlight.title}
                            className="bg-white rounded-lg overflow-hidden shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <OptimizedImage
                                    src={highlight.image}
                                    alt={highlight.title}
                                    fill
                                    className="transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-green-500 mb-2">
                                    {highlight.date}
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                                    {highlight.title}
                                </h4>
                                <p className="text-gray-600">
                                    {highlight.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
