// components/GetInvolved.tsx
"use client"
import { motion } from 'framer-motion';

interface InvolvementOption {
    title: string;
    description: string;
    image: string;
    cta: string;
    link: string;
}

interface GetInvolvedContent {
    title: string;
    subtitle: string;
    options: InvolvementOption[];
}

const GetInvolved = ({ content }: { content: GetInvolvedContent }) => {
    return (
        <section id="join-us" className="py-20">
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
                        {content.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.options.map((option, index) => (
                        <motion.div
                            key={option.title}
                            className="group relative overflow-hidden rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="relative h-96">
                                <img
                                    src={option.image}
                                    alt={option.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                <div className="absolute bottom-0 p-6 text-white">
                                    <h3 className="text-2xl font-serif mb-3">
                                        {option.title}
                                    </h3>
                                    <p className="text-white/90 mb-6">
                                        {option.description}
                                    </p>
                                    <a
                                        href={option.link}
                                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
                                    >
                                        {option.cta}
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
