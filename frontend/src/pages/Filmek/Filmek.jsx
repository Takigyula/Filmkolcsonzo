import React, { useEffect, useState } from 'react';
import './Filmek.css';
import FelsoNav from '../../components/Navbar/Navbar';

const Filmek = () => {
    // const [filmek, setFilmek] = useState([]);
    useEffect(() => {
        const filmleker = async () => {
            // console.log('Hello');
            const response = await fetch(
                'http://localhost:3500/api/cinema/filmek/films'
            );

            if (response.ok) {
                let result = await response.json();
                // console.log(result.filmek);

                // setFilmek(result.filmek);
            }
        };

        filmleker();
    }, []);

    const filmek = [
        {
            cim: 'Oppenheimer',
            kep: '/images/Oppenheimer.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Wall street farkasai',
            kep: '/images/Wall street farkasai.jpg',
            kategoria: 'filmek,',
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
            kep: '/images/JohnWick.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Deadpool',
            kep: '/images/deadpool.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Pókverzum',
            kep: '/images/pokverzum.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Bosszuallok',
            kep: '/images/Bosszualok.jpg',
            kategoria: 'filmek',
        },
    ];

    const betolt = (index) => {
        let homeContainer = document.querySelector('.home-container');
        homeContainer.style.backgroundImage = `url('${filmek[index].kep}')`;

        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');

        sliderInfoImg.src = filmek[index].kep;
        sliderInfoKategoria.innerText = filmek[index].kategoria;
        sliderInfoCim.innerText = filmek[index].cim;

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
        <div className="home-container">
            <FelsoNav />
            <div className="slider-container">
                <div className="slider-info-container">
                    <div className="infoWrapper">
                        <div className="slider-info">
                            <img
                                className="info-img"
                                src="../../public/images/deadpool.jpg"
                                alt=""
                            />
                            <div className="slider-raitings">
                                <p className="slider-raiting">*****</p>
                                <p className="slider-category">
                                    <span className="category">Kategória</span>
                                    <span className="slider-tipus">Filmek</span>
                                </p>
                            </div>
                        </div>
                        <info className="slider-title">Deadpool</info>
                    </div>
                    <button className="slider-btn">Részletek</button>
                </div>
                <div className="sliderThumbs-container">
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

// return (
//     <div className="filmek-container">
//         <FelsoNav
//             filmekaktiv={true}
//             sorozatokaktiv={false}
//             loginaktiv={false}
//             registeraktiv={false}
//         />
//         <h1>Dejó</h1>
//         {filmek.map((film) => (
//             <div
//                 className="film-tarto"
//                 key={film._id}
//             >
//                 <h3>{film.cim}</h3>
//                 <img src={film.plakat} />
//             </div>
//         ))}
//     </div>

export default Filmek;
