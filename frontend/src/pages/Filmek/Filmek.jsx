import React, { useEffect, useState } from 'react';
import FelsoNav from '../../components/Navbar/Navbar';

const Filmek = () => {
    const [filmek, setFilmek] = useState([]);
    useEffect(() => {
        const filmleker = async () => {
            // console.log('Hello');
            const response = await fetch(
                'http://localhost:3500/api/cinema/filmek/films'
            );

            if (response.ok) {
                let result = await response.json();
                console.log(result.filmek);
                let i = Math.ceil(result.filmek.length / 6);
                console.log(i * 200 + 1000);
                let homeContainer = document.querySelector(
                    '.filmek-home-container'
                );
                homeContainer.style.height = `${i * 200 + 1000}px`;

                setFilmek(result.filmek);
                let sliderButton = document.querySelector('.slider-btn');

                sliderButton.addEventListener('click', () => {
                    leker(result.filmek[3]._id)
                });
            }
        };

        filmleker();
    }, []);

    let i = Math.ceil(filmek.length / 6);
    console.log(i * 200 + 1000);

    const betolt = (index) => {
        console.log(filmek);

        let homeContainer = document.querySelector('.filmek-home-container');
        homeContainer.style.backgroundImage = `url('/images/${filmek[index].plakat}')`;
        homeContainer.style.height = `${i * 200 + 1000}px`;

        let sliderInfoImg = document.querySelector('.info-img');
        let sliderInfoKategoria = document.querySelector('.slider-tipus');
        let sliderInfoCim = document.querySelector('.slider-title');
        let sliderButton = document.querySelector('.slider-btn');

        sliderButton.addEventListener('click', () => {
            console.log(filmek[index]._id);
            leker(filmek[index]._id)
        });

        sliderInfoImg.src = `/images/${filmek[index].plakat}`;
        sliderInfoKategoria.innerText = filmek[index].kategoria;
        sliderInfoCim.innerText = filmek[index].cim;

        let thumbImg = document.querySelectorAll('.thumb-img');
        thumbImg[index].style.border = '3px solid red';
    };

    function leker(id) {
        window.location.href = `/egyedi/${id}`;
    }

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
            <div className="slider-container">
                <div className="slider-info-container">
                    <div className="infoWrapper">
                        <div className="slider-info">
                            <img
                                className="info-img"
                                src="/images/deadpool.jpg"
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
                                    src={`/images/${value.plakat}`}
                                    onClick={() => betolt(index)}
                                    onMouseEnter={() => szinez(index)}
                                    onMouseLeave={() => torol(index)}
                                />
                                <div className="thumb-title">{value.cim}</div>
                            </div>
                            
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
