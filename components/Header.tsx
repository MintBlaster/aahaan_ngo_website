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
            {/* Explicit max-width container to prevent unexpected scaling */}
            <div className="container mx-auto px-4 lg:px-8 max-w-[1920px]">
                {/* Explicit height to prevent collapse */}
                <nav className="flex items-center justify-between h-24 lg:h-28 min-h-[6rem]">
                    {/* Logo container with explicit dimensions */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3 flex-shrink-0 min-w-[200px] lg:min-w-[250px]"
                    >
                        {/* Logo wrapper to maintain aspect ratio */}
                        <div className="relative w-[200px] lg:w-[250px] aspect-[4/1]">
                            <OptimizedImage
                                src={isScrolled || !isHome ?
                                    "/Aahan/AAHAN Logo - Original.svg" :
                                    "/Aahan/AAHAN Logo - White with Transparent Background.svg"
                                }
                                alt="Aahan NGO Logo"
                                fill
                                className="object-contain !relative h-auto w-80"
                                height={100}
                                width={500}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation with explicit spacing */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12 flex-shrink-0">
                        <NavLinks isScrolled={isScrolled} isHome={isHome} />
                        <Link href="/support-us" className="flex-shrink-0">
                            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition-colors text-lg font-medium whitespace-nowrap">
                                Support Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-3 hover:bg-black/5 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-7 h-6 flex flex-col justify-between">
                            <span className={`block w-7 h-0.5 transition-all duration-300 ${
                                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                            } ${isScrolled || !isHome ? 'bg-gray-900' : 'bg-white'}`}></span>
                            <span className={`block w-7 h-0.5 transition-all duration-300 ${
                                isMenuOpen ? 'opacity-0' : ''
                            } ${isScrolled || !isHome ? 'bg-gray-900' : 'bg-white'}`}></span>
                            <span className={`block w-7 h-0.5 transition-all duration-300 ${
                                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                            } ${isScrolled || !isHome ? 'bg-gray-900' : 'bg-white'}`}></span>
                        </div>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 ${
                        isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                    <div className="bg-white rounded-xl shadow-xl mb-4">
                        <MobileNavLinks />
                        <div className="p-4">
                            <Link href="/support-us" className="block">
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors text-lg font-medium">
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
    const linkClass = `font-medium text-lg hover:text-green-600 transition-colors whitespace-nowrap ${
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
        ['Our Programme', '/our-programme'],
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
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors text-lg"
                >
                    {title}
                </Link>
            ))}
        </div>
    );
};