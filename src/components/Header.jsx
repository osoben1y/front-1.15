const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🛒</span>
            <h1 className="text-2xl font-bold text-gray-800">Fake Store</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="" className="text-gray-600 hover:text-blue-600 transition-colors">
              Bosh sahifa
            </a>
            <a href="" className="text-gray-600 hover:text-blue-600 transition-colors">
              Mahsulotlar
            </a>
            <a href="" className="text-gray-600 hover:text-blue-600 transition-colors">
              Aloqa
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">🔍</button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">🛒<span className="ml-1">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
