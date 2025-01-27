'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Sparkles, Send } from 'lucide-react';
import { ReceiptModal } from "@/components/donation/RecieptModal";
import type { DonationFormData, RazorpayResponse, RazorpayOptions } from '@/lib/types/donation';

const DONATION_TIERS = [
    { value: 10, label: '₹10' },
    { value: 50, label: '₹50' },
    { value: 100, label: '₹100' },
    { value: 500, label: '₹500' },
    { value: 1000, label: '₹1000' },
    { value: 5000, label: '₹5000' },
];

interface ErrorProps {
    message: string;
    details?: string;
}

export function DonationForm() {
    const [formData, setFormData] = useState<DonationFormData>({
        customAmount: "",
        isCustomAmount: false,
        name: '',
        email: '',
        orderId: "",
        paymentId: "",
        receiptId: `RCPT-${Date.now()}`,
        amount: 100
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [selectedTier, setSelectedTier] = useState(2);

    const handleAmountSelection = (amount: number, index: number) => {
        setSelectedTier(index);
        setFormData(prev => ({
            ...prev,
            amount: amount,
            isCustomAmount: false,
            customAmount: ""
        }));
    };

    const handleCustomAmountChange = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setFormData(prev => ({
            ...prev,
            customAmount: numericValue,
            isCustomAmount: true,
            amount: numericValue ? parseInt(numericValue) : 0
        }));
        setSelectedTier(-1);
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            throw new Error('Please enter your name');
        }
        if (!formData.email.trim() || !formData.email.includes('@')) {
            throw new Error('Please enter a valid email');
        }
        if (formData.amount < 10) {
            throw new Error('Minimum donation amount is ₹10');
        }
        return true;
    };

    const handlePayment = async (): Promise<void> => {
        try {
            if (!validateForm()) return;
            setIsLoading(true);

            const orderResponse = await fetch('/api/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: formData.amount,
                    receipt: formData.receiptId
                }),
            });

            const orderData = await orderResponse.json();

            if (!orderResponse.ok || orderData.error) {
                throw new Error(orderData.error?.details || 'Failed to create order');
            }

            if (!orderData.id) {
                throw { message: 'Invalid order data received' } as ErrorProps;
            }

            const options: RazorpayOptions = {
                currency: "INR",
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
                amount: orderData.amount,
                order_id: orderData.id,
                name: "Your Organization",
                description: "Donation",
                handler: async (response: RazorpayResponse) => {
                    try {
                        const verifyResponse = await fetch('/api/verify-payment', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                ...response,
                                donationData: {
                                    ...formData,
                                    orderId: orderData.id,
                                    amount: orderData.amount / 100
                                }
                            }),
                        });

                        if (!verifyResponse.ok) {
                            throw { message: 'Payment verification failed' } as ErrorProps;
                        }

                        setShowReceipt(true);
                    } catch (error) {
                        throw { message: 'Payment verification failed' } as ErrorProps;
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                },
                theme: {
                    color: "#10B981"
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            alert(error instanceof Error ? error.message : 'Payment failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-[95%] sm:max-w-md mx-auto px-2 sm:px-0">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 space-y-6 sm:space-y-8 transform transition-all duration-500 hover:shadow-2xl">
                <div className="text-center space-y-2">
                    <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-rose-500 mx-auto animate-pulse" />
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Make a Difference Today</h2>
                    <p className="text-sm sm:text-base text-gray-600">Your generosity powers our mission</p>
                </div>

                <div className="space-y-5 sm:space-y-6">
                    <div>
                        <Label className="text-sm sm:text-base text-gray-700 font-medium">Choose Your Impact</Label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-2">
                            {DONATION_TIERS.map((tier, index) => (
                                <button
                                    key={tier.value}
                                    onClick={() => handleAmountSelection(tier.value, index)}
                                    className={`relative py-3 px-2 sm:p-4 rounded-xl text-center transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                                        !formData.isCustomAmount && selectedTier === index
                                            ? 'bg-emerald-500 text-white shadow-lg scale-105'
                                            : 'bg-gray-50 text-gray-700 hover:bg-emerald-50'
                                    }`}
                                >
                                    {selectedTier === index && (
                                        <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-spin" />
                                    )}
                                    {tier.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <Label className="text-sm sm:text-base text-gray-700 font-medium">Or Enter Custom Amount</Label>
                        <div className="mt-2 relative">
                            <Input
                                value={formData.customAmount}
                                onChange={(e) => handleCustomAmountChange(e.target.value)}
                                className={`pl-7 sm:pl-8 text-sm sm:text-base transition-all duration-300 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 ${
                                    formData.isCustomAmount ? 'bg-emerald-50' : ''
                                }`}
                                placeholder="Min amount ₹10"
                                type="number"
                                min="10"
                                inputMode="numeric"
                            />
                            <span className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm sm:text-base">₹</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            Every contribution makes an impact
                        </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <div className="group">
                            <Label className="text-sm sm:text-base text-gray-700 font-medium">Your Name</Label>
                            <Input
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="mt-1 text-sm sm:text-base transition-all duration-300 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="group">
                            <Label className="text-sm sm:text-base text-gray-700 font-medium">Email Address</Label>
                            <Input
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="mt-1 text-sm sm:text-base transition-all duration-300 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                    </div>

                    <Button
                        onClick={handlePayment}
                        disabled={isLoading}
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 h-10 sm:h-12 rounded-xl text-sm sm:text-base"
                    >
                        {isLoading ? (
                            <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white" />
                        ) : (
                            <>
                                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>{`Donate ₹${formData.amount}`}</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>

            <ReceiptModal
                isOpen={showReceipt}
                onClose={() => setShowReceipt(false)}
                donationData={formData}
            />
        </div>
    );
}