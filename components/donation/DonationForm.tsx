'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Sparkles, Send } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import type { DonationFormData, RazorpayResponse, RazorpayOptions, PaymentStatus } from '@/lib/types/donation';
import { ReceiptModal } from "@/components/donation/RecieptModal";


interface DonationTier {
    value: number;
    label: string;
    impact: string;
}

const DONATION_TIERS: DonationTier[] = [
    { value: 10, label: '₹10', impact: 'Provides a meal' },
    { value: 50, label: '₹50', impact: 'Supplies basic medicines' },
    { value: 100, label: '₹100', impact: 'Supports education materials' },
    { value: 500, label: '₹500', impact: 'Funds skill training' },
    { value: 1000, label: '₹1000', impact: 'Enables healthcare access' },
    { value: 5000, label: '₹5000', impact: 'Sponsors complete education' },
];

export function DonationForm() {
    const [formData, setFormData] = useState<DonationFormData>({
        customAmount: '',
        isCustomAmount: false,
        name: '',
        email: '',
        orderId: '',
        paymentId: '',
        receiptId: `RCPT-${Date.now()}`,
        amount: 100,
        date: new Date().toISOString(),
        paymentMethod: 'Razorpay'
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [selectedTier, setSelectedTier] = useState(2);
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('pending');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAmountSelection = (amount: number, index: number) => {
        setSelectedTier(index);
        setFormData(prev => ({
            ...prev,
            amount,
            isCustomAmount: false,
            customAmount: '',
        }));

        toast.success(DONATION_TIERS[index].impact, {
            icon: '💝',
            position: 'bottom-center',
            duration: 2000,
        });
    };

    const handleCustomAmountChange = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setFormData(prev => ({
            ...prev,
            customAmount: numericValue,
            isCustomAmount: true,
            amount: numericValue ? parseInt(numericValue) : 0,
        }));
        setSelectedTier(-1);
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            toast.error('Please enter your name');
            return false;
        }
        if (!formData.email.trim() || !formData.email.includes('@')) {
            toast.error('Please enter a valid email');
            return false;
        }
        if (formData.amount < 10) {
            toast.error('Minimum donation amount is ₹10');
            return false;
        }
        return true;
    };

    const sendReceiptEmail = async (orderData: any) => {
        try {
            const emailResponse = await fetch('/api/send-receipt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    amount: formData.amount,
                    orderId: orderData.id,
                    donationType: 'One-time Donation'
                }),
            });

            if (!emailResponse.ok) {
                console.error('Failed to send receipt email');
            }
        } catch (error) {
            console.error('Email sending error:', error);
        }
    };

    const handlePayment = async () => {
        try {
            if (!validateForm()) return;
            setIsLoading(true);
            setPaymentStatus('pending');

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

            const options: RazorpayOptions = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
                amount: orderData.amount,
                currency: "INR",
                name: "Aahan NGO",
                description: "Donation Payment",
                order_id: orderData.id,
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
                                    paymentId: response.razorpay_payment_id,
                                    amount: orderData.amount / 100
                                }
                            }),
                        });

                        if (!verifyResponse.ok) {
                            throw new Error('Payment verification failed');
                        }

                        await sendReceiptEmail(orderData);

                        setPaymentStatus('success');
                        setShowReceipt(true);
                        toast.success('Thank you for your generous donation! 🎉');
                    } catch (error) {
                        setPaymentStatus('failed');
                        setErrorMessage('Payment verification failed');
                        toast.error('Payment verification failed');
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                },
                theme: {
                    color: "#10B981"
                },
                modal: {
                    ondismiss: function() {
                        setPaymentStatus('failed');
                        setErrorMessage('Payment was cancelled');
                        toast.error('Payment was cancelled');
                    }
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            setPaymentStatus('failed');
            const errorMsg = error instanceof Error ? error.message : 'Payment failed. Please try again.';
            setErrorMessage(errorMsg);
            toast.error(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-[95%] sm:max-w-md mx-auto px-2 sm:px-0"
        >
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 space-y-6 sm:space-y-8">
                <motion.div
                    className="text-center space-y-2"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-rose-500 mx-auto animate-pulse" />
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Make a Difference Today</h2>
                    <p className="text-sm sm:text-base text-gray-600">Your generosity powers our mission</p>
                </motion.div>

                <div className="space-y-5">
                    <div>
                        <Label className="text-sm sm:text-base text-gray-700 font-medium">
                            Choose Your Impact
                        </Label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                            {DONATION_TIERS.map((tier, index) => (
                                <motion.button
                                    key={tier.value}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleAmountSelection(tier.value, index)}
                                    className={`relative p-3 rounded-xl text-center ${
                                        !formData.isCustomAmount && selectedTier === index
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-gray-50 text-gray-700 hover:bg-emerald-50'
                                    }`}
                                >
                                    {selectedTier === index && (
                                        <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400" />
                                    )}
                                    {tier.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <Label className="text-sm sm:text-base text-gray-700 font-medium">
                            Or Enter Custom Amount
                        </Label>
                        <div className="relative mt-2">
                            <Input
                                value={formData.customAmount}
                                onChange={(e) => handleCustomAmountChange(e.target.value)}
                                className="pl-7 text-sm sm:text-base"
                                placeholder="Min amount ₹10"
                                type="number"
                                min="10"
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                ₹
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <Label>Your Name</Label>
                            <Input
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter your full name"
                                className="mt-1"
                            />
                        </div>

                        <div>
                            <Label>Email Address</Label>
                            <Input
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Enter your email"
                                type="email"
                                className="mt-1"
                            />
                        </div>
                    </div>

                    <Button
                        onClick={handlePayment}
                        disabled={isLoading}
                        className="w-full h-12"
                    >
                        {isLoading ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                            />
                        ) : (
                            <>
                                <Send className="mr-2 h-5 w-5" />
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
                status={paymentStatus}
                errorMessage={errorMessage}
            />
        </motion.div>
    );
}
