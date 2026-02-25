import React from 'react';

const Header = ({ isDarkMode, setIsDarkMode, setSearchQuery }) => {
  return (
    <header className="bg-[#333545] text-white py-3 px-16 flex items-center justify-between">
      <div className="flex items-center gap-8 flex-1">
        <h1 className="text-2xl font-bold italic">book<span className="text-[#F84464]">my</span>show</h1>
        <input 
          type="text" 
          placeholder="Search for Movies..." 
          className="w-1/2 p-1.5 rounded text-black text-sm"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex gap-4 items-center">
        <button 
        onClick={() => setIsDarkMode(!isDarkMode)} // This toggles the state
        className="text-xs font-medium border border-gray-500 px-3 py-1.5 rounded text-white"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
        <button onClick={() => alert("Maintenance Mode")} className="bg-[#F84464] px-4 py-1.5 rounded text-xs">Sign in</button>
      </div>
    </header>
  );
};
export default Header;