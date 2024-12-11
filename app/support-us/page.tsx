'use client';

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SiRazorpay } from 'react-icons/si';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Constants
const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '';
const DONATION_AMOUNTS = [
    { value: 500, label: '₹500' },
    { value: 1000, label: '₹1,000' },
    { value: 2000, label: '₹2,000' },
    { value: 5000, label: '₹5,000' },
];
const MINIMUM_DONATION_AMOUNT = 10;
const DEFAULT_DONATION_AMOUNT = 1000;

// Type Definitions
interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
}

interface OrderResponse {
    id: string;
    amount: number;
    currency: string;
}

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: RazorpayResponse) => void;
    prefill: {
        name: string;
        email: string;
    };
    notes: {
        address: string;
        receipt_id: string;
    };
    theme: {
        color: string;
    };
    modal: {
        ondismiss: () => void;
    };
}

interface RazorpayInstance {
    open: () => void;
    on: (event: string, callback: () => void) => void;
    close: () => void;
}

interface RazorpayClass {
    new (options: RazorpayOptions): RazorpayInstance;
}

declare global {
    interface Window {
        Razorpay: RazorpayClass;
    }
}

export default function SupportUs(): React.JSX.Element {
    // State Hooks
    const [amount, setAmount] = useState<number>(DEFAULT_DONATION_AMOUNT);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
    const [donorName, setDonorName] = useState<string>('');
    const [donorEmail, setDonorEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    // Utility Functions
    const generateReceiptId = (): string => {
        return `DONATION_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        if (!donorName.trim()) {
            alert('Please enter your name');
            return false;
        }

        if (!donorEmail.trim() || !validateEmail(donorEmail)) {
            alert('Please enter a valid email address');
            return false;
        }

        const finalAmount = isCustomAmount ? parseInt(customAmount, 10) : amount;
        if (!finalAmount || finalAmount < MINIMUM_DONATION_AMOUNT) {
            alert(`Please enter a valid amount (minimum ₹${MINIMUM_DONATION_AMOUNT})`);
            return false;
        }

        return true;
    };

    // Payment Handling
    const handlePayment = async (): Promise<void> => {
        if (!validateForm()) return;

        setIsLoading(true);
        setIsFormDisabled(true);

        try {
            const finalAmount = isCustomAmount ? parseInt(customAmount, 10) : amount;

            const orderResponse = await fetch('/api/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: finalAmount,
                }),
            });

            if (!orderResponse.ok) {
                throw new Error('Failed to create order');
            }

            const orderData = (await orderResponse.json()) as OrderResponse;

            const options: RazorpayOptions = {
                key: RAZORPAY_KEY_ID,
                amount: finalAmount * 100,
                currency: 'INR',
                name: 'Aahaan NGO',
                description: 'Donation',
                order_id: orderData.id,
                handler: async (response: RazorpayResponse) => {
                    try {
                        const verifyResponse = await fetch('/api/verify-payment', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                            }),
                        });

                        if (!verifyResponse.ok) {
                            throw new Error('Payment verification failed');
                        }

                        setShowSuccess(true);
                        setIsLoading(false);
                        setIsFormDisabled(false);
                    } catch (error) {
                        console.error('Verification error:', error);
                        alert('Payment verification failed. Please contact support.');
                        setIsLoading(false);
                        setIsFormDisabled(false);
                    }
                },
                prefill: {
                    name: donorName,
                    email: donorEmail,
                },
                notes: {
                    address: 'Aahaan NGO',
                    receipt_id: generateReceiptId(),
                },
                theme: {
                    color: '#059669',
                },
                modal: {
                    ondismiss: () => {
                        setIsLoading(false);
                        setIsFormDisabled(false);
                    },
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Payment error:', error);
            alert('Payment failed. Please try again or contact support.');
            setIsLoading(false);
            setIsFormDisabled(false);
        }
    };

    // Prevent default form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    // Razorpay Key Validation
    if (!RAZORPAY_KEY_ID) {
        console.error('NEXT_PUBLIC_RAZORPAY_KEY_ID is not defined');
        return <div className="text-red-500">Payment system is not configured correctly.</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-200 via-green-300 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div 
                className="max-w-3xl mx-auto" 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Support Aahaan NGO</h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
                        Your donation helps us bring positive change. Every contribution makes a difference in someone&apos;s life.
                    </p>
                </div>

                <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="text-lg font-medium text-gray-700">Your Name</Label>
                            <Input
                                id="name"
                                type="text"
                                value={donorName}
                                onChange={(e) => setDonorName(e.target.value)}
                                disabled={isFormDisabled}
                                required
                                placeholder="Enter your full name"
                                className="mt-2 p-3 md:p-4 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-green-500 transition"
                            />
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-lg font-medium text-gray-700">Your Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={donorEmail}
                                onChange={(e) => setDonorEmail(e.target.value)}
                                disabled={isFormDisabled}
                                required
                                placeholder="Enter your email address"
                                className="mt-2 p-3 md:p-4 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-green-500 transition"
                            />
                        </div>

                        <div>
                            <Label className="text-lg font-medium text-gray-700">Choose Donation Amount</Label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                                {DONATION_AMOUNTS.map((option) => (
                                    <Button
                                        key={option.value}
                                        type="button"
                                        variant={amount === option.value ? 'default' : 'outline'}
                                        className={`w-full p-3 text-base md:text-xl font-semibold rounded-xl transition ${
                                            amount === option.value 
                                                ? 'bg-orange-400 text-white' 
                                                : 'bg-gray-100 hover:bg-gray-200'
                                        }`}
                                        onClick={() => {
                                            setIsCustomAmount(false);
                                            setAmount(option.value);
                                        }}
                                    >
                                        {option.label}
                                    </Button>
                                ))}
                                <Button
                                    type="button"
                                    variant={isCustomAmount ? 'default' : 'outline'}
                                    className={`w-full p-3 text-base md:text-xl font-semibold rounded-xl transition ${
                                        isCustomAmount 
                                            ? 'bg-orange-400 text-white' 
                                            : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                                    onClick={() => setIsCustomAmount(true)}
                                >
                                    Custom
                                </Button>
                            </div>
                        </div>

                        {isCustomAmount && (
                            <div>
                                <Label htmlFor="custom-amount" className="text-lg font-medium text-gray-700">
                                    Enter Custom Amount (₹)
                                </Label>
                                <Input
                                    id="custom-amount"
                                    type="number"
                                    min={MINIMUM_DONATION_AMOUNT}
                                    value={customAmount}
                                    onChange={(e) => setCustomAmount(e.target.value)}
                                    disabled={isFormDisabled}
                                    required
                                    placeholder={`Minimum ₹${MINIMUM_DONATION_AMOUNT}`}
                                    className="mt-2 p-3 md:p-4 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-green-500 transition"
                                />
                            </div>
                        )}

                        <div className="text-center">
                            <Button
                                type="button"
                                onClick={handlePayment}
                                disabled={isFormDisabled || isLoading}
                                className="w-full flex items-center justify-center p-3 md:p-4 text-lg md:text-xl font-bold rounded-lg bg-green-500 hover:bg-green-600 text-white transition disabled:opacity-50"
                            >
                                {isLoading ? 'Processing...' : (
                                    <>
                                        <SiRazorpay className="mr-2 text-2xl" /> Donate Now
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>

                    {showSuccess && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 bg-green-100 text-green-700 p-6 rounded-lg text-center"
                        >
                            <h3 className="text-2xl font-semibold mb-2">Thank you for your donation!</h3>
                            <p className="text-base">
                                Your support helps us continue our mission. We deeply appreciate your generosity and compassion.
                            </p>
                            <p className="mt-2 text-sm text-green-600">
                                A receipt will be sent to your email shortly.
                            </p>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}