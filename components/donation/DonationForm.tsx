'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SiRazorpay } from 'react-icons/si';
import { ReceiptModal } from "@/components/donation/RecieptModal";
import { DONATION_AMOUNTS, RAZORPAY_CONFIG, RAZORPAY_KEY_ID } from '@/lib/utils/donation';
import type {
    DonationFormData,
    RazorpayResponse,
    RazorpayOptions
} from '@/lib/types/donation';

export function DonationForm() {
    const [formData, setFormData] = useState<DonationFormData>({
        customAmount: "",
        isCustomAmount: false,
        name: '',
        email: '',
        orderId: "",
        paymentId: "",
        receiptId: `RCPT-${Date.now()}`,
        amount: 1000
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleAmountSelection = (amount: number) => {
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
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            alert('Please enter your name');
            return false;
        }
        if (!formData.email.trim() || !formData.email.includes('@')) {
            alert('Please enter a valid email');
            return false;
        }
        if (formData.amount < 10) {
            alert('Minimum donation amount is ₹10');
            return false;
        }
        return true;
    };

    const handlePayment = async (): Promise<void> => {
        if (!validateForm()) return;
        setIsLoading(true);

        try {
            // Create order
            const orderResponse = await fetch('/api/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: formData.amount,
                    receipt: formData.receiptId
                }),
            });

            const orderData = await orderResponse.json();
            console.log('Order Response:', orderData); // Debug log

            // Check for error in response
            if (!orderResponse.ok || orderData.error) {
                const errorMessage = orderData.error?.details || orderData.error || 'Failed to create order';
                throw new Error(errorMessage);
            }

            // Verify order data
            if (!orderData.id) {
                throw new Error('Invalid order data received');
            }

            // Initialize Razorpay
            if (typeof window.Razorpay === 'undefined') {
                throw new Error('Razorpay SDK not loaded');
            }

            const options: RazorpayOptions = {
                ...RAZORPAY_CONFIG,
                key: RAZORPAY_KEY_ID,
                amount: orderData.amount,
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
                                    amount: orderData.amount / 100
                                }
                            }),
                        });

                        if (!verifyResponse.ok) {
                            const errorData = await verifyResponse.json();
                            throw new Error(errorData.details || 'Payment verification failed');
                        }

                        setPaymentSuccess(true);
                        setShowReceipt(true);

                        // Send receipt email
                        await fetch('/api/send-receipt', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                ...formData,
                                paymentId: response.razorpay_payment_id,
                                orderId: response.razorpay_order_id,
                            }),
                        });
                    } catch (error) {
                        console.error('Verification error:', error);
                        alert(error instanceof Error ? error.message : 'Payment verification failed');
                    }
                },
                prefill: {
                    name: formData.name,
                    email: formData.email,
                },
                modal: {
                    ondismiss: () => {
                        setIsLoading(false);
                    }
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Payment error:', error);
            alert(error instanceof Error ? error.message : 'Payment failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
                <div>
                    <Label className="text-emerald-900">Select Amount</Label>
                    <div className="grid grid-cols-3 gap-3 mt-2">
                        {DONATION_AMOUNTS.map((amount) => (
                            <button
                                key={amount.value}
                                type="button"
                                onClick={() => handleAmountSelection(amount.value)}
                                className={`p-4 rounded-lg text-center transition-all ${
                                    !formData.isCustomAmount && formData.amount === amount.value
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                                }`}
                            >
                                {amount.label}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, isCustomAmount: true }))}
                            className={`p-4 rounded-lg text-center transition-all ${
                                formData.isCustomAmount
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                            }`}
                        >
                            Custom
                        </button>
                    </div>
                </div>

                {formData.isCustomAmount && (
                    <div>
                        <Label className="text-emerald-900">Enter Custom Amount</Label>
                        <div className="flex items-center">
                            <span className="mr-2 text-emerald-600">₹</span>
                            <Input
                                type="text"
                                value={formData.customAmount}
                                onChange={(e) => handleCustomAmountChange(e.target.value)}
                                className="mt-1 flex-grow"
                                placeholder="Enter your desired amount"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            Minimum donation amount is ₹10
                        </p>
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <Label className="text-emerald-900">Your Name</Label>
                        <Input
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="mt-1"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <Label className="text-emerald-900">Email Address</Label>
                        <Input
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mt-1"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>
                </div>

                <Button
                    onClick={handlePayment}
                    disabled={isLoading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                    <SiRazorpay className="mr-2" />
                    {isLoading ? 'Processing...' : `Donate ₹${formData.amount}`}
                </Button>
            </div>

            <ReceiptModal
                isOpen={showReceipt}
                onClose={() => setShowReceipt(false)}
                donationData={formData}
            />
        </div>
    );
}