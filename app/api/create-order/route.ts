import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { amount, name, email } = body;

        // Convert amount to paise (Razorpay expects amount in smallest currency unit)
        const amountInPaise = Math.round(amount * 100);

        const options = {
            amount: amountInPaise,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                name: name,
                email: email
            }
        };

        console.log('Creating order with options:', options); // Debug log

        const order = await razorpay.orders.create(options);

        console.log('Order created:', order); // Debug log

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
