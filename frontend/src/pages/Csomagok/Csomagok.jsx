import React from 'react';
import './Csomagok.css';
import FelsoNav from '../../components/Navbar/Navbar';
import axios from 'axios';

const csomagok = [
  {
    id: 2,
    nev: 'Prémium',
    leiras: 'Ez a prémium csomag, amely tartalmazza az összes funkcióval.',
    ar: 19.99,
    kedvezmeny: 10,
  },
  {
    id: 3,
    nev: 'Delux',
    leiras: 'Ez a vállalati csomag, amely tartalmazza az összes funkcióval és további támogatással.',
    ar: 29.99,
    kedvezmeny: 20,
  },
];

const Csomagok = () => {
  const [selectedPackage, setSelectedPackage] = React.useState(null);
  const [statusz, setStatusz] = React.useState('nincs_fizetve');
  const email = localStorage.getItem('email');
  const userId = localStorage.getItem('userId');

  const PaymentProcess = ({ packageData, setStatusz }) => {
    const handlePayment = async () => {
      try {
        const response = await axios.put('http://localhost:3500/api/cinema/nezok/statusz', {
          id: userId,
          statusz: 'Standard',
        });
        if (response.ok) {
          setStatusz('De');
          alert('Sikeres fizetés!');
        } else {
          alert('Hiba történt a fizetés során!');
        }
      } catch (error) {
        console.error(error);
        alert('Hiba történt a fizetés során!');
      }
    };

    return (
      <div className="payment-process">
        <h2>Fizetési folyamat</h2>
        <p>Csomag neve: {packageData.nev}</p>
        <p>Ár: {packageData.ar} €</p>
        <form>
          <label>Kártya szám:</label>
          <input type="text" />
          <label>Lejárati dátum:</label>
          <input type="date" />
          <label>Kártya tulajdonos neve:</label>
          <input type="text" />
          <label>CVC:</label>
          <input type="text" />
          <button onClick={handlePayment}>Fizetés</button>
        </form>
      </div>
    );
  };

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
            <button onClick={() => setSelectedPackage(csomag)}>Előfizetés</button>
          </li>
        ))}
      </ul>
      {selectedPackage && (
        <PaymentProcess packageData={selectedPackage} setStatusz={setStatusz} />
      )}
    </div>
  );
};

export default Csomagok;