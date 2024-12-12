"use client"

import React, { useEffect, useState } from 'react'

export const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            setShowConsent(true)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true')
        setShowConsent(false)
    }

    if (!showConsent) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm">
                    We use cookies to improve your experience. By using our site, you agree to our use of cookies.
                </p>
                <button
                    onClick={acceptCookies}
                    className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                >
                    Accept
                </button>
            </div>
        </div>
    )
}
