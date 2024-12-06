import React, { useEffect, useState } from 'react';
import './Filmek.css';

const Filmek = () => {
    const [filmek, setFilmek] = useState([]);

    useEffect(() => {
        const filmleker = async () => {
            console.log('Hello');
            const response = await fetch(
                'http://localhost:3500/api/cinema/filmek/films'
            );

            if (response.ok) {
                let result = await response.json();
                console.log(result.filmek);

                setFilmek(result.filmek);
            }
        };

        filmleker();
    }, []);

    return (
        <div className="filmek-container">
            {filmek.map((film) => (
                <div
                    className="film-tarto"
                    key={film._id}
                >
                    <h3>{film.cim}</h3>
                    <img src={film.plakat} />
                </div>
            ))}
        </div>
    );
};

export default Filmek;
