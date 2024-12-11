'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h3 className="text-white text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            Empowering communities through sustainable development and innovative solutions.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="https://facebook.com" className="hover:text-white transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://x.com" className="hover:text-white transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" className="hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://whatsapp.com" className="hover:text-white transition-colors">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/our-work" className="hover:text-white transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/initiatives" className="hover:text-white transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/get-involved" className="hover:text-white transition-colors">
                                    Get Involved
                                </Link>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-2">
                            <p>Thari Chaproli, Subathu</p>
                            <p>Himachal Pradesh, India 173206</p>
                            <br />
                            <p>Phone: +91 8265002008</p>
                            <p>Email: info@aahaanngo.com</p>
                        </div>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-white text-xl font-bold mb-4">Newsletter</h3>
                        <p className="text-gray-400">Subscribe to our newsletter for updates</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Aahaan NGO. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="hover:text-white transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
