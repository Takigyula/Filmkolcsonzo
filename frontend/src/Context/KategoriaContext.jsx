import { useState, createContext } from 'react';

export const KategoriaContext = createContext();

const ContextKategoriaProvider = (props) => {
    const [kategoria, setKategoria] = useState('');
    const [kategoriaFilmek, setKategoriaFilmek] = useState([]);
    const [kategoriaSorozatok, setKategoriaSorozatok] = useState([]);

    return (
        <KategoriaContext.Provider
            value={{
                kategoria,
                kategoriaFilmek,
                kategoriaSorozatok,
                setKategoria,
                setKategoriaFilmek,
                setKategoriaSorozatok,
            }}
        >
            {props.children}
        </KategoriaContext.Provider>
    );
};

export default ContextKategoriaProvider;
