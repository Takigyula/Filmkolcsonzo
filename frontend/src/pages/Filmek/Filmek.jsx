import React, { useEffect, useState } from 'react';
import FelsoNav from '../../components/Navbar/Navbar';

const Filmek = () => {
    const [filmek, setFilmek] = useState([]);
    const [selectedFilmId, setSelectedFilmId] = useState(null); // Új állapot a kiválasztott film azonosítójának tárolására
    const [selectedFilmIndex, setSelectedFilmIndex] = useState(0); // Kiválasztott film indexe

    useEffect(() => {
        const filmleker = async () => {
            const response = await fetch(
                'http://localhost:3500/api/cinema/filmek/films'
            );

            if (response.ok) {
                let result = await response.json();
                setFilmek(result.filmek);
                let i = Math.ceil(result.filmek.length / 6);
                let homeContainer = document.querySelector('.filmek-home-container');
                homeContainer.style.height = `${i * 200 + 1000}px`;

                // Automatikusan betölti az első filmet
                if (result.filmek.length > 0) {
                    setSelectedFilmIndex(0); // Az első film indexe 0
                    betolt(0); // Az első film betöltése
                }
            }
        };

        filmleker();
    }, []);

    const betolt = (index) => {
        if (filmek.length === 0) return; // Ellenőrizzük, hogy van-e film

        let homeContainer = document.querySelector('.filmek-home-container');
        homeContainer.style.backgroundImage = `url('/images/${filmek[index].plakat}')`;
        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');

        sliderInfoImg.src = `/images/${filmek[index].plakat}`;
        sliderInfoKategoria.innerText = filmek[index].kategoria;
        sliderInfoCim.innerText = filmek[index].cim;

        let thumbImg = document.querySelectorAll('.thumb-img');
        if (thumbImg[selectedFilmIndex]) {
            thumbImg[selectedFilmIndex].style.border = 'none'; // Eltávolítjuk a korábbi film keretét
        }
        thumbImg[index].style.border = '3px solid red'; // Az új film kerete

        // A kiválasztott film azonosítójának tárolása
        setSelectedFilmId(filmek[index]._id);
        setSelectedFilmIndex(index); // Frissítjük a kiválasztott film indexét
    };

    const leker = () => {
        if (selectedFilmId) {
            window.location.href = `/egyedi/${selectedFilmId}`;
        }
    };

    const szinez = (index) => {
        let thumbImg = document.querySelectorAll('.thumb-img');
        thumbImg[index].style.border = '3px solid orange';
        thumbImg[index].style.height = '210px';
        thumbImg[index].style.width = '210px';
        thumbImg[index].style.transform = 'height width 1s';
    };

    const torol = (index) => {
        let thumbImg = document.querySelectorAll('.thumb-img');
        thumbImg[index].style.border = 'none';
        thumbImg[index].style.height = '200px';
        thumbImg[index].style.width = '200px';
        thumbImg[index].style.transform = 'height width 1s';
    };

    return (
        <div className="filmek-home-container">
            <FelsoNav />
            <div className="slider-container">
                <div className="filmek-slider-info-container">
                    <div className="infoWrapper">
                        <div className="slider-info">
                            <img
                                className="info-img"
                                src={filmek.length > 0 ? `/images/${filmek[selectedFilmIndex].plakat}` : "/images/default.jpg"} // Alapértelmezett kép
                                alt=""
                            />
                            <div className="slider-raitings">
                                <p className="slider-raiting">*****</p>
                                <p className="slider-category">
                                    <span className="category">Kategória</span>
                                    <span className="slider-tipus">
                                        Filmek
                                    </span>
                                </p>
                            </div>
                        </div>
                        <info className="slider-title">{filmek.length > 0 ? filmek[selectedFilmIndex].cim : "Film Cím"}</info>
                    </div>
                    <button className="slider-btn" onClick={leker}>
                        Részletek
                    </button>
                </div>
                <div className="sliderThumbs-container">
                    {filmek.map((value, index) => (
                        <div className="sliderThumbs" key={index}>
                            <div className="film-sliderThumbs-img">
                                <img
                                    className="thumb-img"
                                    src={`/images/${value.plakat}`}
                                    onClick={() => betolt(index)}
                                    onMouseEnter={() => szinez(index)}
                                    onMouseLeave={() => torol(index)}
                                />
                            </div>
                            <div className="thumb-title">{value.cim}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filmek;