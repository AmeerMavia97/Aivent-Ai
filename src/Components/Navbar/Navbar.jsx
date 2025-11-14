"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 30);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 py-1.5 w-full z-[999999] transition-colors duration-300 ${scrolled
                        ? "bg-blue shadow-md backdrop-blur-sm"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-white font-bold text-xl select-none cursor-pointer">
                        <Link href="/" className="hover:text-purple-400 transition">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={80}
                                height={60}
                                className="w-150px"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex font-Manrope font-[700] space-x-9 flex-grow justify-center text-white text-[15px]">
                        {[
                            ["Inicio", "#home"],
                            ["Programas", "#about"],
                            ["Blog", "#why-attend"],
                            ["Nosotros", "#speakers"],
                            ["Contactanos", "#schedule"],
                        ].map(([label, href]) => (
                            <li key={href}>
                                <Link href={href} className="hover:text-purple-400 transition">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Button */}
                    <div className="hidden md:block">
                        <button className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-6 py-2.5 rounded-md select-none">
                            Contacta con
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="text-white focus:outline-none"
                        >
                            {menuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-[#231e41dd] backdrop-blur-sm px-6 py-4">
                        <ul className="flex flex-col space-y-4 text-white font-medium">
                            {[
                                ["Home", "#home"],
                                ["About", "#about"],
                                ["Why Attend", "#why-attend"],
                                ["Speakers", "#speakers"],
                                ["Schedule", "#schedule"],
                                ["Tickets", "#tickets"],
                                ["Venue", "#venue"],
                                ["FAQ", "#faq"],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="hover:text-purple-400 transition block"
                                        onClick={() => setMenuOpen(false)} // close menu on click
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-5 py-2 rounded-md select-none">
                                    Buy Tickets
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
