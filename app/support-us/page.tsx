'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SiRazorpay } from 'react-icons/si';

const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '';
if (!RAZORPAY_KEY_ID) {
    console.error('NEXT_PUBLIC_RAZORPAY_KEY_ID is not defined');
}

const DONATION_AMOUNTS = [
    { value: 500, label: '₹500' },
    { value: 1000, label: '₹1,000' },
    { value: 2000, label: '₹2,000' },
    { value: 5000, label: '₹5,000' },
];

const MINIMUM_DONATION_AMOUNT = 10;
const DEFAULT_DONATION_AMOUNT = 1000;

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

export default function SupportUs() {
    const [amount, setAmount] = useState<number>(DEFAULT_DONATION_AMOUNT);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
    const [donorName, setDonorName] = useState<string>('');
    const [donorEmail, setDonorEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    const generateReceiptId = (): string => {
        return `DONATION_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    };

    const validateEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

    const handlePayment = async () => {
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
                name: 'Your Organization Name',
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
                    address: 'Your Address',
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

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-extrabold text-gray-900">Support Our Cause</h2>
                    <p className="mt-2 text-xl text-gray-600">Every donation brings us one step closer to making a difference.</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div>
                            <Label htmlFor="name" className="text-lg font-medium">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                value={donorName}
                                onChange={(e) => setDonorName(e.target.value)}
                                disabled={isFormDisabled}
                                required
                                className="mt-2 p-3 border rounded-md w-full"
                            />
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-lg font-medium">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={donorEmail}
                                onChange={(e) => setDonorEmail(e.target.value)}
                                disabled={isFormDisabled}
                                required
                                className="mt-2 p-3 border rounded-md w-full"
                            />
                        </div>

                        <div>
                            <Label className="text-lg font-medium">Donation Amount</Label>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                {DONATION_AMOUNTS.map((option) => (
                                    <Button
                                        key={option.value}
                                        className={`w-full p-3 text-lg font-semibold rounded-lg ${amount === option.value ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
                                        onClick={() => {
                                            setIsCustomAmount(false);
                                            setAmount(option.value);
                                        }}
                                    >
                                        {option.label}
                                    </Button>
                                ))}
                                <Button
                                    className={`w-full p-3 text-lg font-semibold rounded-lg ${isCustomAmount ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
                                    onClick={() => setIsCustomAmount(true)}
                                >
                                    Custom Amount
                                </Button>
                            </div>
                        </div>

                        {isCustomAmount && (
                            <div>
                                <Label htmlFor="custom-amount" className="text-lg font-medium">Enter Amount (₹)</Label>
                                <Input
                                    id="custom-amount"
                                    type="number"
                                    min={MINIMUM_DONATION_AMOUNT}
                                    value={customAmount}
                                    onChange={(e) => setCustomAmount(e.target.value)}
                                    disabled={isFormDisabled}
                                    required
                                    className="mt-2 p-3 border rounded-md w-full"
                                />
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full py-3 mt-6 text-xl font-semibold bg-green-500 text-white rounded-lg"
                            onClick={handlePayment} disabled={isLoading || isFormDisabled}
                        >
                            {isLoading ? 'Processing Payment...' : 'Donate Now'}
                        </Button>

                        {showSuccess && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700"
                            >
                                <p className="text-lg font-semibold">Thank you for your donation!</p>
                                <p>Your donation has been successfully processed. You will receive a confirmation email shortly.</p>
                            </motion.div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}