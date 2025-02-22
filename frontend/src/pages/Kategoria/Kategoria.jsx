import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { KategoriaContext } from '../../Context/KategoriaContext';

const Kategoria = () => {
    const { setKategoria } = useContext(KategoriaContext);
    const [selected, setSelected] = useState('Minden');
    const [showOptions, setShowOptions] = useState(false);

    const handleSelect = (event) => {
        setSelected(event.target.value);
        setShowOptions(false);
    };

    useEffect(() => {
        console.log(selected);
        setKategoria(selected);
    }, [selected]);

    const handleToggle = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="film-kategoria">
            <div
                className="selected-value"
                onClick={handleToggle}
            >
                Kategória: {selected}
            </div>
            {showOptions && (
                <ul className="options">
                    <li>
                        <button
                            value="Minden"
                            onClick={handleSelect}
                        >
                            Minden
                        </button>
                    </li>
                    <li>
                        <button
                            value="Akció"
                            onClick={handleSelect}
                        >
                            Akció
                        </button>
                    </li>
                    <li>
                        <button
                            value="Vígjáték"
                            onClick={handleSelect}
                        >
                            Vígjáték
                        </button>
                    </li>
                    <li>
                        <button
                            value="Thriller"
                            onClick={handleSelect}
                        >
                            Thriller
                        </button>
                    </li>
                    <li>
                        <button
                            value="Scifi"
                            onClick={handleSelect}
                        >
                            Scifi
                        </button>
                    </li>
                    <li>
                        <button
                            value="Fantasy"
                            onClick={handleSelect}
                        >
                            Fantasy
                        </button>
                    </li>
                    <li>
                        <button
                            value="Dráma"
                            onClick={handleSelect}
                        >
                            Dráma
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Kategoria;
