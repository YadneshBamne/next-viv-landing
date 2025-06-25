"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div>
            <nav className="w-full px-4 py-5 md:px-8 flex items-center justify-between bg-[#07080A] z-10">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <img className="mr-6 mt-2" src="./v3.png" width={75} alt="Logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 tracking-wide items-center text-sm font-medium">
          <a
            href="/"
            className="text-white transition duration-200 hover:text-amber-100"
          >
            VIV
          </a>
          {["NEWS", "CAREER"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white transition duration-200 hover:text-amber-100"
            >
              {item}
            </Link>
          ))}

          <a
            href="/docs"
            className="text-white transition duration-200 hover:text-amber-100"
          >
            DOCS
          </a>
          <a
            href="/api"
            className="text-white transition duration-200 hover:text-amber-100"
          >
            API
          </a>
        </div>
        <div className="hidden md:flex">
          <Link href="https://chat.cosinv.com/">
            <button className="text-white cursor-pointer px-4 py-2 rounded-full border border-white transition hover:bg-white hover:text-black font-semibold">
              Try VIV AI
            </button>
          </Link>
        </div>
        <div className="md:hidden flex items-center z-10" onClick={toggleMenu}>
          <MenuIcon size={29} className="text-white cursor-pointer hover:text-amber-100 transition-colors" />
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Enhanced Mobile Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 bg-gradient-to-br from-[#07080A] to-[#0F1115] w-[280px] h-full transform transition-all duration-300 ease-in-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div className="flex items-center space-x-3">
            <img src="./v3.png" width={40} alt="Logo" className="rounded" />
            <span className="text-white font-bold text-lg">VIV</span>
          </div>
          <button 
            onClick={toggleMenu}
            className="text-white hover:text-red-400 transition-colors duration-200 p-1 hover:bg-gray-800/50 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col p-6 space-y-1">
          {/* Main Navigation Links */}
          <div className="space-y-1 mb-6">
            <a 
              href="/" 
              className="flex items-center px-4 py-3 text-white text-lg font-medium hover:bg-amber-100/10 hover:text-amber-100 rounded-lg transition-all duration-200 group"
              onClick={toggleMenu}
            >
              <span className="ml-2">VIV</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </a>
            
            {["NEWS", "CAREER"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="flex items-center px-4 py-3 text-white text-lg font-medium hover:bg-amber-100/10 hover:text-amber-100 rounded-lg transition-all duration-200 group"
                onClick={toggleMenu}
              >
                <span className="ml-2">{item}</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </Link>
            ))}
            
            <a
              href="https://docs.cosinv.com/"
              className="flex items-center px-4 py-3 text-white text-lg font-medium hover:bg-amber-100/10 hover:text-amber-100 rounded-lg transition-all duration-200 group"
              onClick={toggleMenu}
            >
              <span className="ml-2">DOCS</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </div>
            </a>
            
            <a
              href="/api"
              className="flex items-center px-4 py-3 text-white text-lg font-medium hover:bg-amber-100/10 hover:text-amber-100 rounded-lg transition-all duration-200 group"
              onClick={toggleMenu}
            >
              <span className="ml-2">API</span>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-gray-700/50">
            <Link href="https://chat.cosinv.com/" onClick={toggleMenu}>
              <button className="w-full text-white px-6 py-3 rounded-xl border border-amber-100/30 bg-gradient-to-r from-amber-100/5 to-amber-100/10 hover:from-amber-100/10 hover:to-amber-100/20 hover:border-amber-100/50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-amber-100/20">
                Try VIV AI
              </button>
            </Link>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700/50">
          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2024 VIV AI</p>
            <p className="text-gray-500 text-xs mt-1">Powered by COSINV</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar