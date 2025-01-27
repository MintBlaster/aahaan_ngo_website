"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { Message } from "@/data/gridMessages";

interface MessageGridProps {
    messages: Message[];
}

const MessageGrid: React.FC<MessageGridProps> = ({ messages }) => {
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

    const truncateText = (text: string, maxLength: number = 120) => {
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
        <section className="py-12 bg-emerald-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif text-emerald-900 mb-8 text-center">
                    Community Voices
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                              [&>*:last-child:nth-child(3n-2)]:md:col-span-2
                              [&>*:last-child:nth-child(3n-2)]:lg:col-start-2">
                    {messages.map((message) => (
                        <motion.div
                            key={message.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl
                                     transition-all duration-300 border border-emerald-100"
                            whileHover={{ y: -4 }}
                            onClick={() => setSelectedMessage(message)}
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden
                                                  flex-shrink-0 border-2 border-emerald-100">
                                        <OptimizedImage
                                            src={message.image}
                                            alt={message.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-serif text-emerald-900 leading-tight">
                                            {message.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="relative">
                                    <Quote className="absolute -top-2 -left-1 w-8 h-8 text-emerald-100
                                                    transform -scale-x-100" />
                                    <p className="text-emerald-800 text-sm leading-relaxed pt-2 pl-6">
                                        {truncateText(message.message)}
                                    </p>
                                </div>

                                <button
                                    className="mt-4 text-emerald-600 hover:text-emerald-800
                                             text-sm font-medium inline-flex items-center gap-1
                                             transition-colors duration-200"
                                >
                                    Read More
                                    <span className="text-xs">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedMessage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50 flex items-center
                                     justify-center p-4 backdrop-blur-sm"
                            onClick={() => setSelectedMessage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh]
                                         overflow-y-auto shadow-2xl"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="sticky top-0 bg-white border-b border-emerald-100
                                            p-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-2xl font-serif text-emerald-900">
                                            {selectedMessage.name}
                                        </h3>
                                        <p className="text-emerald-600">
                                            Community Member
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedMessage(null)}
                                        className="p-2 hover:bg-emerald-50 rounded-full
                                                 transition-colors"
                                    >
                                        <X className="w-6 h-6 text-emerald-600" />
                                    </button>
                                </div>
                                <div className="p-6">
                                    <div className="prose prose-emerald max-w-none">
                                        <div className="text-emerald-800 text-base leading-relaxed">
                                            {formatMessage(selectedMessage.message)}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default MessageGrid;
