import React, { useEffect, useState } from 'react';
import FelsoNav from '../../components/Navbar/Navbar';

const Filmek = () => {
    const [filmek, setFilmek] = useState([]);
    const [selectedFilmId, setSelectedFilmId] = useState(null);

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
            <div className="filmek-slider-container">
            <div className="infoWrapper">
                        <div className="slider-info">
                            <img
                                className="info-img"
                                src="/images/brakingbad.jpg"
                                alt=""
                            />
                            <div className="slider-raitings">
                                <p className="slider-raiting">*****</p>
                                <p className="slider-category">
                                    <span className="category">Kategória</span>
                                    <span className="slider-tipus">
                                        Sorozatok
                                    </span>
                                </p>
                            </div>
                        </div>
                        <info className="slider-title">Deadpool</info>
                    </div>
                    <button className="slider-btn" onClick={leker}>
                        Részletek
                    </button>
                <div className="sliderThumbs-container">
                    {filmek.map((value, index) => (
                        <div className="sliderThumbs" key={index}>
                            <img
                                className="thumb-img"
                                src={`/images/${value.plakat}`}
                                onClick={() => betolt(index)}
                                nMouseEnter={() => szinez(index)}
                                    onMouseLeave={() => torol(index)}
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
