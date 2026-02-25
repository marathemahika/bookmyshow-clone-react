import React from 'react';

const MovieCard = ({ data }) => {
  return (
    <div className="movie-card">
      <div className="poster-wrapper relative rounded-lg overflow-hidden aspect-[2/3] shadow-lg">
        <img 
          src={data.img} 
          alt={data.title} 
          className="w-full h-full object-cover"
        />
        {/* Rating Overlay from original Activity 1 design */}
        <div className="rating-overlay absolute bottom-0 w-full bg-black/80 text-white p-2 flex items-center gap-2 text-xs font-bold">
          <i className="fas fa-star text-[#F84464]"></i>
          {data.rating}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-bold text-base truncate dark:text-white">{data.title}</h3>
        <p className="text-gray-500 text-sm dark:text-gray-400">{data.tags}</p>
      </div>
    </div>
  );
};

export default MovieCard;