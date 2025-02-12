import { useState, createContext } from 'react';

export const SorozatContext = createContext();

const ContextSorozatProvider = (props) => {
    const [kiSorozatok, setKiSorozatok] = useState(0);

    return (
        <SorozatContext.Provider
            value={{
                kiSorozatok,
                setKiSorozatok
            }}
        >
            {props.children}
        </SorozatContext.Provider>
    );
};

export default ContextSorozatProvider;