import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"

function App() {
  

  return (
    <div className="bg-neutral-950 w-full">
        <Navbar />
        <Header/>
        <main className="w-11/12 mx-auto my-20">
            <h2 className="text-center font-normal text-4xl font-cursive text-orange-500">Pratos variados</h2>
            <h1 className="text-center font-semibold uppercase text-3xl tracking-widest text-gray-50">Saboroso</h1>
            
            <div className="w-full grid grid-cols-1 place-items-center gap-5">
                {/* Cards */}
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default App
