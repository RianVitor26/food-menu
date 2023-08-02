import { FoodCard } from "./components/Card"
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
            <h1 className="text-center font-semibold uppercase text-3xl tracking-widest text-gray-50 mb-5">Saboroso</h1>
            <p className="text-gray-200 text-center mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus possimus, nisi dolor perferendis accusantium aperiam!</p>
            
            <div className="w-full grid place-items-center gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default App
