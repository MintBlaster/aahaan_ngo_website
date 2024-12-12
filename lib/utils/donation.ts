export const DONATION_AMOUNTS = [
    { value: 500, label: '₹500' },
    { value: 1000, label: '₹1,000' },
    { value: 2000, label: '₹2,000' },
    { value: 5000, label: '₹5,000' },
] as const;

export const RAZORPAY_CONFIG = {
    currency: 'INR',
    name: 'Aahaan NGO',
    description: 'Donation',
    theme: {
        color: '#059669',
    },
    notes: {
        address: 'Aahaan NGO Office'
    },
    modal: {
        confirm_close: true,
        escape: false,
        animation: true,
    },
} as const;

export const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '';