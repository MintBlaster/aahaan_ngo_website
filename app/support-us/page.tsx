"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import ErrorBoundary from '@/components/ErrorBoundary';

const DONATION_AMOUNTS = [
    { value: 500, label: '₹500' },
    { value: 1000, label: '₹1,000' },
    { value: 2000, label: '₹2,000' },
    { value: 5000, label: '₹5,000' },
];

declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function SupportUs() {
    const [amount, setAmount] = useState<number>(1000);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
    const [donorName, setDonorName] = useState<string>('');
    const [donorEmail, setDonorEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [razorpayLoaded, setRazorpayLoaded] = useState<boolean>(false);

    useEffect(() => {
        const checkRazorpay = () => {
            if (typeof window !== 'undefined' && window.Razorpay) {
                setRazorpayLoaded(true);
            }
        };
        checkRazorpay();
    }, []);

    const validateForm = () => {
        if (!donorName.trim()) {
            alert('Please enter your name');
            return false;
        }

        if (!donorEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorEmail)) {
            alert('Please enter a valid email address');
            return false;
        }

        const finalAmount = isCustomAmount ? parseInt(customAmount) : amount;
        if (!finalAmount || finalAmount < 100) {
            alert('Please enter a valid amount (minimum ₹100)');
            return false;
        }

        return true;
    };

    const generateReceiptId = () => {
        return `DONATION_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    };

    const handlePaymentError = (error: any) => {
        console.error('Payment error:', error);
        alert(`Payment failed: ${error.message || 'Please try again or contact support.'}`);
        setIsLoading(false);
        setIsFormDisabled(false);
    };

    const resetForm = () => {
        setDonorName('');
        setDonorEmail('');
        setCustomAmount('');
        setIsCustomAmount(false);
        setAmount(1000);
        setIsLoading(false);
        setIsFormDisabled(false);
    };

    const handlePayment = async () => {
        if (!validateForm()) return;
        if (!razorpayLoaded) {
            alert('Payment system is loading. Please try again in a moment.');
            return;
        }

        setIsFormDisabled(true);
        setIsLoading(true);

        try {
            const finalAmount = isCustomAmount ? parseInt(customAmount) : amount;

            // Create order with better error handling
            const orderResponse = await fetch('/api/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: finalAmount * 100 }),
            });

            if (!orderResponse.ok) {
                throw new Error(`HTTP error! status: ${orderResponse.status}`);
            }

            const orderData = await orderResponse.json().catch(e => {
                throw new Error('Failed to parse JSON response');
            });

            if (!orderData.id) {
                throw new Error('Invalid order data received');
            }

            // Configure Razorpay
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: finalAmount * 100,
                currency: "INR",
                name: "Aahaan Foundation",
                description: "Donation",
                order_id: orderData.id,
                handler: async function (response: any) {
                    try {
                        const verificationResponse = await fetch('/api/verify-payment', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                            }),
                        });

                        if (!verificationResponse.ok) {
                            throw new Error(`Verification failed! status: ${verificationResponse.status}`);
                        }

                        const verificationData = await verificationResponse.json().catch(e => {
                            throw new Error('Failed to parse verification response');
                        });

                        if (verificationData.verified) {
                            setShowSuccess(true);
                            resetForm();
                        } else {
                            throw new Error('Payment verification failed');
                        }
                    } catch (error) {
                        handlePaymentError(error);
                    }
                },
                prefill: { name: donorName, email: donorEmail },
                notes: {
                    address: "Aahaan Foundation Office",
                    receipt_id: generateReceiptId()
                },
                theme: { color: "#059669" },
                modal: {
                    ondismiss: function() {
                        setIsLoading(false);
                        setIsFormDisabled(false);
                    }
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            handlePaymentError(error);
        }
    };

    const SuccessMessage = () => (
        <div className="text-center p-8 bg-emerald-50 rounded-lg">
            <h3 className="text-2xl text-emerald-700 mb-4">Thank You!</h3>
            <p className="text-emerald-600">
                Your donation has been processed successfully.
                We'll send you a confirmation email shortly.
            </p>
            <button
                onClick={() => setShowSuccess(false)}
                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
                Make Another Donation
            </button>
        </div>
    );

    return (
        <ErrorBoundary>
            <main className="pt-20">
                <Script
                    src="https://checkout.razorpay.com/v1/checkout.js"
                    strategy="beforeInteractive"
                    onLoad={() => setRazorpayLoaded(true)}
                />

                {/* Header Section */}
                <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-green-600 py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Support Our Cause</h1>
                            <p className="text-xl text-emerald-50 max-w-2xl">
                                Your contribution helps us continue our mission of creating positive change
                                in communities across India.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Donation Form Section */}
                <section className="py-16 bg-emerald-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
                            {showSuccess ? (
                                <SuccessMessage />
                            ) : (
                                <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
                                    <h2 className="text-2xl font-serif text-emerald-900 mb-6">Make a Donation</h2>

                                    {/* Amount Selection */}
                                    <div className="mb-8">
                                        <label className="block text-emerald-700 mb-3">Select Amount</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                            {DONATION_AMOUNTS.map((option) => (
                                                <button
                                                    type="button"
                                                    key={option.value}
                                                    onClick={() => {
                                                        setAmount(option.value);
                                                        setIsCustomAmount(false);
                                                    }}
                                                    disabled={isFormDisabled}
                                                    className={`py-3 px-4 rounded-md border ${
                                                        amount === option.value && !isCustomAmount
                                                            ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                                                            : 'border-emerald-200 hover:border-emerald-300'
                                                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="checkbox"
                                                checked={isCustomAmount}
                                                onChange={(e) => setIsCustomAmount(e.target.checked)}
                                                disabled={isFormDisabled}
                                                className="rounded text-emerald-600 focus:ring-emerald-500 disabled:opacity-50"
                                            />
                                            <div className="flex-1">
                                                <input
                                                    type="number"
                                                    placeholder="Enter custom amount"
                                                    value={customAmount}
                                                    onChange={(e) => setCustomAmount(e.target.value)}
                                                    disabled={!isCustomAmount || isFormDisabled}
                                                    className="w-full p-3 border border-emerald-200 rounded-md
                                                             focus:outline-none focus:ring-2 focus:ring-emerald-500
                                                             disabled:opacity-50 disabled:bg-gray-100"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Donor Information */}
                                    <div className="space-y-6 mb-8">
                                        <div>
                                            <label className="block text-emerald-700 mb-2">Name</label>
                                            <input
                                                type="text"
                                                value={donorName}
                                                onChange={(e) => setDonorName(e.target.value)}
                                                disabled={isFormDisabled}
                                                className="w-full p-3 border border-emerald-200 rounded-md
                                                         focus:outline-none focus:ring-2 focus:ring-emerald-500
                                                         disabled:opacity-50 disabled:bg-gray-100"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-emerald-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                value={donorEmail}
                                                onChange={(e) => setDonorEmail(e.target.value)}
                                                disabled={isFormDisabled}
                                                className="w-full p-3 border border-emerald-200 rounded-md
                                                         focus:outline-none focus:ring-2 focus:ring-emerald-500
                                                         disabled:opacity-50 disabled:bg-gray-100"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isFormDisabled || isLoading || !razorpayLoaded}
                                        className="w-full py-3 px-6 bg-emerald-600 text-white rounded-md
                                                 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed
                                                 flex items-center justify-center"
                                    >
                                        {isLoading ? (
                                            <span className="animate-spin mr-2">⌛</span>
                                        ) : null}
                                        {isLoading ? 'Processing...' : 'Donate Now'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </ErrorBoundary>
    );
}
