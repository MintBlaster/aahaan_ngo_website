import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Type for the expected request body
interface OrderRequestBody {
    amount: number;
}

// Validate environment variables at startup
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be provided');
}

// Initialize Razorpay instance outside of the handler
const razorpay = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET,
});

export async function POST(request: Request) {
    try {
        // Parse and validate request body
        const body = await request.json() as OrderRequestBody;
        const { amount } = body;

        // Validate amount
        if (!amount || typeof amount !== 'number' || amount <= 0) {
            return NextResponse.json(
                {
                    error: 'Invalid amount provided',
                    details: 'Amount must be a positive number'
                },
                { status: 400 }
            );
        }

        // Convert amount to paise and ensure it's an integer
        const amountInPaise = Math.round(amount * 100);

        // Create order with additional metadata
        const options = {
            amount: amountInPaise,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                description: "Order payment",
                timestamp: new Date().toISOString()
            },
            partial_payment: false,
        };

        // Create order with error handling
        try {
            const order = await razorpay.orders.create(options);

            return NextResponse.json({
                success: true,
                id: order.id,
                amount: order.amount,
                currency: order.currency,
                receipt: order.receipt
            });
        } catch (razorpayError) {
            console.error('Razorpay API error:', razorpayError);
            return NextResponse.json(
                {
                    error: 'Razorpay order creation failed',
                    details: razorpayError instanceof Error ? razorpayError.message : 'Unknown error'
                },
                { status: 502 }
            );
        }

    } catch (error) {
        console.error('Request processing error:', error);
        return NextResponse.json(
            {
                error: 'Failed to process request',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

// Optionally add a GET method to verify Razorpay connection
export async function GET() {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        await razorpay.orders.all({limit: 1});
        return NextResponse.json({ status: 'healthy' });
    } catch (error) {
        console.error('Razorpay health check failed:', error);
        return NextResponse.json(
            { error: 'Razorpay connection failed' },
            { status: 503 }
        );
    }
}