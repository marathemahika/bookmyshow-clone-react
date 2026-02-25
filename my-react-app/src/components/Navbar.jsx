import React, { useState } from 'react';

const Navbar = () => {
  // Feature: Navigation highlight (active state)
  const [activeItem, setActiveItem] = useState('Movies');

  const leftMenu = ['Movies', 'Stream', 'Events', 'Plays', 'Sports', 'Activities'];
  const rightMenu = ['ListYourShow', 'Corporates', 'Offers', 'Gift Cards'];

  return (
    <nav className="sub-nav bg-[#2B3148] text-gray-300 text-xs py-2 px-4 lg:px-16 overflow-x-auto whitespace-nowrap">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center">
        <div className="flex gap-6">
          {leftMenu.map((item) => (
            <a 
              key={item} 
              href="#" 
              onClick={() => setActiveItem(item)}
              className={`hover:text-white transition-colors ${activeItem === item ? 'text-white font-bold' : ''}`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex gap-4">
          {rightMenu.map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;