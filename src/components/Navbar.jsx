import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative sticky bg-white top-0  max-w-[1300px] mx-auto py-4 px-4 ">
      <div className="navbar flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <h1 className="bg-lightGreen font-playwrite text-white font-semibold rounded-full p-2 text-xs">EK</h1>
          <h1 className="font-semibold text-lightGreen text-lg">
            Ei Khaing <span className="text-gray-700">Soe</span>
          </h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-5">
          <li>
            <Link to="/" className="text-gray-700 hover:text-lightGreen hover:underline hover:underline-offset-2 font-semibold">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-lightGreen hover:underline hover:underline-offset-2 font-semibold">About</Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-gray-700 hover:text-lightGreen hover:underline hover:underline-offset-2 font-semibold">Experience</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-lightGreen hover:underline hover:underline-offset-2 font-semibold">Contact</Link>
          </li>
          <li>
            <a href="../public/Eikhaingsoe_resume.pdf" download className="text-gray-700 hover:text-gray-900">Download CV</a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white  border-t border-gray-200 md:hidden">
          <ul className="flex flex-col items-center gap-5 p-4">
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Experience</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
