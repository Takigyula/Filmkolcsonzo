import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './Egyedi.css';
import FelsoNav from '../../components/Navbar/Navbar';
import Telicsillag from './telicsillag.png';
import Urescsillag from './urescsillag.png';

const Egyedi = () => {
    const { id } = useParams();
    const [film, setFilm] = useState({});
    const [isSeries, setIsSeries] = useState(false); // Új állapot a sorozat ellenőrzéséhez

    useEffect(() => {
        const leker = async () => {
            // Először próbáljuk lekérni a filmeket
            let response = await fetch(
                'http://localhost:3500/api/cinema/filmek/films'
            );

            if (response.ok) {
                let result = await response.json();
                let egyediFilm = result.filmek.find((film) => film._id === id);

                if (egyediFilm) {
                    // Ha találtunk filmet, beállítjuk az állapotokat
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
        let csillagok = document.querySelectorAll('.ertekeles');
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

    const szavazas = () => {
        let csillagok = document.querySelectorAll('.ertekeles');
        let stars = film.stars;
        let szam = 0;

        for (let i = 0; i < csillagok.length; i++) {
            if (String(csillagok[i].src).includes('teli')) {
                szam++;
            }
        }

        stars += szam;

        console.log(stars);
    };

    return (
        <div className="egyedi">
            <FelsoNav />
            <div className="egyedi-kulso">
                <div className="film-info">
                    {/* Ha sorozat, akkor a sorozat nevét jelenítjük meg, különben a film címét */}
                    <h1 className="film-title">
                        {isSeries ? `${film.cim}` : ` ${film.cim}`}
                    </h1>
                    <hr />
                    <img
                        src={`/images/${film.plakat}`}
                        alt=""
                        className="film-poster"
                    />
                    <p className="film-description">{film.leiras}</p>
                </div>
                <div className="egyedi-tartalom">
                    <p className="film-szereplok">{film.szereplok}</p>
                    <p className="film-video">
                        {/* <iframe idth="420" height="315" src={film.trailer} allowfullscreen /> */}
                        {film.trailer}
                        {/* <YouTube /> */}
                        <div class="ratio ratio-16x9">
                            <iframe
                                src={film.trailer}
                                title="Trailer"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </p>
                    <p
                        className="csillag-ertekeles"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        Értékelés:
                        <span onClick={() => atvalt(1)}>
                            <img
                                className="ertekeles"
                                src={Urescsillag}
                            />
                        </span>
                        <span onClick={() => atvalt(2)}>
                            <img
                                className="ertekeles"
                                src={Urescsillag}
                            />
                        </span>
                        <span onClick={() => atvalt(3)}>
                            <img
                                className="ertekeles"
                                src={Urescsillag}
                            />
                        </span>
                        <span onClick={() => atvalt(4)}>
                            <img
                                className="ertekeles"
                                src={Urescsillag}
                            />
                        </span>
                        <span onClick={() => atvalt(5)}>
                            <img
                                className="ertekeles"
                                src={Urescsillag}
                            />
                        </span>
                        <input
                            type="submit"
                            value="Szavazás"
                            style={{
                                height: '200px',
                                width: '450px',
                                fontSize: '80px',
                            }}
                            onClick={szavazas}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Egyedi;
