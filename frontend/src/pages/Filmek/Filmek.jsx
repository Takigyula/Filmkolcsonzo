import React, { useContext, useEffect, useState } from 'react';
import FelsoNav from '../../components/Navbar/Navbar';
import { FilmContext } from '../../Context/Filmcontext';
import { KategoriaContext } from '../../Context/KategoriaContext';
import Kategoria from '../Kategoria/Kategoria';

const Filmek = () => {
    const { kiFilmek } = useContext(FilmContext);
    const { kategoria, setKategoriaFilmek } = useContext(KategoriaContext);
    const [filmek, setFilmek] = useState([]);
    const [selectedFilmId, setSelectedFilmId] = useState(null);

    useEffect(() => {
        // console.log(kategoria);
        console.log('Kifilmek: ', kiFilmek);
        const statusz = localStorage.getItem('statusz');
        const filmleker = async () => {
            if (kiFilmek.length === 0) {
                const response = await fetch(
                    'http://localhost:3500/api/cinema/filmek/films'
                );

                if (response.ok) {
                    let result = await response.json();
                    // console.log(result);
                    let nezhetoFilmek = statusz
                        ? result.filmek.filter((elem) =>
                              elem.statuszok.includes(statusz)
                          )
                        : result.filmek;
                    // console.log(nezhetoFilmek);
                    const kategoriaFilmek = nezhetoFilmek.filter((elem) => {
                        if (kategoria !== 'Minden') {
                            return elem.kategoriak.includes(kategoria);
                        } else {
                            return true;
                        }
                    });
                    setKategoriaFilmek(kategoriaFilmek);
                    //console.log(kategoriaFilmek);
                    let szelesseg = window.innerWidth;
                    console.log(szelesseg);
                    // console.log(szelesseg.slice(0, -2));
                    let homeContainer = document.querySelector(
                        '.filmek-home-container'
                    );

                    let i = Math.ceil(kategoriaFilmek.length / 6);
                    if (szelesseg < 600) {
                        i = kategoriaFilmek.length;
                        homeContainer.style.height = `${i * 320 + 1000}px`;
                    } else if (szelesseg < 1000) {
                        i = Math.ceil(kategoriaFilmek.length / 2);
                        homeContainer.style.height = `${i * 320 + 800}px`;
                    } else if (szelesseg < 1500) {
                        i = Math.ceil(kategoriaFilmek.length / 4);
                        homeContainer.style.height = `${i * 320 + 800}px`;
                    } else {
                        homeContainer.style.height = `${i * 320 + 800}px`;
                    }
                    // let i = Math.ceil(kategoriaFilmek.length / 6);
                    // let homeContainer = document.querySelector(
                    //     '.filmek-home-container'
                    // );
                    // homeContainer.style.height = `${i * 250 + 1000}px`;

                    setFilmek(kategoriaFilmek);
                }
            } else {
                // let szelesseg = window.innerWidth;
                // console.log(szelesseg);
                // // console.log(szelesseg.slice(0, -2));
                // let homeContainer = document.querySelector(
                //     '.filmek-home-container'
                // );
                // let i = Math.ceil(kiFilmek.length / 6);
                // if (szelesseg < 600) {
                //     i = kiFilmek.length;
                //     homeContainer.style.height = `${i * 320 + 1000}px`;
                // } else if (szelesseg < 1000) {
                //     i = Math.ceil(kiFilmek.length / 2);
                //     homeContainer.style.height = `${i * 320 + 800}px`;
                // } else if (szelesseg < 1500) {
                //     i = Math.ceil(kiFilmek.length / 4);
                //     homeContainer.style.height = `${i * 320 + 800}px`;
                // }
                // let i = Math.ceil(kiFilmek.length / 6);
                // let homeContainer = document.querySelector(
                //     '.filmek-home-container'
                // );
                // homeContainer.style.height = `${i * 250 + 1000}px`;

                const kategoriaFilmek = kiFilmek.filter((elem) => {
                    if (kategoria !== 'Minden') {
                        return elem.kategoriak.includes(kategoria);
                    } else {
                        return true;
                    }
                });
                setKategoriaFilmek(kategoriaFilmek);

                setFilmek(kategoriaFilmek);
                let szelesseg = window.innerWidth;
                console.log(szelesseg);
                console.log(kategoriaFilmek.length);
                let homeContainer = document.querySelector(
                    '.filmek-home-container'
                );
                let i = kategoriaFilmek.length;
                if (szelesseg < 600) {
                    if (i < 2) {
                        homeContainer.style.height = `${2 * 320 + 800}px`;
                    } else {
                        homeContainer.style.height = `${i * 320 + 1000}px`;
                    }
                } else if (szelesseg < 1000) {
                    let j = Math.ceil(kategoriaFilmek.length / 2);
                    if (i < 3) {
                        homeContainer.style.height = `${2 * 320 + 800}px`;
                    } else {
                        homeContainer.style.height = `${j * 320 + 800}px`;
                    }
                } else if (szelesseg < 1500) {
                    let j = Math.ceil(kategoriaFilmek.length / 4);
                    if (i < 5) {
                        homeContainer.style.height = `${1.5 * 320 + 800}px`;
                    } else {
                        homeContainer.style.height = `${j * 320 + 800}px`;
                    }
                } else {
                    let j = Math.ceil(kategoriaFilmek.length / 6);
                    if (i < 7) {
                        homeContainer.style.height = `${2 * 320 + 800}px`;
                    } else {
                        homeContainer.style.height = `${j * 320 + 800}px`;
                    }
                }
            }
        };
        // const filmleker = async () => {
        //     const response = await fetch(
        //         'http://localhost:3500/api/cinema/filmek/films'
        //     );

        //     if (response.ok) {
        //         let result = await response.json();
        //         // console.log(result);
        //         let nezhetoFilmek = statusz
        //             ? result.filmek.filter((elem) =>
        //                   elem.statuszok.includes(statusz)
        //               )
        //             : result.filmek;
        //         // console.log(nezhetoFilmek);
        //         const kategoriaFilmek = nezhetoFilmek.filter((elem) => {
        //             if (kategoria !== 'Minden') {
        //                 return elem.kategoriak.includes(kategoria);
        //             } else {
        //                 return true;
        //             }
        //         });
        //         setKategoriaFilmek(kategoriaFilmek);
        //         //console.log(kategoriaFilmek);

        //         let i = Math.ceil(result.filmek.length / 6);
        //         let homeContainer = document.querySelector(
        //             '.filmek-home-container'
        //         );
        //         homeContainer.style.height = `${i * 250 + 1000}px`;

        //         if (kiFilmek && kiFilmek.length > 0) setFilmek(kiFilmek);
        //         // else setFilmek(nezhetoFilmek);
        //         else setFilmek(kategoriaFilmek);
        //     }
        // };

        filmleker();
    }, [kiFilmek, kategoria]);

    const betolt = (index) => {
        let szelesseg = window.innerWidth;
        console.log(szelesseg);
        // console.log(szelesseg.slice(0, -2));
        let homeContainer = document.querySelector('.filmek-home-container');

        let i = Math.ceil(filmek.length / 6);
        if (szelesseg < 600) {
            i = filmek.length;
            homeContainer.style.height = `${i * 320 + 1000}px`;
        } else if (szelesseg < 1000) {
            i = Math.ceil(filmek.length / 2);
            homeContainer.style.height = `${i * 320 + 800}px`;
        } else if (szelesseg < 1500) {
            i = Math.ceil(filmek.length / 4);
            homeContainer.style.height = `${i * 320 + 800}px`;
        } else {
            homeContainer.style.height = `${i * 320 + 800}px`;
        }

        console.log(i);

        homeContainer.style.backgroundImage = `url('/images/${filmek[index].plakat}')`;
        // Additional logic for displaying film details...

        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');
        let sliderInfoRaiting = document.querySelector('.slider-raiting');

        sliderInfoImg.src = `/images/${filmek[index].plakat}`;
        sliderInfoKategoria.innerText = filmek[index].kategoria;
        sliderInfoCim.innerText = filmek[index].cim;

        let thumbImg = document.querySelectorAll('.thumb-img');
        thumbImg[index].style.border = '3px solid red';

        let csillagok = '';

        for (let i = 0; i < filmek[index].stars; i++) {
            csillagok += '*';
        }
        console.log(filmek[index]);

        sliderInfoRaiting.innerText = csillagok;

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
            <FelsoNav filmekSearch={true} />

            <div className="slider-container">
                <Kategoria />
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
                                    <p className="slider-raiting"></p>
                                    <p className="slider-category">
                                        <span className="category">
                                            Kategória : &nbsp;
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
                                        <div className="thumb-title">
                                            {value.cim}
                                        </div>
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
