import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1771328989707_popdesktop.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1770705246497_webbanner.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1747203617158_snowkingdommumdesktop.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[200px] md:h-[350px] overflow-hidden bg-gray-100">
      <img src={images[index]} className="w-full h-full object-cover transition-opacity duration-500" alt="Banner" />
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={() => setIndex((index - 1 + images.length) % images.length)} className="bg-black/30 p-2 rounded-full text-white"><i className="fas fa-chevron-left"></i></button>
        <button onClick={() => setIndex((index + 1) % images.length)} className="bg-black/30 p-2 rounded-full text-white"><i className="fas fa-chevron-right"></i></button>
      </div>
    </section>
  );
};
export default HeroSlider;