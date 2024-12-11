import Script from 'next/script';
import { Poppins, Playfair_Display } from 'next/font/google';
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react"
import "@/app/globals.css";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.className} ${playfair.className}`}>
      <head>
        <title>Aahaan NGO – Empowering Communities, Changing Lives</title>
        <meta name="description" content="Aahaan NGO focuses on health, education, and community initiatives to improve rural communities in India. Join us in making a difference!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="NGO, rural development, health camps, education, women empowerment, environmental programs, India" />
        <meta property="og:title" content="Aahaan NGO – Empowering Communities, Changing Lives" />
        <meta property="og:description" content="Transforming rural communities through health, education, and awareness initiatives." />
        <meta property="og:image" content="/path-to-og-image.jpg" />
        <meta property="og:url" content="https://www.aahaanngo.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        <Script
          strategy="afterInteractive"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />
        <Script
          id="razorpay-checkout"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                var options = {
                  key: 'YOUR_RAZORPAY_KEY',
                  amount: '1000',
                  currency: 'INR',
                  name: 'Your Company',
                  description: 'Test Transaction',
                  handler: function (response) {
                    alert(response.razorpay_payment_id);
                  },
                  prefill: {
                    name: 'John Doe',
                    email: 'john@example.com',
                  },
                  notes: {
                    address: 'Hello World',
                  },
                };
                var rzp1 = new Razorpay(options);
                rzp1.open();
              };
            `,
          }}
        />
      </body>
    </html>
  );
}