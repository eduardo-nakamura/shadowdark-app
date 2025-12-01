import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoW from '../assets/logo-white.png'

interface NavLinkItem {
    to: string;
    label: string;

}

interface NavBarProps { 
    navLink: NavLinkItem[];
}

export default function NavBar(props: NavBarProps) {
    const { navLink } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="bg-black shadow-lg sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo Section */}
                    <div className="shrink-0 flex items-center">
                        <img src={logoW} alt="ShadowDark" />
                    </div>

                
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                        {navLink.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                className="text-white hover:bg-indigo-50 hover:text-black px-3 py-2  text-base font-medium transition duration-150"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Visible only on extra small screens) */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-150"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                // <X className="block h-6 w-6" aria-hidden="true" />
                                <p>x</p>
                            ) : (
                                // <Menu className="block h-6 w-6" aria-hidden="true" />
                                <p>+</p>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel (Hidden by default, toggled by button) */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white border-t border-gray-100">
                    <div className="pt-2 pb-3 px-2 space-y-1">
                        {navLink.map((item) => (
                            <a
                                key={item.label}
                                href={item.to}
                                onClick={toggleMenu} // Close menu on click
                                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-150"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
