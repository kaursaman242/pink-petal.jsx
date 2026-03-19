import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    return (
        <nav className="bg-pink-100 shadow px-6 py-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-pink-600">Pink Petal Closet 🌸</h2>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center text-gray-700">
                    <Link to="/" className="hover:text-pink-500">Home</Link>
                    <Link to="/about" className="hover:text-pink-500">About</Link>

                    <div
                        className="relative"
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                    >
                        <span className="cursor-pointer hover:text-pink-500">Products ▾</span>
                        {dropdown && (
                            <div className="absolute bg-white shadow rounded p-3 top-6">
                                <p className="cursor-pointer">Short Kurtis</p>
                                <p className="cursor-pointer">Long Kurtis</p>
                                <p className="cursor-pointer">Co-ord Sets</p>
                                <p className="cursor-pointer">Hand Embroidery</p>
                            </div>
                        )}
                    </div>

                    <Link to="/gifts">Gifts</Link>
                    <Link to="/customization">Customization</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/cart">🛒</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-3 text-gray-700">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/gifts">Gifts</Link>
                    <Link to="/customization">Customization</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/cart">Cart</Link>
                </div>)}
            </nav>
            )
            
        }
        

            export default Navbar;
