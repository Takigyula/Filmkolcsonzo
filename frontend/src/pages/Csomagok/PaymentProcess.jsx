import React from 'react';
import axios from 'axios';

const PaymentProcess = ({ packageData, setStatusz }) => {
  const handlePayment = async () => {
    try {
      const response = await axios.put('http://localhost:3500/api/cinema/nezok/statusz', {
        id: localStorage.getItem('userId'),
        statusz: 'De',
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
    <div>
      <h2>Fizetési folyamat</h2>
      <p>C somag neve: {packageData.nev}</p>
      <p>Csomag leírása: {packageData.leiras}</p>
      <p>Csomag ára: {packageData.ar} €</p>
      <button onClick={handlePayment}>Fizetés</button>
    </div>
  );
};

export default PaymentProcess;