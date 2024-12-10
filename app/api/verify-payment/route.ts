import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Make sure the secret key exists and is a string
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;
if (!RAZORPAY_KEY_SECRET) {
    throw new Error('RAZORPAY_KEY_SECRET must be provided');
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return NextResponse.json(
                { error: 'Missing required parameters' },
                { status: 400 }
            );
        }

        // Verify signature
        const text = `${razorpay_order_id}|${razorpay_payment_id}`;
        const generated_signature = crypto
            .createHmac('sha256', RAZORPAY_KEY_SECRET as crypto.BinaryLike)
            .update(text)
            .digest('hex');

        if (generated_signature === razorpay_signature) {
            return NextResponse.json({ verified: true });
        } else {
            return NextResponse.json(
                { error: 'Invalid signature' },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('Verification error:', error);
        return NextResponse.json(
            { error: 'Failed to verify payment' },
            { status: 500 }
        );
    }
}