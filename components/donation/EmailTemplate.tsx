export default function EmailTemplate({
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
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.8;
                color: #1a1a1a;
                margin: 0;
                padding: 40px 0;
                background-color: #f5f5f5;
            }

            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 0 20px;
            }

            .org-header {
                text-align: center;
                margin-bottom: 30px;
            }

            .org-name {
                font-size: 32px;
                font-weight: 700;
                color: #1a1a1a;
                letter-spacing: 2px;
            }

            .org-details {
                color: #666;
                font-size: 14px;
                margin-top: 10px;
            }

            .invoice-box {
                background: #ffffff;
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                padding: 40px;
                margin-bottom: 30px;
            }

            .thank-you {
                text-align: center;
                margin-bottom: 40px;
            }

            .thank-you-title {
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 10px;
            }

            .thank-you-message {
                color: #666;
                font-size: 16px;
            }

            .details-table {
                width: 100%;
                border-collapse: collapse;
                margin: 30px 0;
            }

            .details-table th {
                background-color: #f8f8f8;
                padding: 12px;
                text-align: left;
                font-weight: 600;
                border-bottom: 2px solid #e0e0e0;
            }

            .details-table td {
                padding: 12px;
                border-bottom: 1px solid #e0e0e0;
            }

            .details-table tr:last-child td {
                border-bottom: none;
            }

            .section {
                margin: 30px 0;
            }

            .section-title {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 15px;
                color: #1a1a1a;
            }

            .info-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 8px 20px;
                font-size: 14px;
            }

            .info-label {
                color: #666;
                font-weight: 500;
            }

            .info-value {
                color: #1a1a1a;
            }

            .total-row {
                font-weight: 700;
                background-color: #f8f8f8;
            }

            .footer {
                text-align: center;
                color: #666;
                font-size: 13px;
                line-height: 1.6;
            }

            .footer-links {
                margin: 20px 0;
            }

            .footer-links a {
                color: #666;
                text-decoration: none;
                margin: 0 15px;
            }

            .footer-note {
                color: #999;
                font-size: 12px;
                margin-top: 20px;
            }

            @media (max-width: 600px) {
                .container {
                    padding: 0 15px;
                }
                
                .invoice-box {
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="org-header">
                <div class="org-name">AAHAN</div>
                <div class="org-details">
                    Village Nagar, Kunihar, Solan, H.P., IN 173207<br>
                </div>
            </div>

            <div class="invoice-box">
                <div class="thank-you">
                    <div class="thank-you-title">THANK YOU</div>
                    <div class="thank-you-message">Thanks for your donation, ${name}!</div>
                </div>

                <table class="details-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${donationType}</td>
                            <td>₹${amount.toLocaleString()}</td>
                            <td>₹${amount.toLocaleString()}</td>
                        </tr>
                        <tr class="total-row">
                            <td><strong>Total</strong></td>
                            <td></td>
                            <td><strong>₹${amount.toLocaleString()}</strong></td>
                        </tr>
                    </tbody>
                </table>

                <div class="section">
                    <div class="section-title">Issued For</div>
                    <div class="info-grid">
                        <div class="info-label">Name:</div>
                        <div class="info-value">${name}</div>
                        <div class="info-label">Email:</div>
                        <div class="info-value">${email}</div>
                        <div class="info-label">Country:</div>
                        <div class="info-value">India</div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Transaction Details</div>
                    <div class="info-grid">
                        <div class="info-label">Date:</div>
                        <div class="info-value">${date.toLocaleString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })}</div>
                        <div class="info-label">Transaction ID:</div>
                        <div class="info-value">${orderId}</div>
                        <div class="info-label">Payment Type:</div>
                        <div class="info-value">Online Donation</div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <div>Email: support@aahanngo.org</div>
                
                <div class="footer-links">
                    <a href="#">Privacy Policy</a> |
                    <a href="#">Terms of Use</a> |
                    <a href="#">Support</a>
                </div>

                <div class="footer-note">
                    This is a service notification email.<br>
                    © ${new Date().getFullYear()} Aahan NGO. All rights reserved
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
}