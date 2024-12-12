import Script from 'next/script';
import { Poppins, Playfair_Display } from 'next/font/google';
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react"
import "@/app/globals.css";
import { Metadata } from 'next';
import { CookieConsent } from '@/components/CookieConsent'

// Font configurations
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true, // Ensure font preloading
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aahaan.org'),
  title: {
    default: 'Aahaan NGO – Empowering Rural Communities in Himachal Pradesh',
    template: '%s | Aahaan NGO'
  },
  description: 'Aahaan NGO transforms rural communities through healthcare, education, and sustainable development initiatives in Himachal Pradesh. Join us in creating lasting change.',
  keywords: [
    'Rural Development NGO',
    'Himachal Pradesh NGO',
    'Healthcare Access',
    'Rural Education',
    'Sustainable Development',
    'Community Empowerment',
    'Village Development',
    'Medical Camps',
    'Farmer Support',
    'Women Empowerment'
  ],
  authors: [{ name: 'Aahaan NGO' }],
  creator: 'Aahaan NGO',
  publisher: 'Aahaan NGO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.aahaan.org',
    siteName: 'Aahaan NGO',
    title: 'Aahaan NGO – Transforming Rural Lives in Himachal Pradesh',
    description: 'Join Aahaan NGO in our mission to empower rural communities through sustainable development, healthcare, and education initiatives.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aahaan NGO - Empowering Rural Communities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aahaan NGO – Rural Development in Himachal Pradesh',
    description: 'Transforming rural communities through sustainable development initiatives.',
    creator: '@aahaanngo',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  alternates: {
    canonical: 'https://www.aahaan.org',
    languages: {
      'en-US': 'https://www.aahaan.org/en-US',
      'hi-IN': 'https://www.aahaan.org/hi',
    },
  },
};

// JSON-LD Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Aahaan NGO",
  url: "https://www.aahaan.org",
  logo: "https://www.aahaan.org/logo.png",
  sameAs: [
    "https://www.facebook.com/aahaanngo",
    "https://twitter.com/aahaanngo",
    "https://www.linkedin.com/company/aahaan-ngo"
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Himachal Pradesh"
  },
  description: "Aahaan NGO transforms rural communities through healthcare, education, and sustainable development initiatives in Himachal Pradesh."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html
          lang="en"
          className={`${poppins.variable} ${playfair.variable}`}
          suppressHydrationWarning // Prevents hydration warnings
      >
      <head>
        {/* Critical preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* PWA essentials */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />

        {/* Structured Data */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-white text-gray-900 antialiased">
      <React.Suspense fallback={
        <div className="min-h-screen bg-white animate-pulse" />
      }>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </React.Suspense>

      <CookieConsent />

      {/* Third-party scripts */}
      <Script
          id="razorpay-checkout"
          strategy="lazyOnload"
          src="https://checkout.razorpay.com/v1/checkout.js"
      />

      {/* Analytics with performance optimizations */}
      {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
                id="gtag-base"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
                id="gtag-config"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure',
                    transport_type: 'beacon'
                  });
                `
                }}
            />
          </>
      )}
      </body>
      </html>
  );
}
