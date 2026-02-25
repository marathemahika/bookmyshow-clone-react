import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import MovieCard from './components/MovieCard';
import InfoModal from './components/InfoModal';
import Footer from './components/Footer';
import './App.css'; 

// Movie Data to match your original grid
const movieData = [
  { id: 1, title: "Avatar: Fire and Ash", rating: "7.4/10", tags: "UA | English/Hindi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazhGx_h0TMFHAayg0FmyUfMZ5MKJuPBsdCw&s" },
  { id: 2, title: "Border 2", rating: "8.9/10", tags: "U | Hindi", img: "https://m.media-amazon.com/images/M/MV5BMTUxZjgwNTItMjQ5Yy00NGU4LTlhMGYtY2ZiN2Y2ZmQ1MTRiXkEyXkFqcGc@._V1_.jpg" },
  { id: 3, title: "Krantijyoti Vidyalay", rating: "9.3/10", tags: "U | Marathi", img: "https://marathimovieworld.com/images/krantijyoti-vidyalay-marathi-madhyam-poster-big.jpg" },
  { id: 4, title: "Dhurandhar", rating: "8.5/10", tags: "U | Hindi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU91dn0x8a9PM7CsfLyYQKhaRyPbQOVGDUOg&s" }
];

function App() {
  // Feature 1: Theme Persistence matching original script
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Feature 2: Live Search State
  const [searchQuery, setSearchQuery] = useState("");

  // Feature 3: Modal & Selected Content State
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync React state with body class to trigger your App.css rules
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Filtering logic for the Live Search feature
  const filteredMovies = movieData.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      {/* Props: Passing state handlers to Header */}
      <Header 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        setSearchQuery={setSearchQuery} 
      />
      
      <Navbar />
      
      {/* Feature 4: Automatic Image Slider */}
      <HeroSlider />
      
      <main className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8 py-10 px-4">
        {/* Static Sidebar for Layout Fidelity */}
        <aside className="w-full lg:w-1/4 hidden lg:block">
            <h2 className="text-xl font-bold mb-6">Filters</h2>
            <div className="bg-white rounded-md mb-4 border border-gray-200 p-4 dark:bg-[#1f1f1f]">
                <span className="text-[#F84464] font-medium">Languages</span>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="filter-chip active">English</span>
                    <span className="filter-chip">Hindi</span>
                    <span className="filter-chip">Marathi</span>
                </div>
            </div>
        </aside>

        {/* Dynamic Movie Grid */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Movies in Mumbai</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map(movie => (
              <div key={movie.id} onClick={() => handleMovieClick(movie)}>
                <MovieCard data={movie} />
              </div>
            ))}
          </div>
          
          {/* Feature 5: Conditional Rendering for "No Results" */}
          {filteredMovies.length === 0 && (
            <div className="text-center py-20 text-xl font-bold">No results found.</div>
          )}
        </section>
      </main>

      <InfoModal 
        isOpen={isModalOpen} 
        movie={selectedMovie} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <Footer />
    </div>
  );
}

export default App;