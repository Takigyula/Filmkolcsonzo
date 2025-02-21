import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { KategoriaContext } from '../../Context/KategoriaContext';

const Kategoria = () => {
  const {setKiKategoriak} = useContext(KategoriaContext);
  const [selected, setSelected] = useState('Akciók');
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (event) => {
    setSelected(event.target.value);
    setShowOptions(false);
  };
  
  useEffect(() => {  
    console.log(selected);
    setKiKategoriak(selected);
   }, [selected]);
  
  const handleToggle = () => {
    setShowOptions(!showOptions);
  };
  
  return (
    <div className="film-kategoria">
      <div className="selected-value" onClick={handleToggle}>
        {selected}
      </div>
      {showOptions && (
        <ul className="options">
          <li>
            <button value="Akciók" onClick={handleSelect}>
              Akciók
            </button>
          </li>
          <li>
            <button value="Vigjátékok" onClick={handleSelect}>
              Vigjátékok
            </button>
          </li>
          <li>
            <button value="Thriller" onClick={handleSelect}>
              Thriller
            </button>
          </li>
          <li>
            <button value="Sci-fi" onClick={handleSelect}>
              Sci-fi
            </button>
          </li>
          <li>
            <button value="Fantasy" onClick={handleSelect}>
              Fantasy
            </button>
          </li>
          <li>
            <button value="Dráma" onClick={handleSelect}>
              Dráma
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Kategoria;