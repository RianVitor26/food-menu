import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"

function App() {
  

  return (
    <div className="bg-gray-50 w-full">
        <Navbar />
        <Header/>
        <main className="w-11/12 mx-auto">
            <div className="w-full grid grid-cols-1 place-items-center gap-5">
                {/* Cards */}
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default App
