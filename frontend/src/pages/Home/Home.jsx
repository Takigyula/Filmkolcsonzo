import { useEffect, useState } from 'react';
// import './Home.css';
import FelsoNav from '../../components/Navbar/Navbar';
// import Imagesslider from '../../components/Imagesslider/Imagesslider';

const Home = () => {
    const [selectedId, setSelectedId] = useState(null);

    const filmek = [
        {
            _id: '67835ebb82727553786771f0',
            cim: 'Deadpool',
            kep: '/images/deadpool.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Spiderman',
            kep: '/images/spiderman.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Top Gun',
            kep: '/images/topgun.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Sötét lovag',
            kep: '/images/sotetlovag.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Prison Break',
            kep: '/images/PrisonBreak.jpg',
            kategoria: 'sorozatok',
        },
        {
            cim: 'The Nun',
            kep: '/images/thenun.jpg',
            kategoria: 'sorozatok',
        },
        {
            cim: 'Vikings',
            kep: '/images/Vikings.jpg',
            kategoria: 'sorozatok',
        },
        {
            cim: 'Csernobil',
            kep: '/images/chernobyl.jpg',
            kategoria: 'sorozatok',
        },
    ];

    const betolt = (index) => {
        let i = Math.ceil(filmek.length / 4);
        console.log(i);
        let homeContainer = document.querySelector('.home-container');
        homeContainer.style.backgroundImage = `url('${filmek[index].kep}')`;
        homeContainer.style.height = `${i * 300 + 800}px`;

        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');

        sliderInfoImg.src = filmek[index].kep;
        sliderInfoKategoria.innerText = filmek[index].kategoria;
        sliderInfoCim.innerText = filmek[index].cim;

        let thumbImg = document.querySelectorAll('.thumb-img');
        thumbImg[index].style.border = '3px solid red';

        setSelectedId(filmek[index]._id);
    };

    const leker = () => {
        if (selectedId) {
            window.location.href = `/egyedi/${selectedId}`;
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
        <div className="home-container">
            <FelsoNav />

            <div className="home-slider-container">
                <div className="home-slider-info-container">
                    <div className="infoWrapper">
                        <div className="home-slider-info">
                            <img
                                className="info-img"
                                src="../../public/images/deadpool.jpg"
                                alt=""
                            />
                            <div className="home-slider-raitings">
                                <p className="slider-raiting">*****</p>
                                <p className="slider-category">
                                    <span className="category">Kategória</span>
                                    <span className="slider-tipus">Filmek</span>
                                </p>
                            </div>
                            <info className="slider-title">Deadpool</info>
                            <button
                                className="slider-btn"
                                onClick={leker}
                            >
                                Részletek
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home-sliderThumbs-container">
                    {filmek.map((value, index) => (
                        <div
                            className="sliderThumbs"
                            key={index}
                        >
                            <div className="sliderThumbs-img">
                                <img
                                    className="thumb-img"
                                    src={value.kep}
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

export default Home;
