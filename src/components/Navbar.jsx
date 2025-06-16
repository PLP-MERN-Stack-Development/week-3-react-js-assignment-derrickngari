import { useState } from 'react'
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from '../utils/ThemeContext';

const Navbar = () => {
    const [active, setActive] = useState('home')
    const { theme, toggleTheme } = useTheme()

  return (
    <nav className="mb-10 shadow-md">
      <ul className="flex gap-10 w-full px-10 font-semibold  items-center justify-center p-2 border-2 border-indigo-500 mt-4 rounded-md shadow-md">
        <li className={`${active === "home" && "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"}`}>
          <Link onClick={() => setActive("home")} to="/">
            Home
          </Link>
        </li>
        <li className={`${active === "about" && "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"}`}>
          <Link onClick={() => setActive("about")} to="about">
            About
          </Link>
        </li>
        
        <li className={`${active === "tasks" && "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"}`}>
          <Link onClick={() => setActive("tasks")} to="tasks">
            Tasks
          </Link>
        </li>
      </ul>
      <button className='text-indigo-600 w-8 h-8 py-1 px-2'>
        {theme === 'light' ? <MoonIcon onClick={toggleTheme} /> : <SunIcon onClick={toggleTheme} />}
      </button>
    </nav>
  );
}

export default Navbar