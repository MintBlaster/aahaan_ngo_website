'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Script from 'next/script';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, CheckCircle } from 'lucide-react';

// Existing constants remain the same...
const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '';
const DONATION_AMOUNTS = [
    { value: 500, label: '₹500' },
    { value: 1000, label: '₹1,000' },
    { value: 2000, label: '₹2,000' },
    { value: 5000, label: '₹5,000' },
];
const MINIMUM_DONATION_AMOUNT = 100;
const DEFAULT_DONATION_AMOUNT = 1000;

// All existing type definitions remain the same...

export default function SupportUs() {
    // All existing state variables remain the same...
    const [amount, setAmount] = useState<number>(DEFAULT_DONATION_AMOUNT);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
    const [donorName, setDonorName] = useState<string>('');
    const [donorEmail, setDonorEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    // All existing methods remain the same...
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

        const finalAmount = isCustomAmount ? parseInt(customAmount) : amount;
        if (!finalAmount || finalAmount < MINIMUM_DONATION_AMOUNT) {
            alert(`Please enter a valid amount (minimum ₹${MINIMUM_DONATION_AMOUNT})`);
            return false;
        }

        return true;
    };

    const handlePayment = async () => {
        // Existing handlePayment method remains unchanged...
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-emerald-100"
            >
                <div className="text-center mb-8">
                    <Heart
                        className="mx-auto mb-4 text-emerald-600"
                        size={48}
                        strokeWidth={1.5}
                    />
                    <h2 className="text-3xl font-bold text-emerald-900">Support Our Mission</h2>
                    <p className="mt-2 text-emerald-700 text-opacity-80">
                        Your contribution helps create meaningful change
                    </p>
                </div>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <Label
                            htmlFor="name"
                            className="text-emerald-800 font-semibold"
                        >
                            Your Name
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            value={donorName}
                            onChange={(e) => setDonorName(e.target.value)}
                            disabled={isFormDisabled}
                            required
                            className="border-emerald-300 focus:ring-emerald-500"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label
                            htmlFor="email"
                            className="text-emerald-800 font-semibold"
                        >
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={donorEmail}
                            onChange={(e) => setDonorEmail(e.target.value)}
                            disabled={isFormDisabled}
                            required
                            className="border-emerald-300 focus:ring-emerald-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-emerald-800 font-semibold">
                            Choose Donation Amount
                        </Label>
                        <RadioGroup
                            value={isCustomAmount ? 'custom' : amount.toString()}
                            onValueChange={(value) => {
                                if (value === 'custom') {
                                    setIsCustomAmount(true);
                                } else {
                                    setIsCustomAmount(false);
                                    setAmount(parseInt(value));
                                }
                            }}
                            className="grid grid-cols-3 gap-2"
                        >
                            {DONATION_AMOUNTS.map((option) => (
                                <div
                                    key={option.value}
                                    className="flex items-center space-x-2"
                                >
                                    <RadioGroupItem
                                        value={option.value.toString()}
                                        id={`amount-${option.value}`}
                                        disabled={isFormDisabled}
                                        className="text-emerald-600"
                                    />
                                    <Label
                                        htmlFor={`amount-${option.value}`}
                                        className="text-emerald-700"
                                    >
                                        {option.label}
                                    </Label>
                                </div>
                            ))}
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="custom"
                                    id="amount-custom"
                                    disabled={isFormDisabled}
                                    className="text-emerald-600"
                                />
                                <Label
                                    htmlFor="amount-custom"
                                    className="text-emerald-700"
                                >
                                    Custom
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {isCustomAmount && (
                        <div className="space-y-2">
                            <Label
                                htmlFor="custom-amount"
                                className="text-emerald-800 font-semibold"
                            >
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
                                className="border-emerald-300 focus:ring-emerald-500"
                                placeholder={`Minimum ₹${MINIMUM_DONATION_AMOUNT}`}
                            />
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
                        onClick={handlePayment}
                        disabled={isLoading || isFormDisabled}
                    >
                        {isLoading ? 'Processing...' : 'Donate Now'}
                    </Button>
                </form>

                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg flex items-center space-x-3"
                    >
                        <CheckCircle className="text-emerald-600" size={24} />
                        <p>Thank you for your donation! A confirmation email will be sent shortly.</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}