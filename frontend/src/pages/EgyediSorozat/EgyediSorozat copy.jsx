import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './Egyedi.css';
import FelsoNav from '../../components/Navbar/Navbar';
import Telicsillag from './telicsillag.png';
import Urescsillag from './urescsillag.png';
import BelepContext from '../../utils/LoginContext';

const EgyediSorozat = () => {
    const { id } = useParams();
    const { getBelep } = useContext(BelepContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [film, setFilm] = useState({});
    const [szereplok, setSzereplok] = useState([]);
    const [ertekelt, setErtekelt] = useState(true);
    const [isSeries, setIsSeries] = useState(false); // Új állapot a sorozat ellenőrzéséhez

    useEffect(() => {
        console.log(ertekelt);

        const leker = async () => {
            // Először próbáljuk lekérni a filmeket
            setIsLoggedIn(getBelep());
            let response = await fetch(
                'http://localhost:3500/api/cinema/filmek/films'
            );

            if (response.ok) {
                console.log(getBelep());
                let result = await response.json();
                let egyediFilm = result.filmek.find((film) => film._id === id);

                if (getBelep) {
                    let userId = String(
                        JSON.parse(localStorage.getItem('user'))._id
                    );
                    console.log(userId);
                    console.log(egyediFilm.ertekelok);
                    console.log(egyediFilm.ertekelok.includes(userId));
                    if (egyediFilm.ertekelok.includes(userId)) {
                        setErtekelt(false);
                    }
                }

                if (egyediFilm) {
                    // Ha találtunk filmet, beállítjuk az állapotokat
                    let cast = egyediFilm.szereplok;
                    console.log(cast.split(','));
                    setSzereplok(cast.split(','));

                    setFilm(egyediFilm);
                    setIsSeries(egyediFilm.type === 'series');

                    // Háttérkép beállítása
                    // let egyediKontener = document.querySelector('.egyedi-container');
                    // egyediKontener.style.backgroundImage = `url('/images/${egyediFilm.plakat}')`;
                } else {
                    // Ha nem találtunk filmet, próbáljuk lekérni a sorozatokat
                    response = await fetch(
                        'http://localhost:3500/api/cinema/sorozatok/series'
                    );

                    if (response.ok) {
                        result = await response.json();
                        let egyediSorozat = result.sorozatok.find(
                            (sorozat) => sorozat._id === id
                        );

                        if (egyediSorozat) {
                            // Ha találtunk sorozatot, beállítjuk az állapotokat
                            setFilm(egyediSorozat);
                            setIsSeries(true);

                            // Háttérkép beállítása
                            let egyediKontener =
                                document.querySelector('.egyedi-container');
                            egyediKontener.style.backgroundImage = `url('/images/${egyediSorozat.plakat}')`;
                        }
                    }
                }
            }
        };

        leker();
    }, [id]);

    const atvalt = (szam) => {
        let csillagok = document.querySelectorAll('.ertekeles-csillag');
        if (szam === 1) {
            csillagok[szam - 1].src = Telicsillag;
        } else if (szam === 2) {
            csillagok[szam - 1].src = Telicsillag;
        } else if (szam === 3) {
            csillagok[szam - 1].src = Telicsillag;
        } else if (szam === 4) {
            csillagok[szam - 1].src = Telicsillag;
        } else if (szam === 5) {
            csillagok[szam - 1].src = Telicsillag;
        }
    };

    const szavazas = async () => {
        let csillagok = document.querySelectorAll('.ertekeles-csillag');
        let szam = 0;

        for (let i = 0; i < csillagok.length; i++) {
            if (String(csillagok[i].src).includes('teli')) {
                szam++;
            }
        }

        if (isLoggedIn) {
            // window.alert('Sikeresen értékelted a filmet!');
            let userId = JSON.parse(localStorage.getItem('user'))._id;
            console.log(userId);
            const response = await fetch(
                `http://localhost:3500/api/cinema/csillagmodosit/${film._id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ szam, userId }),
                }
            );

            let valasz = await response.json();
            console.log(valasz);

            if (response.ok) {
                window.alert(valasz.msg);
                window.location.reload();
            } else {
                window.alert(valasz.msg);
                setErtekelt(false);
                window.location.reload();
            }
        } else {
            window.alert('A szavazáshoz be kell jelentkezned!');
        }

        console.log(szam);
    };

    return (
        <div className="egyedi-kontener">
            <FelsoNav egyediSearch={true} />

            <div className="egyedi-kulso-kontener">
                <div className="egyedi-film-info">
                    {/* Ha sorozat, akkor a sorozat nevét jelenítjük meg, különben a film címét */}
                    <h1 className="film-title">
                        {isSeries ? `${film.cim}` : ` ${film.cim}`}
                    </h1>
                    <hr />
                    <div className="egyedi-film-info-kep">
                        <img
                            src={`/images/${film.plakat}`}
                            alt=""
                            className="film-poster"
                        />
                    </div>
                    <p className="film-description">{film.leiras}</p>
                </div>
                <div className="film-egyedi-tartalom">
                    <div className="film-szereplok">
                        <h3>Szereplők: </h3>
                        <p>{film.szereplok}</p>
                    </div>
                    <div className="film-video">
                        {/* <iframe idth="420" height="315" src={film.trailer} allowfullscreen /> */}
                        {/* {film.trailer} */}
                        {/* <YouTube /> */}
                        <div className="ratio ratio-16x9">
                            <iframe
                                src={film.trailer}
                                title="Trailer"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    {ertekelt ? (
                        <div className="csillag-ertekeles">
                            <div className="csillag-ertekeles-szoveg">
                                <span>Értékelés:</span>
                                <span
                                    onClick={() => atvalt(1)}
                                    className="ertekeles"
                                >
                                    <img
                                        src={Urescsillag}
                                        className="ertekeles-csillag"
                                    />
                                </span>
                                <span
                                    onClick={() => atvalt(2)}
                                    className="ertekeles"
                                >
                                    <img
                                        src={Urescsillag}
                                        className="ertekeles-csillag"
                                    />
                                </span>
                                <span
                                    onClick={() => atvalt(3)}
                                    className="ertekeles"
                                >
                                    <img
                                        src={Urescsillag}
                                        className="ertekeles-csillag"
                                    />
                                </span>
                                <span
                                    onClick={() => atvalt(4)}
                                    className="ertekeles"
                                >
                                    <img
                                        src={Urescsillag}
                                        className="ertekeles-csillag"
                                    />
                                </span>
                                <span
                                    onClick={() => atvalt(5)}
                                    className="ertekeles"
                                >
                                    <img
                                        src={Urescsillag}
                                        className="ertekeles-csillag"
                                    />
                                </span>
                            </div>
                            <div className="csillag-ertekeles-gomb">
                                <input
                                    type="submit"
                                    value="Szavazás"
                                    onClick={szavazas}
                                />
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EgyediSorozat;
