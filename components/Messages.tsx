"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/OptimizedImage';

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

    const formatMessage = (text: string) => {
        return text.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">
                {paragraph}
            </p>
        ));
    };

    return (
        <section className={`pt-16 md:pt-32 pb-8 md:pb-16 ${isReverse ? 'bg-white' : 'bg-emerald-50'}`}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className={`max-w-5xl mx-auto flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
                    gap-6 md:gap-12 items-center md:items-start`}>

                    {/* Image Container with sticky positioning */}
                    <div className="w-52 h-52 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0
                        md:sticky md:top-32">
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
                        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-emerald-900 mb-2 sm:mb-3
                            px-4 sm:px-0 font-bold">
                            {message.name}
                        </h2>
                        <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl text-emerald-700 mb-3 sm:mb-4
                            px-4 sm:px-0">
                            {message.title}
                        </h3>
                        <div className="prose prose-emerald max-w-none">
                            <div className="text-emerald-800 text-base sm:text-base md:text-lg text-justify leading-relaxed 
                                space-y-4 px-4 sm:px-0">
                                {isExpanded
                                    ? formatMessage(message.message)
                                    : formatMessage(truncateMessage(message.message))}
                            </div>
                        </div>
                        {message.message.length > 300 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-5 text-emerald-600 hover:text-emerald-800 font-medium
                                    transition-colors duration-200 underline-offset-2 hover:underline
                                    text-base sm:text-base px-4 sm:px-0"
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
