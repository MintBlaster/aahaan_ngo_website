"use client"

import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface HeroContent {
    title: string;
    subtitle: string;
    cta: string;
    backgroundImage: string;
}

const Hero = ({ content }: { content: HeroContent }) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Prevent default anchor click behavior
    useEffect(() => {
        const handleLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const sectionId = target.getAttribute('href')?.replace('#', '');
                if (sectionId) scrollToSection(sectionId);
            }
        };

        document.addEventListener('click', handleLinkClick);
        return () => document.removeEventListener('click', handleLinkClick);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={content.backgroundImage}
                    alt="Rural development impact"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>

            {/* Main Content */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative Element */}
                        <div className="w-20 h-1 bg-green-500 mb-8" />

                        {/* Title */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {content.title}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {content.subtitle}
                        </motion.p>

                        {/* Call to Action Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button
                                onClick={() => scrollToSection('join-us')}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                            >
                                {content.cta}
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
                            </button>
                            <button
                                onClick={() => scrollToSection('mission')}
                                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
                            >
                                Discover How
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div className="text-white">
                                <div className="text-3xl font-bold mb-1">1000+</div>
                                <div className="text-white/80">Lives Impacted</div>
                            </div>
                            <div className="text-white">
                                <div className="text-3xl font-bold mb-1">50+</div>
                                <div className="text-white/80">Villages Reached</div>
                            </div>
                            <div className="text-white hidden md:block">
                                <div className="text-3xl font-bold mb-1">10+</div>
                                <div className="text-white/80">Active Programs</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;