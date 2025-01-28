import mongoose from 'mongoose';

export interface DonationFormData {
    customAmount?: string;
    isCustomAmount?: boolean;
    name: string;
    email: string;
    orderId: string;
    paymentId: string;
    receiptId: string;
    amount: number;
    date: string;
    address?: string;
    phone?: string;
    paymentMethod: string;
}

export interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
}

export interface OrderResponse {
    id: string;
    amount: number;
    currency: string;
}

export interface RazorpayOptions {
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
    theme: {
        color: string;
    };
    modal?: {
        confirm_close?: boolean;
        escape?: boolean;
        animation?: boolean;
        backdropClose?: boolean;
        handleback?: boolean;
        ondismiss?: () => void;
    };
}

export interface RazorpayInstance {
    open: () => void;
    on: (event: string, callback: () => void) => void;
    close: () => void;
}

interface RazorpayClass {
    new (options: RazorpayOptions): RazorpayInstance;
}


// Declare the global namespace properly
declare global {
    interface Window {
        Razorpay: RazorpayClass;
    }
}

export type PaymentStatus = 'pending' | 'success' | 'failed';
