"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🛒</span>
            <h1 className="text-2xl font-bold text-gray-800">Online-market</h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Bosh sahifa
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Mahsulotlar
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Aloqa
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">🔍</button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              🛒<span className="ml-1">0</span>
            </button>
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t shadow-lg">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Bosh sahifa</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Mahsulotlar</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Aloqa</a>
          <div className="flex items-center space-x-4 pt-2 border-t mt-2">
            <button className="text-gray-600 hover:text-blue-600">🔍</button>
            <button className="text-gray-600 hover:text-blue-600">
              🛒<span className="ml-1">0</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
