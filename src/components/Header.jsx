import {Link} from 'react-router-dom'

// Import Imagem
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center py-6 px-[5%] bg-blue-500">
          <img src={logo} className="h-20"/>
          <nav>
          <ul className="flex list-none items-center gap-8">
            <li className="text-white text-lg no-underline hover:text-[#3DC] transition-all font-bold">
                <Link to="/">Início</Link>
              </li>
            <li className="text-white text-lg no-underline hover:text-[#3DC] transition-all font-bold">
              <Link to="/Idades">Idades</Link>
              </li>
            <li className="text-white text-lg no-underline hover:text-[#3DC] transition-all font-bold">
              <Link to="/Categoria">Categoria</Link>
              </li>
            <li className="text-white text-lg no-underline hover:text-[#3DC] transition-all font-bold">
              <Link to="/Sobre">Sobre</Link>
              </li>
            </ul>
          </nav>
      </header>
    </>
  )
}

export default Header
