import React from 'react';
import './Csomagok.css';
import FelsoNav from '../../components/Navbar/Navbar';


const csomagok = [
  {
    id: 2,
    nev: 'Premium',
    leiras: 'Ez a prémium csomag, amely tartalmazza az összes funkcióval.',
    ar: 19.99,
    kedvezmeny: 10,
  },
  {
    id: 3,
    nev: 'Deluxe',
    leiras: 'Ez a vállalati csomag, amely tartalmazza az összes funkcióval és további támogatással.',
    ar: 29.99,
    kedvezmeny: 20,
  },
];

const Csomagok = () => {
  return (
    
    <div className="csomagok">
<FelsoNav />
      <h1>Válassza ki az előfizetési csomagját!</h1>
      <ul>
        {csomagok.map((csomag) => (
          <li key={csomag.id}>
            <h2>{csomag.nev}</h2>
            <p>{csomag.leiras}</p>
            <p>
              Ár: {csomag.ar} €
              {csomag.kedvezmeny > 0 && (
                <span> (-{csomag.kedvezmeny}%)</span>
              )}
            </p>
            <button>Előfizetés</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Csomagok;