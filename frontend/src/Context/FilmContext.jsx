import { useState, createContext } from 'react';

export const FilmContext = createContext();

const ContextFilmProvider = (props) => {
    const [kiFilmek, setKiFilmek] = useState(0);

    return (
        <FilmContext.Provider
            value={{
                kiFilmek,
                setKiFilmek
            }}
        >
            {props.children}
        </FilmContext.Provider>
    );
};

export default ContextFilmProvider;
