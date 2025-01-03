"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled || !isHome ? 'bg-emerald-50 shadow-md' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo and Brand Name */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3"
                    >
                        <OptimizedImage
                            src="/globe.svg"
                            alt="Aahan NGO Logo"
                            width={48}
                            height={48}
                            className="h-12 w-auto"
                            priority
                        />
                        <div className="flex flex-col">
                            <span className={`font-serif text-xl font-bold ${
                                isScrolled || !isHome ? 'text-gray-900' : 'text-white'
                            }`}>
                                Aahan
                            </span>
                            <span className={`text-xs ${
                                isScrolled || !isHome ? 'text-gray-600' : 'text-white/80'
                            }`}>
                                Aspring Aid For Humanity and Nature
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLinks isScrolled={isScrolled} isHome={isHome} />
                        <Link href="/support-us">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors">
                                Support Us
                            </button>
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span className={`block w-6 h-0.5 transition-all ${
                                isMenuOpen ? 'rotate-45 translate-y-2' : ''
                            } ${isScrolled || !isHome ? 'bg-gray-900' : 'bg-white'}`}></span>
                            <span className={`block w-6 h-0.5 ${
                                isMenuOpen ? 'opacity-0' : ''
                            } ${isScrolled || !isHome ? 'bg-gray-900' : 'bg-white'}`}></span>
                            <span className={`block w-6 h-0.5 transition-all ${
                                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            } ${isScrolled || !isHome ? 'bg-gray-900' : 'bg-white'}`}></span>
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                    <div className="bg-white rounded-lg shadow-lg mb-4">
                        <MobileNavLinks />
                        <div className="p-4">
                            <Link href="/support-us">
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors">
                                    Support Us
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

interface NavLinksProps {
    isScrolled: boolean;
    isHome: boolean;
}

const NavLinks = ({ isScrolled, isHome }: NavLinksProps) => {
    const linkClass = `font-medium hover:text-green-600 transition-colors ${
        isScrolled || !isHome ? 'text-gray-700' : 'text-white'
    }`;

    const links = [
        ['About Us', '/about'],
        ['Our Programme', '/our-programme'],
        ['Initiatives', '/initiatives'],
        ['Get Involved', '/get-involved'],
        ['Contact', '/contact'],
    ];

    return (
        <>
            {links.map(([title, url]) => (
                <Link key={url} href={url} className={linkClass}>
                    {title}
                </Link>
            ))}
        </>
    );
};

const MobileNavLinks = () => {
    const links = [
        ['About Us', '/about'],
        ['Our Work', '/our-work'],
        ['Initiatives', '/initiatives'],
        ['Get Involved', '/get-involved'],
        ['Contact', '/contact'],
    ];

    return (
        <div className="py-2">
            {links.map(([title, url]) => (
                <Link
                    key={url}
                    href={url}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                >
                    {title}
                </Link>
            ))}
        </div>
    );
};
