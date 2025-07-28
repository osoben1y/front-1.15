"use client"

import { useState, useEffect } from "react"
import Skeleton from "./ui/Skeleton"
import ErrorWidget from "./ui/ErrorWidget"

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalClosing, setIsModalClosing] = useState(false)

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch("https://fakestoreapi.com/products")
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()
            setProducts(data)
        } catch (err) {
            setError(err.message || "Ma'lumotlarni yuklashda xatolik yuz berdi")
        } finally {
            setLoading(false)
        }
    }

    const openModal = (product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalClosing(true)
        setTimeout(() => {
            setIsModalOpen(false)
            setSelectedProduct(null)
            setIsModalClosing(false)
        }, 300)
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price)
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-lg ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}>
                ★
            </span>
        ))
    }

    if (loading) return <Skeleton />
    if (error) return <ErrorWidget message={error} onRetry={fetchProducts} />

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Mahsulotlar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                        <div
                            className="relative h-64 bg-gray-100 cursor-pointer overflow-hidden"
                            onClick={() => openModal(product)}>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                                    Batafsil ko'rish
                                </span>
                            </div>
                        </div>
                        <div className="p-4">
                            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full mb-2">
                                {product.category}
                            </span>
                            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 h-12">{product.title}</h3>
                            <div className="flex items-center mb-2">
                                {renderStars(product.rating.rate)}
                                <span className="text-sm text-gray-600 ml-2">({product.rating.count})</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold text-green-600">{formatPrice(product.price)}</span>
                                <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="20" cy="21" r="1" />
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedProduct && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center p-4 z-50 animate-fadeIn"
                    onClick={closeModal}>
                    <div
                        className={`bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ease-in-out ${
                            isModalClosing ? "animate-modal-leave" : "animate-modal"
                        }`}
                        onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start p-6 border-b">
                            <h2 className="text-2xl font-bold text-gray-800 pr-8">{selectedProduct.title}</h2>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
                        </div>
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="flex justify-center">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        className="max-w-full h-auto max-h-96 object-contain" />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full mb-4">
                                            {selectedProduct.category}
                                        </span>
                                        <div className="flex items-center gap-2 mb-4">
                                            {renderStars(selectedProduct.rating.rate)}
                                            <span className="text-sm text-gray-600 font-medium">
                                                {selectedProduct.rating.rate} ({selectedProduct.rating.count} ta sharh)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-green-600">{formatPrice(selectedProduct.price)}</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Tavsif:</h3>
                                        <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                                    </div>
                                    <div className="flex gap-4 pt-4">
                                        <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                                            🛒 Savatga qo'shish
                                        </button>
                                        <button className="flex-1 border-2 border-gray-300 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
                                            Hozir sotib olish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products
