export function EmailTemplate({
                                  name,
                                  email,
                                  amount,
                                  orderId,
                                  donationType = 'General Support',
                                  date = new Date()
                              }: {
    name: string;
    email: string;
    amount: number;
    orderId: string;
    donationType?: string;
    date?: Date;
}): string {
    const obfuscateEmail = (email: string): string => {
        const [localPart, domain] = email.split('@');
        const obfuscatedLocal = localPart.slice(0, 2) + '*'.repeat(localPart.length - 4) + localPart.slice(-2);
        return `${obfuscatedLocal}@${domain}`;
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f8f9fa;
            }

            .container {
                background-color: #ffffff;
                border-radius: 10px;
                padding: 20px;
                max-width: 600px;
                margin: 30px auto;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                border: 1px solid #e1e4e8;
            }

            .header {
                background-color: #2ecc71; /* Emerald Green */
                color: white;
                text-align: center;
                padding: 20px;
                border-radius: 10px 10px 0 0;
                font-size: 24px;
                font-weight: bold;
            }

            .content {
                margin-top: 20px;
                font-size: 16px;
                color: #555;
            }

            .impact {
                background-color: #eafaf1;
                border-left: 5px solid #2ecc71;
                padding: 15px;
                margin: 20px 0;
                border-radius: 5px;
                font-size: 14px;
                line-height: 1.5;
            }

            .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 14px;
                color: #7f8c8d;
            }

            .cta {
                display: inline-block;
                margin: 20px auto;
                padding: 12px 20px;
                background-color: #27ae60;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                font-size: 16px;
            }

            .cta:hover {
                background-color: #219150;
            }

            ul {
                padding-left: 20px;
                list-style: disc;
            }

            ul li {
                margin: 5px 0;
            }

            a {
                color: white;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }

        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                Thank You for Your Generous Support
            </div>

            <div class="content">
                <p>Dear ${name},</p>

                <p>We are profoundly grateful for your kind donation of <strong>₹${amount.toLocaleString()}</strong> to Aahaan NGO. Your generosity is a testament to your commitment to making the world a better place.</p>

                <div class="impact">
                    <h3>Your Impact Matters</h3>
                    <p>Your donation will enable us to:</p>
                    <ul>
                        <li>Provide educational resources to underprivileged children</li>
                        <li>Support community health initiatives</li>
                        <li>Create sustainable livelihood programs</li>
                    </ul>
                </div>

                <p><strong>Donation Details:</strong></p>
                <ul>
                    <li><strong>Type:</strong> ${donationType}</li>
                    <li><strong>Order ID:</strong> ${orderId}</li>
                    <li><strong>Date:</strong> ${date.toLocaleDateString()}</li>
                    <li><strong>Email:</strong> ${obfuscateEmail(email)}</li>
                </ul>

                <a href="https://www.aahaan.org/impact" class="cta">See the Impact of Your Support</a>

                <p>Every contribution, big or small, creates a ripple effect of positive change. Thank you for being part of our journey to bring hope and joy to countless lives.</p>
            </div>

            <div class="footer">
                <p>With heartfelt gratitude,<br>The Aahaan NGO Team</p>
                <p>Stay connected with us on
                    <a href="https://www.facebook.com/aahaan">Facebook</a> |
                    <a href="https://www.instagram.com/aahaan">Instagram</a>
                </p>
            </div>
        </div>
    </body>
    </html>
    `;
}
