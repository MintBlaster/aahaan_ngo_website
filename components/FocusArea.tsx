// components/FocusArea.tsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FocusAreaItem {
    title: string;
    description: string;
    image: string;
    stats: string;
}

interface FocusAreaContent {
    title: string;
    description: string;
    areas: FocusAreaItem[];
}

const FocusArea = ({ content }: { content: FocusAreaContent }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
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
                        {content.description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.areas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="relative h-48">
                                <Image
                                    src={area.image}
                                    alt={area.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-serif text-gray-900 mb-4">
                                    {area.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {area.description}
                                </p>
                                <div className="text-green-500 font-semibold">
                                    {area.stats}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FocusArea;
