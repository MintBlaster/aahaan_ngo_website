// In your API route
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import EmailTemplate from "@/components/donation/EmailTemplate";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            amount,
            orderId,
            donationType = 'General Support'
        } = body;

        // Email Configuration for Zoho Mail
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465, // Use port 465 for secure connection
            secure: true, // True for SSL
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email Options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Thank You for Your Transformative Support - Aahan NGO`,
            html: EmailTemplate({
                name,
                email,
                amount,
                orderId,
                donationType
            })
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: 'Thank you email sent successfully',
            status: 'success'
        });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            {
                error: 'Failed to send thank you email',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
}
