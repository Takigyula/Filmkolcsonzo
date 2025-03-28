import React from 'react';
import FelsoNav from '../../components/Navbar/Navbar';
import PaymentProcess from './PaymentProcess';
// import axios from 'axios';

const csomagok = [
    {
        id: 2,
        nev: 'Prémium',
        leiras: [
        'Élvezd a korlátlan szórakozást kiváló minőségben!', 
    ],
        ar: 4.99,
        kedvezmeny: 10,
    },
    {
        id: 3,
        nev: 'Delux',
        leiras: 'Tapasztald meg a legmagasabb szintű szórakozást! (A Delux csomag minden előnyt tartalmaz a Prémium csomagból.)',
        ar: 14.99,
        kedvezmeny: 10,
    },
];

const Csomagok = () => {
    const [selectedPackage, setSelectedPackage] = React.useState(null);
    const [statusz, setStatusz] = React.useState('nincs_fizetve');
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');

    return (
        <div className="csomagok-kontener">
            <FelsoNav csomagSearch={true} />
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
                        <button onClick={() => setSelectedPackage(csomag)}>
                            Előfizetés
                        </button>
                    </li>
                ))}
            </ul>
            {selectedPackage && (
                <PaymentProcess
                    packageData={selectedPackage}
                    setStatusz={setStatusz}
                />
            )}
        </div>
    );
};

export default Csomagok;
