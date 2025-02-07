import React, { useContext, useEffect, useState } from 'react';
import FelsoNav from '../../components/Navbar/Navbar';
import SearchBar from '../Searchbar/Searchbar';
import { FilmContext } from '../../Context/Filmcontext';

const Filmek = () => {
    const {kiFilmek} = useContext(FilmContext);
    const [filmek, setFilmek] = useState([]);
    const [selectedFilmId, setSelectedFilmId] = useState(null);

    useEffect(() => {
        console.log(kiFilmek);
        const statusz = localStorage.getItem('statusz');
        const filmleker = async () => {
            const response = await fetch(
                'http://localhost:3500/api/cinema/filmek/films'
            );

            if (response.ok) {
                let result = await response.json();
                console.log(result);
                let nezhetoFilmek = statusz
                    ? result.filmek.filter((elem) =>
                          elem.statuszok.includes(statusz)
                      )
                    : result.filmek;
                console.log(result.filmek.length);
                let i = Math.ceil(result.filmek.length / 6);
                let homeContainer = document.querySelector(
                    '.filmek-home-container'
                );
                homeContainer.style.height = `${i * 250 + 1000}px`;
                if (kiFilmek && kiFilmek.length > 0) setFilmek(kiFilmek);
                else setFilmek(nezhetoFilmek);
            }
        };

        filmleker();
    }, [kiFilmek]);

    const betolt = (index) => {
        let i = Math.ceil(filmek.length / 6);
        console.log(i * 250 + 1000);
        let homeContainer = document.querySelector('.filmek-home-container');
        homeContainer.style.backgroundImage = `url('/images/${filmek[index].plakat}')`;
        // Additional logic for displaying film details...
        homeContainer.style.height = `${i * 250 + 1000}px`;

        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');

        sliderInfoImg.src = `/images/${filmek[index].plakat}`;
        sliderInfoKategoria.innerText = filmek[index].kategoria;
        sliderInfoCim.innerText = filmek[index].cim;

        let thumbImg = document.querySelectorAll('.thumb-img');
        thumbImg[index].style.border = '3px solid red';

        // A kiválasztott sorozat azonosítójának tárolása
        setSelectedFilmId(filmek[index]._id);
    };

    const leker = () => {
        if (selectedFilmId) {
            window.location.href = `/egyedi/${selectedFilmId}`;
        } else {
            window.location.href = `/egyedi/67835ebb82727553786771f0`;
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
            <SearchBar />
            <div className="slider-container">
                <div className="slider-info-container">
                    <div className="infoWrapper">
                        <div className="filmek-slider-container">
                            <div className="slider-info">
                                <img
                                    className="info-img"
                                    src="/images/deadpool.jpg"
                                    alt=""
                                />
                                <div className="slider-raitings">
                                    <p className="slider-raiting">*****</p>
                                    <p className="slider-category">
                                        <span className="category">
                                            Kategória
                                        </span>
                                        <span className="slider-tipus">
                                            Filmek
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <info className="slider-title">Deadpool</info>
                            <button
                                className="slider-btn"
                                onClick={leker}
                            >
                                Részletek
                            </button>
                        </div>
                        <div className="sliderThumbs-container">
                            {filmek.map((value, index) => (
                                <div
                                    className="sliderThumbs"
                                    key={index}
                                >
                                    <div className="filmek-sliderThumbs-img">
                                        <img
                                            className="thumb-img"
                                            src={`/images/${value.plakat}`}
                                            onClick={() => betolt(index)}
                                            onMouseEnter={() => szinez(index)}
                                            onMouseLeave={() => torol(index)}
                                        />
                                    </div>
                                    <div className="thumb-title">
                                        {value.cim}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filmek;
