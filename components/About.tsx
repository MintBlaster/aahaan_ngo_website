// components/About.tsx
import { motion } from 'framer-motion';
import OptimizedImage from "@/components/OptimizedImage";

interface AboutContent {
    title: string;
    subtitle: string;
    description: string;
    stats: {
        number: string;
        label: string;
    }[];
    image: string;
}

const About = ({ content }: { content: AboutContent }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                            {content.title}
                        </h2>
                        <div className="w-20 h-1 bg-green-500 mb-8" />
                        <h3 className="text-xl text-green-600 mb-6">
                            {content.subtitle}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-12">
                            {content.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            {content.stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <div className="text-4xl font-bold text-green-600 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative z-10">
                            <OptimizedImage
                                src={content.image}
                                alt="About Us"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-xl w-full h-[600px] object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-green-500 rounded-lg z-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
