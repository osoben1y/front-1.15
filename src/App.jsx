import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import "./index.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Products />
    </div>
  )
}

export default App
