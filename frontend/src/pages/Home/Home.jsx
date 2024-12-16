import { useEffect } from 'react';
// import './Home.css';
import FelsoNav from '../../components/Navbar/Navbar';
// import Imagesslider from '../../components/Imagesslider/Imagesslider';

const Home = () => {
    //   // Filmek adatainak szimulálása
    //   const movies = {
    //     trending: [
    //       { title: 'Movie 1', imgUrl: 'https://i.cdn29.hu/apix_collect_c/ngg_images/2306/19/a_vajak_the_witcher_175036_1_original_560x313_cover.jpg' },
    //       { title: 'Movie 2', imgUrl: 'https://www.justwatch.com/images/poster/301589704/s718/from.jpg' },
    //       { title: 'Movie 3', imgUrl: 'https://upload.wikimedia.org/wikipedia/hu/6/68/Fortune_hadm%C5%B1velet.jpg' },
    //       { title: 'Movie 4', imgUrl: 'https://m.media-amazon.com/images/S/pv-target-images/15e19b85511c34f3b2b3dc40f6fe7d62d553f955cf48bc6043dbe2439cd5621a.jpg' },
    //       { title: 'Movie 5', imgUrl: 'https://www.mafab.hu/static/2023/215/14/274034_1691152718.4816.jpg' },
    //       { title: 'Movie 6', imgUrl: 'https://media.themoviedb.org/t/p/w500/oKqNNTAMFlX6FwaxL6V7qV27ooG.jpg' },
    //       { title: 'Movie 7', imgUrl: 'https://m.media-amazon.com/images/M/MV5BOWJhYjdjNWEtMWFmNC00ZjNkLThlZGEtN2NkM2U3NTVmMjZkXkEyXkFqcGc@._V1_.jpg' },
    //       { title: 'Movie 8', imgUrl: 'https://resizing.flixster.com/suPMbIFPaMa4VWAM72eq76mjJ9g=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvYjRhYjdkZDQtZGE5OC00NTdmLWFiM2QtZTEzNDJcM2RkMGM1LmpwZw==' }
    //     ],
    //     topRated: [
    //       { title: 'Top Movie 1', imgUrl: 'https://m.media-amazon.com/images/M/MV5BYzM3ZTFmMTUtODAxNy00N2IxLWI2MGMtYTdmMDFhNmZkMDI3XkEyXkFqcGc@._V1_.jpg' },
    //       { title: 'Top Movie 2', imgUrl: 'https://img2.filmek.hu/original/roXSRnno9M6zDQIs1QAWx5F5KDR.jpg' },
    //       { title: 'Top Movie 3', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20iFsO9v7uRw5PfW_UMwGczKRvZ8G-n_zIw&s' },
    //       { title: 'Top Movie 4', imgUrl: 'https://lh5.googleusercontent.com/proxy/evyCd70ZKzDeHbgkoOBeZzVIfZ8qYwwEM-RxY4FC2aMo1OEpEUJsIveGUqylRd2rm1PI15Mvch8GaERxLGTfVwvxnQiweNSGc19BURuOovfi1AE' },
    //       { title: 'Top Movie 5', imgUrl: 'https://media.port.hu/images/001/152/122.jpg' },
    //       { title: 'Top Movie 6', imgUrl: 'https://filmtett.ro/resized/2023/04/filmsidebar_papa-ordoguzo-plakat.jpg' },
    //       { title: 'Top Movie 7', imgUrl: 'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaSWW48t0IluMnNMUonTWQgWcAlj8wyBOu2HYjiNTyy406d8vAGtfcUMq2M0qMGVSng0NUQQn5rP4QCE_ElHCt6M3F62W05Ksc7-Mo1OGv4rcu1vGBk9HaL5HPUR-AVB8MZXVg.jpg?r=488' },
    //     ],
    //     action: [
    //       { title: 'Action Movie 1', imgUrl: 'https://media.port.hu/images/001/569/360.webp' },
    //       { title: 'Action Movie 2', imgUrl: 'https://www.mafab.hu/static/2023/162/10/515811_1686557043.5039.jpg' },
    //       { title: 'Action Movie 3', imgUrl: 'https://m.media-amazon.com/images/S/pv-target-images/d67c22b7666dbb6b8b041c6f28d9f7184f5e0c905bd223088b029f3f2bf0c5a6.jpg' },
    //       { title: 'Action Movie 4', imgUrl: 'https://media.port.hu/images/001/586/066.webp' },
    //       { title: 'Action Movie 5', imgUrl: 'https://i.ytimg.com/vi/yUirUsoXHuA/hqdefault.jpg' },
    //     ],
    //     comedy: [
    //       { title: 'Comedy Movie 1', imgUrl: 'https://www.panoramicvillas.com/blog/wp-content/uploads/2013/07/dumb-and-dumber-film.jpg' },
    //       { title: 'Comedy Movie 2', imgUrl: 'https://snitt.hu/system/covers/big/covers_54655.jpg?1617134531' },
    //       { title: 'Comedy Movie 3', imgUrl: 'https://www.mafab.hu/static/2018/93/10/294366_1522830666.7375.jpg' },
    //       { title: 'Comedy Movie 4', imgUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8371978_p_v10_aj.jpg' },
    //       { title: 'Comedy Movie 5', imgUrl: 'https://www.mafab.hu/static/2019/167/10/316119_1560760422.4.jpg' },
    //     ]
    //   };

    const filmek = [
        {
            cim: 'Deadpool',
            kep: '../../public/images/deadpool.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Spiderman',
            kep: '../../public/images/spiderman.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Top Gun',
            kep: '../../public/images/topgun.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Sötét lovag',
            kep: '../../public/images/sotetlovag.jpg',
            kategoria: 'filmek',
        },
        {
            cim: 'Prison Break',
            kep: '../../public/images/PrisonBreak.jpg',
            kategoria: 'sorozatok',
        },
        {
            cim: 'The Nun',
            kep: '../../public/images/thenun.jpg',
            kategoria: 'sorozatok',
        },
        {
            cim: 'Vikings',
            kep: '../../public/images/Vikings.jpg',
            kategoria: 'sorozatok',
        },
        {
            cim: 'Csernobil',
            kep: '../../public/images/chernobyl.jpg',
            kategoria: 'sorozatok',
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

export default Home;
