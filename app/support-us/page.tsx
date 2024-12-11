'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SiRazorpay } from 'react-icons/si'; // Razorpay icon from react-icons

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

const SupportUsPage = () => {
    const [amount, setAmount] = useState<number>(DEFAULT_DONATION_AMOUNT);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const handleDonation = async () => {
        if (!name || !email || amount < MINIMUM_DONATION_AMOUNT) {
            alert('Please fill all fields with valid information.');
            return;
        }

        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
            alert('Failed to load Razorpay SDK. Please try again later.');
            return;
        }

        // Create a new order on the backend
        const orderData: OrderResponse = await fetch('/api/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
        }).then((res) => res.json());

        const options: RazorpayOptions = {
            key: RAZORPAY_KEY_ID,
            amount: orderData.amount,
            currency: orderData.currency,
            name: 'Aahaan NGO',
            description: 'Donation towards Aahaan NGO Initiatives',
            order_id: orderData.id,
            handler: (response: RazorpayResponse) => {
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name,
                email,
            },
            notes: {
                address: 'Aahaan NGO Headquarters',
                receipt_id: orderData.id,
            },
            theme: {
                color: '#f37254', // Razorpay theme color, can customize to your NGO theme
            },
            modal: {
                ondismiss: () => {
                    console.log('Payment popup closed');
                },
            },
        };

        const rzp = new window.Razorpay(options); // Explicitly typing Razorpay as window property
        rzp.open();
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <motion.h1
                className="text-4xl font-bold text-center text-primary mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Support Our Cause
            </motion.h1>
            <motion.p
                className="text-lg text-center text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Your donation can help bring meaningful change to the lives of many. Every contribution counts.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full"
                    />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                    />
                </div>
            </div>

            <div className="mb-8">
                <Label>Select Donation Amount</Label>
                <div className="flex space-x-4 mt-2">
                    {DONATION_AMOUNTS.map((amountOption) => (
                        <Button
                            key={amountOption.value}
                            variant={amount === amountOption.value ? 'default' : 'outline'}
                            onClick={() => setAmount(amountOption.value)}
                        >
                            {amountOption.label}
                        </Button>
                    ))}
                    <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value, 10) || 0)}
                        placeholder={`Custom Amount (min ₹${MINIMUM_DONATION_AMOUNT})`}
                        className="w-full sm:w-1/3"
                    />
                </div>
            </div>

            <div className="text-center">
                <Button
                    className="px-8 py-3 bg-primary text-white hover:bg-primary-dark flex items-center justify-center"
                    onClick={handleDonation}
                >
                    <SiRazorpay className="mr-2" /> Donate via Razorpay
                </Button>
            </div>

            <motion.div
                className="mt-12 p-4 bg-gray-100 rounded-lg text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <p className="text-lg font-semibold text-gray-700">
                    Exciting News! Membership options are coming soon. Stay tuned to become a part of Aahaan NGO&apos;s journey.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    As a member, you&apos;ll have the opportunity to support our initiatives on an ongoing basis and be more involved in our community.
                </p>
            </motion.div>
        </div>
    );
};

export default SupportUsPage;