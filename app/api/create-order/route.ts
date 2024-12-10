import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Check if keys exist
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be provided');
}

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { amount } = body;

        if (!amount) {
            return NextResponse.json(
                { error: 'Amount is required' },
                { status: 400 }
            );
        }

        // Convert amount to paise (Razorpay expects amount in smallest currency unit)
        const amountInPaise = Math.round(amount * 100);

        const options = {
            amount: amountInPaise,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json({
            id: order.id,
            amount: order.amount,
            currency: order.currency
        });

    } catch (error) {
        console.error('Order creation error:', error);
        return NextResponse.json(
            {
                error: 'Failed to create order',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
}