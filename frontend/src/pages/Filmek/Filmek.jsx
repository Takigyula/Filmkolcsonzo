import React, { useEffect, useState } from 'react';
import FelsoNav from '../../components/Navbar/Navbar';

const Filmek = () => {
    const [filmek, setFilmek] = useState([]);
    useEffect(() => {
        const statusz = localStorage.getItem('statusz');
        const filmleker = async () => {
            const response = await fetch(
                'http://localhost:3500/api/cinema/filmek/films'
            );

            if (response.ok) {
                let result = await response.json();
                let nezhetoFilmek = statusz ? result.filmek.filter(elem => elem.statuszok.includes(statusz)) : result.filmek;
                setFilmek(nezhetoFilmek);
                let homeContainer = document.querySelector('.filmek-home-container');
                let i = Math.ceil(nezhetoFilmek.length / 6);
                homeContainer.style.height = `${i * 200 + 1000}px`;
            }
        };

        filmleker();
    }, []);

    const betolt = (index) => {
        let homeContainer = document.querySelector('.filmek-home-container');
        homeContainer.style.backgroundImage = `url('/images/${filmek[index].plakat}')`;
        // Additional logic for displaying film details...
    };

    return (
        <div className="filmek-home-container">
            <FelsoNav />
            <div className="slider-container">
                <div className="sliderThumbs-container">
                    {filmek.map((value, index) => (
                        <div className="sliderThumbs" key={index}>
                            <img
                                className="thumb-img"
                                src={`/images/${value.plakat}`}
                                onClick={() => betolt(index)}
                            />
                            <div className="thumb-title">{value.cim}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filmek;
