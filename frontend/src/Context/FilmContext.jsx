import { useState, createContext } from 'react';

export const FilmContext = createContext();

const ContextProvider = (props) => {
    const [kiFilmek, setKiFilmek] = useState(0);

    return (
        <FilmContext.Provider
            value={{
                kiFilmek,
                setKiFilmek,
            }}
        >
            {props.children}
        </FilmContext.Provider>
    );
};

export default ContextProvider;
