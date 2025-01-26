"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';

// Define the MessageProfile interface
interface MessageProfile {
    image: string;
    name: string;
    title: string;
    message: string;
}

interface MessageSectionProps {
    message: MessageProfile;
    isReverse?: boolean;
}

const MessageSection: React.FC<MessageSectionProps> = ({ message, isReverse = false }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncateMessage = (text: string, maxLength: number = 300) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <section className={`py-8 md:py-16 ${isReverse ? 'bg-white' : 'bg-emerald-50'}`}>
            <div className="container mx-auto px-4">
                <div className={`max-w-5xl mx-auto flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
                    gap-6 md:gap-12 items-center`}>

                    {/* Image Container */}
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
                        <motion.div
                            className="w-full h-full rounded-full overflow-hidden border-4 border-emerald-600 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <OptimizedImage
                                src={message.image}
                                alt={message.name}
                                fill={true}
                                className="object-cover"
                                priority={true}
                            />
                        </motion.div>
                    </div>

                    {/* Content Container */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-emerald-900 mb-3">
                            {message.name}
                        </h2>
                        <h3 className="text-lg md:text-xl lg:text-2xl text-emerald-700 mb-4">
                            {message.title}
                        </h3>
                        <div className="prose prose-emerald max-w-none">
                            <p className="text-emerald-800 text-base md:text-lg">
                                {isExpanded
                                    ? message.message
                                    : truncateMessage(message.message)}
                            </p>
                        </div>
                        {message.message.length > 300 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-4 text-emerald-600 hover:text-emerald-800 font-medium
                                    transition-colors duration-200 underline-offset-2 hover:underline"
                            >
                                {isExpanded ? 'Show Less' : 'Read More'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageSection;
