import "@/app/globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script'; // Add this import

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            {/* Meta tags for SEO */}
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

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />

            {/* Open Graph / Twitter Card for social sharing */}
            <meta property="og:type" content="website" />
        </head>
        <body className="font-sans bg-white text-gray-900 antialiased">
        {/* Add Razorpay Script */}
        <Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            strategy="lazyOnload"
        />

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
