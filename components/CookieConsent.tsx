"use client"

import React, { useEffect, useState } from 'react'

interface CookieConsentProps {
    className?: string;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ className }) => {
    const [showConsent, setShowConsent] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            setShowConsent(true)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true')
        setShowConsent(false)
    }

    if (!mounted) return null
    if (!showConsent) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-emerald-100 p-4 shadow-lg z-50">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <p className="text-sm text-emerald-800 text-center sm:text-left">
                    We use cookies to improve your experience. By using our site, you agree to our use of cookies.
                </p>
                <button
                    onClick={acceptCookies}
                    className="px-6 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md
                             hover:bg-emerald-700 transition-colors duration-200 ease-in-out
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                             shadow-sm whitespace-nowrap"
                >
                    Accept Cookies
                </button>
            </div>
        </div>
    )
}
