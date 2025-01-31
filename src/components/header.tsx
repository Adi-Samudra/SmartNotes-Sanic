"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const menuItems = [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Support", href: "#support" },
    ]

    return (
        <header className="bg-black w-full h-fit px-20 py-8 sm:px-6 sm:py-4 xs:py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="border-[#017373] border-4 rounded-lg fill-cyan-700">
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="#00838F"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-[#017373]"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.6425 25.5C15.35 25.5 15.9763 25.5025 16.5737 25.2975C17.17 25.0925 17.665 24.7062 18.2225 24.2725L18.335 24.1838L23.0875 20.4875L23.25 20.3625C24.035 19.7537 24.7337 19.2125 25.1187 18.425C25.5037 17.6375 25.5025 16.7537 25.5 15.76V6.6675C25.5 5.56 25.5 4.605 25.3975 3.84C25.2875 3.02125 25.0387 2.235 24.4013 1.59875C23.7638 0.96125 22.9787 0.7125 22.16 0.6025C21.395 0.5 20.44 0.5 19.3325 0.5H6.6675C5.56 0.5 4.605 0.5 3.84 0.6025C3.02125 0.7125 2.235 0.96125 1.59875 1.59875C0.96125 2.23625 0.7125 3.02125 0.6025 3.84C0.5 4.605 0.5 5.56 0.5 6.6675V19.3325C0.5 20.44 0.5 21.395 0.6025 22.16C0.7125 22.9787 0.96125 23.765 1.59875 24.4013C2.23625 25.0387 3.02125 25.2875 3.84 25.3975C4.605 25.5 5.56 25.5 6.6675 25.5H14.6425ZM20.5 13C20.5 12.6685 20.3683 12.3505 20.1339 12.1161C19.8995 11.8817 19.5815 11.75 19.25 11.75H13.41C12.4938 11.75 11.75 12.4938 11.75 13.41V19.25C11.75 19.5815 11.8817 19.8995 12.1161 20.1339C12.3505 20.3683 12.6685 20.5 13 20.5C13.3315 20.5 13.6495 20.3683 13.8839 20.1339C14.1183 19.8995 14.25 19.5815 14.25 19.25V14.25H19.25C19.5815 14.25 19.8995 14.1183 20.1339 13.8839C20.3683 13.6495 20.5 13.3315 20.5 13Z"
                                fill="#EFECE6"
                            />
                        </svg>
                    </div>
                    <p className="text-white ml-2 text-xl font-text">SmartNotes</p>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden sm:flex space-x-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-white font-text hover:text-gray-300 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="sm:hidden text-white">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="hidden sm:block">
                    <div className="w-[167px] h-fit flex bg-gradient-to-tr from-[#017373] to-[#AAD9D1] rounded-md justify-center">
                        <button className="px-2 my-2 text-black font-text">Get Started</button>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="my-2"
                        >
                            <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#333333" />
                            <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#333333" />
                            <path
                                d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z"
                                fill="#333333"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="sm:hidden mt-4 space-y-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="block text-white font-text hover:text-gray-300 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="w-full h-fit flex bg-gradient-to-tr from-[#017373] to-[#AAD9D1] rounded-md justify-center">
                        <button className="px-2 my-2 text-black font-text">Get Started</button>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="my-2"
                        >
                            <rect x="0.5" y="0.5" width="23" height="23" rx="4.5" stroke="#333333" />
                            <path d="M6.60583 6.43717V9.38062H12.2096V6.43717H6.60583Z" fill="#333333" />
                            <path
                                d="M15.1535 6.43709L12.2099 9.38069L12.2088 9.38175L11.8276 9.38175L11.8276 9.76297L5.47052 16.1201L7.55132 18.2009L14.2907 11.4615L14.2923 17.0466L17.2353 17.046V9.38122L17.2337 8.51842L17.2343 8.51789L17.2343 6.43869L17.2327 6.43709L15.1535 6.43709Z"
                                fill="#333333"
                            />
                        </svg>
                    </div>
                </nav>
            )}
        </header>
    )
}

