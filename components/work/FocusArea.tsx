// components/work/FocusArea.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FocusAreaProps {
    content: {
        title: string;
        description: string;
        areas: Array<{
            title: string;
            description: string;
            image: string;
            stats: string;
        }>;
    };
}

export const FocusArea = ({ content }: FocusAreaProps) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-serif mb-4">{content.title}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {content.description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.areas.map((area, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
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
                                <h3 className="text-xl font-serif mb-3">
                                    {area.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {area.description}
                                </p>
                                <div className="text-green-600 font-semibold">
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
