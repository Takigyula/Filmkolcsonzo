import React, { useEffect, useState } from 'react';
import FelsoNav from '../../components/Navbar/Navbar';

const Gyik = () => {
  return (
    <div className="gyik">
      <h1>Gyakori Kérdések</h1>
      <div className="gyik-kategoriak">
        <h2>Általános Kérdések</h2>
        <ul>
          <li>
            <h3>Mi az oldal célja?</h3>
            <p>Az oldal célja, hogy segítsen az embereknek megtalálni a válaszokat a gyakori kérdésekre.</p>
          </li>
          <li>
            <h3>Hogyan működik az oldal?</h3>
            <p>Az oldal egy egyszerű kérdés-válasz rendszer, ahol a felhasználók kérdéseket tehetnek fel, és a válaszokat a rendszer automatikusan megjeleníti.</p>
          </li>
        </ul>
      </div>
      <div className="gyik-kategoriak">
        <h2>Technikai Kérdések</h2>
        <ul>
          <li>
            <h3>Milyen technológiákat használ az oldal?</h3>
            <p>Az oldal React, JavaScript és HTML/CSS technológiákat használ.</p>
          </li>
          <li>
            <h3>Hogyan lehet az oldalt használni?</h3>
            <p>Az oldal használata egyszerű: csak válassza ki a kívánt kategóriát, és olvassa el a válaszokat.</p>
          </li>
        </ul>
      </div>
      <div className="gyik-kategoriak">
        <h2>Elérhetőség</h2>
        <ul>
          <li>
            <h3>Hogyan lehet elérni az oldalt?</h3>
            <p>Az oldal elérhető a következő címen: [oldal címe].</p>
          </li>
          <li>
            <h3>Milyen időben van az oldal elérhető?</h3>
            <p>Az oldal 24 órás elérhetőséget biztosít.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gyik;