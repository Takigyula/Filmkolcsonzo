import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { FilmContext } from '../../Context/Filmcontext';

const SearchBar = () => {
  const {setKiFilmek} = useContext(FilmContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);

    const leker = async () => {
        const response = await fetch(`http://localhost:3500/api/cinema/filmek/films`);
        const valasz = await response.json();
        console.log(valasz);
        console.log(searchTerm);
        
        const kibeFilmek = valasz.filmek.filter(elem => elem.cim.toLowerCase().includes(event.target.value.toLowerCase()));
        console.log(kibeFilmek);
        setKiFilmek(kibeFilmek);
    }

    leker();
  };

  // const handleSubmit = (event) => {
   
  // };

  // useEffect(() => {
  //   if (searchTerm === '') {
  //     setSearchResults([]);
  //   }
  // }, [searchTerm]);

  return (
    <div className="search-bar">
      <form>
        <input
          type="search"
          value={searchTerm}
          onChange={e => handleSearch(e)}
          placeholder="Keresés..."
        />
        {/* <button type="submit">Keresés</button> */}
      </form>
    </div>
  );
};

export default SearchBar;