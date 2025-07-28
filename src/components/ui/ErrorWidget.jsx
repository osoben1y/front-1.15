"use client"

const ErrorWidget = ({ message, onRetry }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Xatolik yuz berdi</h2>
                <p className="text-gray-600 mb-6 max-w-md">{message}</p>
                <button
                    onClick={onRetry}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold"> 🔄 Qayta urinish
                </button>
            </div>
        </div>
    )
}

export default ErrorWidget
