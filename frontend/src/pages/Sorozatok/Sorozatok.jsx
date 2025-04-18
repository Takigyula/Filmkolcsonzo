import { useEffect, useState, useContext } from 'react';
import FelsoNav from '../../components/Navbar/Navbar';
import { SorozatContext } from '../../Context/SorozatContext.jsx';

const Sorozatok = () => {
    const { kiSorozatok } = useContext(SorozatContext);
    const [sorozatok, setSorozatok] = useState([]);
    const [selectedSorozatId, setSelectedSorozatId] = useState(null); // Új állapot a kiválasztott sorozat azonosítójának tárolására

    useEffect(() => {
        console.log(kiSorozatok);
        const statusz = localStorage.getItem('statusz');
        const sorozatleker = async () => {
            const response = await fetch(
                'http://localhost:3500/api/cinema/sorozatok/series'
            );

            if (response.ok) {
                let result = await response.json();
                console.log(result);
                let nezhetoSorozatok = statusz
                    ? result.sorozatok.filter((elem) =>
                          elem.statuszok.includes(statusz)
                      )
                    : result.sorozatok;
                console.log(result.sorozatok.length);
                if (kiSorozatok && kiSorozatok.length > 0)
                    setSorozatok(kiSorozatok);
                else setSorozatok(nezhetoSorozatok);
                let szelesseg = window.innerWidth;

                let i = Math.ceil(result.sorozatok.length / 6);
                let homeContainer = document.querySelector(
                    '.sorozat-home-container'
                );
                if (szelesseg < 600) {
                    i = result.sorozatok.length;
                    console.log(i);
                    if (i < 2) {
                        homeContainer.style.height = `${2 * 320 + 800}px`;
                    } else {
                        homeContainer.style.height = `${i * 320 + 1000}px`;
                    }
                } else if (szelesseg < 1000) {
                    let j = Math.ceil(result.sorozatok.length / 2);
                    console.log(i);

                    if (i < 3) {
                        homeContainer.style.height = `${2 * 320 + 800}px`;
                    } else {
                        homeContainer.style.height = `${j * 320 + 800}px`;
                    }
                } else if (szelesseg < 1500) {
                    console.log(i);
                    let j = Math.ceil(result.sorozatok.length / 4);
                    homeContainer.style.height = `${j * 320 + 800}px`;
                    // if (i < 5) {
                    //     homeContainer.style.height = `${1.5 * 320 + 800}px`;
                    // } else {
                    // }
                } else {
                    console.log(i);
                    let j = Math.ceil(result.sorozatok.length / 6);
                    console.log(j);
                    homeContainer.style.height = `${j * 320 + 800}px`;
                    // if (i < 7) {
                    //     homeContainer.style.height = `${2 * 320 + 800}px`;
                    // } else {
                    // }
                }
            }
        };

        sorozatleker();
    }, [kiSorozatok]);

    const betolt = (index) => {
        let szelesseg = window.innerWidth;
        console.log(sorozatok.length);
        let homeContainer = document.querySelector('.sorozat-home-container');

        let i = Math.ceil(sorozatok.length / 6);
        if (szelesseg < 600) {
            console.log(i);
            i = sorozatok.length;
            homeContainer.style.height = `${i * 320 + 1000}px`;
        } else if (szelesseg < 1000) {
            console.log(i);
            i = Math.ceil(sorozatok.length / 2);
            homeContainer.style.height = `${i * 320 + 800}px`;
        } else if (szelesseg < 1500) {
            i = Math.ceil(sorozatok.length / 4);
            console.log(i);
            homeContainer.style.height = `${i * 320 + 800}px`;
        } else {
            console.log(i);
            homeContainer.style.height = `${i * 320 + 800}px`;
        }

        homeContainer.style.backgroundImage = `url('/images/${sorozatok[index].plakat}')`;
        // homeContainer.style.height = `${i * 250 + 1000}px`;

        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');
        let sliderInfoRaiting = document.querySelector('.slider-raiting');

        sliderInfoImg.src = `/images/${sorozatok[index].plakat}`;
        sliderInfoKategoria.innerText = sorozatok[index].kategoria;
        sliderInfoCim.innerText = sorozatok[index].cim;

        let thumbImg = document.querySelectorAll('.thumb-img');
        thumbImg[index].style.border = '3px solid red';

        let csillagok = '';

        for (let i = 0; i < sorozatok[index].stars; i++) {
            csillagok += '*';
        }
        console.log(sorozatok[index]);

        sliderInfoRaiting.innerText = csillagok;

        // A kiválasztott sorozat azonosítójának tárolása
        setSelectedSorozatId(sorozatok[index]._id);
    };

    const leker = () => {
        if (selectedSorozatId) {
            window.location.href = `/egyedisorozat/${selectedSorozatId}`;
        } else {
            window.location.href = `/egyedisorozat/678519e1256d101fad46a800`;
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
        <div className="sorozat-home-container">
            <FelsoNav sorozatokSearch={true} />
            <div className="slider-container">
                <div className="slider-info-container">
                    <div className="infoWrapper">
                        <div className="sorozatok-slider-container">
                            <div className="slider-info">
                                <img
                                    className="info-img"
                                    src="/images/brakingbad.jpg"
                                    alt=""
                                />
                                <div className="slider-raitings">
                                    <p className="slider-raiting"></p>
                                    <p className="slider-category">
                                        <span className="category">
                                            Kategória: &nbsp;
                                        </span>
                                        <span className="slider-tipus">
                                            Sorozatok
                                        </span>
                                    </p>
                                </div>
                                <info className="slider-title">
                                    Totál Szívás
                                </info>
                                <button
                                    className="slider-btn"
                                    onClick={leker}
                                >
                                    Részletek
                                </button>
                            </div>

                            <div className="sliderThumbs-container">
                                {sorozatok.map((value, index) => (
                                    <div
                                        className="sliderThumbs"
                                        key={index}
                                    >
                                        <div className="sorozat-sliderThumbs-img">
                                            <img
                                                className="thumb-img"
                                                src={`/images/${value.plakat}`}
                                                onClick={() => betolt(index)}
                                                onMouseEnter={() =>
                                                    szinez(index)
                                                }
                                                onMouseLeave={() =>
                                                    torol(index)
                                                }
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
        </div>
    );
};

export default Sorozatok;
