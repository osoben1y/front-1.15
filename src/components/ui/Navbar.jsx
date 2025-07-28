"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">MyStore</div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 transition">Mahsulotlar</li>
          <li className="hover:text-blue-600 transition">Aloqa</li>
          <li className="hover:text-blue-600 transition">Biz haqimizda</li>
        </ul>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <ul className="md:hidden bg-white px-4 py-4 shadow-lg border-t space-y-3 font-medium text-gray-700">
          <li className="hover:text-blue-600 transition">Mahsulotlar</li>
          <li className="hover:text-blue-600 transition">Aloqa</li>
          <li className="hover:text-blue-600 transition">Biz haqimizda</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
