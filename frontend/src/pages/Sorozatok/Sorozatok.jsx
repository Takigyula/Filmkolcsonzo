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
                let i = Math.ceil(result.sorozatok.length / 6);
                let homeContainer = document.querySelector(
                    '.sorozat-home-container'
                );
                homeContainer.style.height = `${i * 200 + 1000}px`;
                if (kiSorozatok && kiSorozatok.length > 0)
                    setSorozatok(kiSorozatok);
                else setSorozatok(nezhetoSorozatok);
            }
        };

        sorozatleker();
    }, [kiSorozatok]);

    const betolt = (index) => {
        console.log(sorozatok.length);
        let i = Math.ceil(sorozatok.length / 6);
        console.log(i * 250 + 1000);
        let homeContainer = document.querySelector('.sorozat-home-container');
        homeContainer.style.backgroundImage = `url('/images/${sorozatok[index].plakat}')`;
        homeContainer.style.height = `${i * 250 + 1000}px`;

        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');

        sliderInfoImg.src = `/images/${sorozatok[index].plakat}`;
        sliderInfoKategoria.innerText = sorozatok[index].kategoria;
        sliderInfoCim.innerText = sorozatok[index].cim;

        let thumbImg = document.querySelectorAll('.thumb-img');
        thumbImg[index].style.border = '3px solid red';

        // A kiválasztott sorozat azonosítójának tárolása
        setSelectedSorozatId(sorozatok[index]._id);
    };

    const leker = () => {
        if (selectedSorozatId) {
            window.location.href = `/egyedi/${selectedSorozatId}`;
        } else {
            window.location.href = `/egyedi/678519e1256d101fad46a800`;
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
                                    <p className="slider-raiting">*****</p>
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
