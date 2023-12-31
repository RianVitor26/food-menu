import { IoFastFood } from 'react-icons/io5'
import { GiKnifeFork } from 'react-icons/gi'

import { Contact } from '../Contact'


export const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 h-14 bg-black/30 flex justify-between px-5 items-center">
        <span className="text-white font-cursive text-2xl border-b-2 border-b-orange-400 font-semibold">Food menu</span>
        <ul className="hidden items-center gap-5 sm:flex">
              <li><a className="flex items-center gap-2 text-gray-50 font-normal hover:text-orange-300 transition-all duration-500" href="/"><IoFastFood className="text-xl"/> Comidas e bebidas</a></li>
              <li><a className="flex items-center gap-2 text-gray-50 font-normal hover:text-orange-300 transition-all duration-500" href="/"><GiKnifeFork className="text-xl"/>Pedidos</a></li>
              <Contact/>
        </ul>
    </nav>
  )
}
