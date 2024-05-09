import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="bg-ProjectThemeColor p-4 fixed bottom-0 w-full md:top-0 md:py-6 md:px-10 md:bottom-auto md:w-auto md:relative">
    <ul className="flex justify-between items-center md:justify-evenly">
      <li className="flex items-center">
        <Link to="/" className="text-white mr-4">
          <img src="/path/to/home.png" alt="Home" className="w-6 h-6" />
        </Link>
        <Link to="/messages" className="text-white mr-4">
          <img src="/path/to/messages.png" alt="Messages" className="w-6 h-6" />
        </Link>
        <Link to="/notifications" className="text-white mr-4">
          <img src="/path/to/notifications.png" alt="Notifications" className="w-6 h-6" />
        </Link>
        <Link to="/love" className="text-white">
          <img src="/path/to/love.png" alt="Love" className="w-6 h-6" />
        </Link>
      </li>
      <li>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Upgrade
        </button>
      </li>
    </ul>
  </nav>
);

export default Nav;
