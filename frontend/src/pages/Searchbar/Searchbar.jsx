import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { FilmContext } from '../../Context/Filmcontext';
import { SorozatContext } from '../../Context/SorozatContext';

const SearchBar = ({ tartalom }) => {
    const { setKiFilmek } = useContext(FilmContext);
    const { setKiSorozatok } = useContext(SorozatContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const leker = async () => {
            if (tartalom === 'film') {
                const response = await fetch(
                    `http://localhost:3500/api/cinema/filmek/films`
                );
                const valasz = await response.json();
                // console.log(valasz);
                // console.log(searchTerm);

                let kibeFilmek = valasz.filmek.filter((elem) =>
                    elem.cim.toLowerCase().includes(searchTerm.toLowerCase())
                );

                // console.log(kibeFilmek);
                setKiFilmek(kibeFilmek);
            } else if (tartalom === 'sorozat') {
                const response = await fetch(
                    `http://localhost:3500/api/cinema/sorozatok/series`
                );
                const valasz = await response.json();
                // console.log(valasz);
                // console.log(searchTerm);

                const kibeSorozatok = valasz.sorozatok.filter((elem) =>
                    elem.cim.toLowerCase().includes(searchTerm.toLowerCase())
                );

                // console.log(kibeSorozatok);
                setKiSorozatok(kibeSorozatok);
            }
        };

        leker();
    }, [searchTerm]);

    return (
        <div className="search-bar">
            <form>
                <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e)}
                    placeholder="Keresés..."
                />

                {/* <button type="submit">Keresés</button> */}
            </form>
        </div>
    );
};

export default SearchBar;
