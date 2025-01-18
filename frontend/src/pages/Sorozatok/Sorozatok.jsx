import { useEffect, useState } from 'react';
// import './Home.css';
import FelsoNav from '../../components/Navbar/Navbar';
// import Imagesslider from '../../components/Imagesslider/Imagesslider';

const Sorozatok = () => {
    const [sorozatok, setSorozatok] = useState([]);
    useEffect(() => {
        const sorozatleker = async () => {
            const response = await fetch(
                'http://localhost:3500/api/cinema/sorozatok/series'
            );

            if (response.ok) {
                let result = await response.json();
                console.log(result.sorozatok);
                let i = Math.ceil(result.sorozatok.length / 6);
                console.log(i * 200 + 1000);
                let homeContainer = document.querySelector(
                    '.sorozat-home-container'
                );
                homeContainer.style.height = `${i * 200 + 1000}px`;

                setSorozatok(result.sorozatok);
            }
        };

        sorozatleker();
    }, []);

    const betolt = (index) => {
        let i = Math.ceil(sorozatok.length / 6);
        console.log(i * 200 + 1000);
        let homeContainer = document.querySelector('.sorozat-home-container');
        homeContainer.style.backgroundImage = `url('/images/${sorozatok[index].plakat}')`;
        homeContainer.style.height = `${i * 200 + 1000}px`;

        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');

        sliderInfoImg.src = `/images/${sorozatok[index].plakat}`;
        sliderInfoKategoria.innerText = sorozatok[index].kategoria;
        sliderInfoCim.innerText = sorozatok[index].cim;

        let thumbImg = document.querySelectorAll('.thumb-img');
        thumbImg[index].style.border = '3px solid red';
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
            <FelsoNav />
            <div className="slider-container">
                <div className="slider-info-container">
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
                        <info className="slider-title">Totál Szívás</info>
                    </div>
                    <button className="slider-btn">Részletek</button>
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
                                    onMouseEnter={() => szinez(index)}
                                    onMouseLeave={() => torol(index)}
                                />
                            </div>
                            <div className="thumb-title">{value.cim}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="home-main-container">
                <h1 id="csetflix">NextStream</h1>
            </div> */}
        </div>
    );
};

export default Sorozatok;
