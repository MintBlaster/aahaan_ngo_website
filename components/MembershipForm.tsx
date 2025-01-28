'use client'

import { useState, useTransition, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default function MembershipForm() {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string>('')
    const [success, setSuccess] = useState<boolean>(false)
    const [isSupabaseConnected, setIsSupabaseConnected] = useState<boolean>(false)

    useEffect(() => {
        async function checkConnection() {
            try {
                const { data, error } = await supabase.from('members').select('id').limit(1)
                if (error) throw error
                setIsSupabaseConnected(true)
            } catch (err) {
                console.error('Supabase connection error:', err)
                setError('Database connection failed. Please check your internet connection and try again.')
                setIsSupabaseConnected(false)
            }
        }
        checkConnection()
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

        if (!isSupabaseConnected) {
            setError('Database connection is not available. Please try again later.')
            return
        }

        const formData = new FormData(e.currentTarget)

        // Validate required fields
        const requiredFields = ['fullName', 'mobile', 'email']
        for (const field of requiredFields) {
            if (!formData.get(field)) {
                setError(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`)
                return
            }
        }

        // Email validation
        const email = formData.get('email') as string
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address')
            return
        }

        // Mobile validation
        const mobile = formData.get('mobile') as string
        if (mobile && !/^\d{10}$/.test(mobile)) {
            setError('Please enter a valid 10-digit mobile number')
            return
        }


        try {
            const memberData = {
                created_at: new Date().toISOString(), // If you're generating this manually
                updated_at: new Date().toISOString(), // Same as created_at if manually setting
                full_name: formData.get('fullName'),
                father_name: formData.get('fatherName'),
                gender: formData.get('gender'),
                dob: formData.get('dob'),
                category: formData.get('category'),
                mobile: formData.get('mobile'),
                alternate_mobile: formData.get('alternateMobile'), // Matches database
                email: formData.get('email'),
                address: {
                    village: formData.get('village'),
                    panchayat: formData.get('panchayat'),
                    assembly: formData.get('assembly'),
                    postOffice: formData.get('postOffice'),
                    tehsil: formData.get('tehsil'),
                    district: formData.get('district'),
                    state: formData.get('state')
                }
            }

            const { error: supabaseError } = await supabase
                .from('members')
                .insert([memberData])

            if (supabaseError) throw supabaseError

            setSuccess(true)
            e.currentTarget.reset()
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } catch (err: any) {
            console.error('Submission error:', err)
            setError(err.message || 'Failed to submit form. Please try again.')
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <section id="membership-form" className="py-16 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif text-emerald-900 mb-8 text-center">
                        Membership Registration
                    </h2>

                    {/* Success/Error Messages */}
                    {(error || success) && (
                        <div className="max-w-3xl mx-auto mb-6">
                            {error && (
                                <div className="p-4 bg-red-50 text-red-600 rounded-md">
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-md">
                                    Member registered successfully!
                                </div>
                            )}
                        </div>
                    )}

                    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                        {/* Personal Information */}
                        <div className="border-b border-emerald-100 pb-6">
                            <h3 className="text-xl text-emerald-800 mb-4">Personal Information</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-emerald-700 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Father&#39;s Name</label>
                                    <input
                                        type="text"
                                        name="fatherName"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mt-6">
                                <div>
                                    <label className="block text-emerald-700 mb-2">Gender</label>
                                    <select
                                        name="gender"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Category</label>
                                    <select
                                        name="category"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="general">General</option>
                                        <option value="sc">SC</option>
                                        <option value="st">ST</option>
                                        <option value="obc">OBC</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="border-b border-emerald-100 py-6">
                            <h3 className="text-xl text-emerald-800 mb-4">Contact Information</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-emerald-700 mb-2">
                                        Mobile Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        required
                                        pattern="[0-9]{10}"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Alternate Number</label>
                                    <input
                                        type="tel"
                                        name="alternateMobile"
                                        pattern="[0-9]{10}"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block text-emerald-700 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full p-3 border border-emerald-200 rounded-md
                                 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Address Information */}
                        <div className="pt-6">
                            <h3 className="text-xl text-emerald-800 mb-4">Address</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-emerald-700 mb-2">Village Name</label>
                                    <input
                                        type="text"
                                        name="village"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Panchayat Name</label>
                                    <input
                                        type="text"
                                        name="panchayat"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Assembly Name</label>
                                    <input
                                        type="text"
                                        name="assembly"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Post Office</label>
                                    <input
                                        type="text"
                                        name="postOffice"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">Tehsil</label>
                                    <input
                                        type="text"
                                        name="tehsil"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">District</label>
                                    <input
                                        type="text"
                                        name="district"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-700 mb-2">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        className="w-full p-3 border border-emerald-200 rounded-md
                                     focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={isPending || !isSupabaseConnected}
                                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-md
                                 hover:bg-emerald-700 transition-colors text-lg font-medium
                                 disabled:bg-emerald-300 disabled:cursor-not-allowed"
                            >
                                {isPending ? 'Submitting...' : 'Register Member'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
