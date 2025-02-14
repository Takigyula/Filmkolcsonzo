import React from 'react';

const PaymentProcess = ({ packageData, setStatusz }) => {
    console.log(packageData);

    const handlePayment = async () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId);
        try {
            const response = await fetch(
                `http://localhost:3500/api/cinema/nezok/statusz/${userId}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ statusz: packageData.nev }),
                }
            );

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

export default PaymentProcess;
