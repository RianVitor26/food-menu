
export const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 h-14 bg-black/30 flex justify-between px-24 items-center">
        <span className="text-white font-cursive text-2xl border-b-2 border-b-orange-400 font-semibold">Food menu</span>
        <ul className="hidden items-center gap-5 sm:flex">
              <li><a className="text-gray-50 font-normal hover:text-orange-300 transition-all duration-500" href="/">Comidas e bebidas</a></li>
              <li><a className="text-gray-50 font-normal hover:text-orange-300 transition-all duration-500" href="/">Sobre</a></li>
              <li><a className="text-gray-50 font-normal hover:text-orange-300 transition-all duration-500"href="/">Contato</a></li>
        </ul>
    </nav>
  )
}
