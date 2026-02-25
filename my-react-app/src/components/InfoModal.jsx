import React from 'react';

const InfoModal = ({ isOpen, movie, onClose }) => {
  if (!isOpen || !movie) return null; // Conditional rendering logic

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="bg-[#1f1f1f] text-white p-6 rounded-lg max-w-sm w-full text-center relative" onClick={e => e.stopPropagation()}>
        <span className="absolute right-4 top-2 cursor-pointer text-2xl" onClick={onClose}>&times;</span>
        <h2 className="text-xl font-bold mb-4">{movie.title}</h2>
        <img src={movie.img} className="w-40 mx-auto rounded-md mb-4" alt={movie.title} />
        <p className="mb-4 text-sm">{movie.tags}</p>
        <button className="bg-[#F84464] w-full py-2 rounded font-bold" onClick={() => alert("Booking Successful!")}>Book Now</button>
      </div>
    </div>
  );
};
export default InfoModal;