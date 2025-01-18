// components/Mission.tsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MissionContent {
    title: string;
    subtitle: string;
    description: string;
    values: {
        icon: string;
        title: string;
        description: string;
    }[];
    founderNote: {
        title: string;
        text: string;
        image: string;
    };
}

const Mission = ({ content }: { content: MissionContent }) => {
    if (!content) return null;

    return (
        <section id="mission" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                        {content.title}
                    </h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto mb-8"/>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {content.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto mb-20"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                        {content.description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {content.values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, delay: index * 0.2}}
                        >
                            <div className="text-green-500 mb-4">
                                <span className="text-4xl">{value.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {value.title}
                            </h3>
                            <p className="text-gray-600">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;
