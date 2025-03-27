import { useEffect, useState } from 'react';
// import './Home.css';
import FelsoNav from '../../components/Navbar/Navbar';
// import Imagesslider from '../../components/Imagesslider/Imagesslider';

const Home = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [category, setCategory] = useState('Filmek');

    const filmek = [
        {
            _id: '67835ebb82727553786771f0',
            cim: 'Deadpool',
            kep: '/images/deadpool.jpg',
            kategoria: 'Filmek',
        },
        {
            id: '67bc7444e1818b61ff242748',
            cim: 'Spiderman',
            kep: '/images/spiderman.jpg',
            kategoria: 'Filmek',
        },
        {
            id: '67835a706f687bac4ac0689a',
            cim: 'Top Gun',
            kep: '/images/topgun.jpg',
            kategoria: 'Filmek',
        },
        {
            id: '67851436256d101fad46a7e6',
            cim: 'Sötét lovag',
            kep: '/images/sotetlovag.jpg',
            kategoria: 'Filmek',
        },
        {
            id: '678358f2f37449a204814781',
            cim: 'Prison Break',
            kep: '/images/PrisonBreak.jpg',
            kategoria: 'Sorozatok',
        },
        {
            id: '67851b55256d101fad46a812',
            cim: 'The Nun',
            kep: '/images/thenun.jpg',
            kategoria: 'Sorozatok',
        },
        {
            id: '67835a466f687bac4ac06896',
            cim: 'Vikings',
            kep: '/images/Vikings.jpg',
            kategoria: 'Sorozatok',
        },
        {
            id: '67835938f37449a204814783',
            cim: 'Csernobil',
            kep: '/images/chernobyl.jpg',
            kategoria: 'Sorozatok',
        },
        {
            id: '67e27a2824cb366cb83f1f9a',
            cim: 'Trónok harca',
            kep: '/images/tronokharca.jpg',
            kategoria: 'Sorozatok',
        },
        {
            id: '67d9b2ed090b3d0c91373839',
            cim: 'Peaky Blinders',
            kep: '/images/peakyblinders.jpg',
            kategoria: 'Sorozatok',
        },
        {
            id: '6787b883a49a844062cbfbdb',
            cim: 'Arcane',
            kep: '/images/arcane.jpg',
            kategoria: 'Sorozatok',
        },
        {
            id: '67d820dcf4265c3e74ca42cb',
            cim: 'Gran Turismo',
            kep: '/images/GranTurismo.jpg',
            kategoria: 'Filmek',
        },
        
    ];

    const betolt = (index) => {
        let szelesseg = window.innerWidth;
        console.log(szelesseg);
        // console.log(szelesseg.slice(0, -2));

        let i = Math.ceil(filmek.length / 4);
        console.log(i);
        if (szelesseg < 600) {
            i = filmek.length;
        } else if (szelesseg < 900) {
            i = Math.ceil(filmek.length / 2);
        }

        let homeContainer = document.querySelector('.home-container');
        homeContainer.style.backgroundImage = `url('${filmek[index].kep}')`;
        homeContainer.style.height = `${i * 300 + 650}px`;

        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');
        let sliderInfoRaiting = document.querySelector('.slider-raiting');

        sliderInfoImg.src = filmek[index].kep;
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

        setSelectedId(filmek[index].id);
        setCategory(filmek[index].kategoria);
    };

    const leker = () => {
        if (selectedId) {
            if (category === 'Filmek') {
                window.location.href = `/egyedi/${selectedId}`;
            } else {
                window.location.href = `/egyedisorozat/${selectedId}`;
            }
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
            <FelsoNav homeSearch={true} />

            <div className="home-slider-container">
                <div className="home-slider-info-container">
                    <div className="infoWrapper">
                        <div className="home-slider-info">
                            <img
                                className="info-img"
                                src="/images/deadpool.jpg"
                                alt=""
                            />
                            <div className="home-slider-raitings">
                                <p className="slider-raiting"></p>
                                <p className="slider-category">
                                    <span className="category">
                                        Kategória:{' '}
                                    </span>
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
                <div className="home-h3-sor">
                    <h3>Felkapott</h3>
                </div>
                <div className="home-sliderThumbs-container">
                    {filmek.map((value, index) => (
                        <div
                            className="home-sliderThumbs"
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
