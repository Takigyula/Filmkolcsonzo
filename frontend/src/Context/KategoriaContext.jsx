import { useState, createContext } from 'react';

export const KategoriaContext = createContext();

const ContextKategoriaProvider = (props) => {
    const [kiKategoriak, setKiKategoriak] = useState('');

    return (
        <KategoriaContext.Provider
            value={{
                kiKategoriak,
                setKiKategoriak
            }}
        >
            {props.children}
        </KategoriaContext.Provider>
    );
};

export default ContextKategoriaProvider;