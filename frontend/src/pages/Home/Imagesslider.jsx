import React, { useState, useEffect } from 'react';
import './Imagesslider.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); // Aktuális kiválasztott kategória
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü állapot (nyitva vagy zárva)
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    setSlideIndex(prevIndex => {
      const newIndex = prevIndex + n;
      if (newIndex > 4) return 0; // Ha túllép a diák számán, vissza az elsőre
      if (newIndex < 0) return 4; // Ha visszalép a diák számán, az utolsóra lép
      return newIndex; // Visszaadja az új indexet
    });
  };

  const showSlides = (n) => {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n].style.display = "block";  
    dots[n].className += " active";
  };

  useEffect(() => {
    showSlides(slideIndex);
    const interval = setInterval(() => {
      plusSlides(1); // Automatikusan lép a következő diára
    }, 3000 );  // 3000 ms = 3 másodperc

    return () => clearInterval(interval); 
  }, [slideIndex]);

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  // Filmek adatainak szimulálása
  const movies = {
    trending: [
      { title: 'Movie 1', imgUrl: 'https://i.cdn29.hu/apix_collect_c/ngg_images/2306/19/a_vajak_the_witcher_175036_1_original_560x313_cover.jpg' },
      { title: 'Movie 2', imgUrl: 'https://www.justwatch.com/images/poster/301589704/s718/from.jpg' },
      { title: 'Movie 3', imgUrl: 'https://upload.wikimedia.org/wikipedia/hu/6/68/Fortune_hadm%C5%B1velet.jpg' },
      { title: 'Movie 4', imgUrl: 'https://m.media-amazon.com/images/S/pv-target-images/15e19b85511c34f3b2b3dc40f6fe7d62d553f955cf48bc6043dbe2439cd5621a.jpg' },
      { title: 'Movie 5', imgUrl: 'https://www.mafab.hu/static/2023/215/14/274034_1691152718.4816.jpg' },
      { title: 'Movie 6', imgUrl: 'https://media.themoviedb.org/t/p/w500/oKqNNTAMFlX6FwaxL6V7qV27ooG.jpg' },
      { title: 'Movie 7', imgUrl: 'https://m.media-amazon.com/images/M/MV5BOWJhYjdjNWEtMWFmNC00ZjNkLThlZGEtN2NkM2U3NTVmMjZkXkEyXkFqcGc@._V1_.jpg' },
      { title: 'Movie 8', imgUrl: 'https://resizing.flixster.com/suPMbIFPaMa4VWAM72eq76mjJ9g=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvYjRhYjdkZDQtZGE5OC00NTdmLWFiM2QtZTEzNDJcM2RkMGM1LmpwZw==' }
    ],
    topRated: [
      { title: 'Top Movie 1', imgUrl: 'https://m.media-amazon.com/images/M/MV5BYzM3ZTFmMTUtODAxNy00N2IxLWI2MGMtYTdmMDFhNmZkMDI3XkEyXkFqcGc@._V1_.jpg' },
      { title: 'Top Movie 2', imgUrl: 'https://img2.filmek.hu/original/roXSRnno9M6zDQIs1QAWx5F5KDR.jpg' },
      { title: 'Top Movie 3', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20iFsO9v7uRw5PfW_UMwGczKRvZ8G-n_zIw&s' },
      { title: 'Top Movie 4', imgUrl: 'https://lh5.googleusercontent.com/proxy/evyCd70ZKzDeHbgkoOBeZzVIfZ8qYwwEM-RxY4FC2aMo1OEpEUJsIveGUqylRd2rm1PI15Mvch8GaERxLGTfVwvxnQiweNSGc19BURuOovfi1AE' },
      { title: 'Top Movie 5', imgUrl: 'https://media.port.hu/images/001/152/122.jpg' },
      { title: 'Top Movie 6', imgUrl: 'https://filmtett.ro/resized/2023/04/filmsidebar_papa-ordoguzo-plakat.jpg' },
      { title: 'Top Movie 7', imgUrl: 'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaSWW48t0IluMnNMUonTWQgWcAlj8wyBOu2HYjiNTyy406d8vAGtfcUMq2M0qMGVSng0NUQQn5rP4QCE_ElHCt6M3F62W05Ksc7-Mo1OGv4rcu1vGBk9HaL5HPUR-AVB8MZXVg.jpg?r=488' },
    ],
    action: [
      { title: 'Action Movie 1', imgUrl: 'https://media.port.hu/images/001/569/360.webp' },
      { title: 'Action Movie 2', imgUrl: 'https://www.mafab.hu/static/2023/162/10/515811_1686557043.5039.jpg' },
      { title: 'Action Movie 3', imgUrl: 'https://m.media-amazon.com/images/S/pv-target-images/d67c22b7666dbb6b8b041c6f28d9f7184f5e0c905bd223088b029f3f2bf0c5a6.jpg' },
      { title: 'Action Movie 4', imgUrl: 'https://media.port.hu/images/001/586/066.webp' },
      { title: 'Action Movie 5', imgUrl: 'https://i.ytimg.com/vi/yUirUsoXHuA/hqdefault.jpg' },
    ],
    comedy: [
      { title: 'Comedy Movie 1', imgUrl: 'https://www.panoramicvillas.com/blog/wp-content/uploads/2013/07/dumb-and-dumber-film.jpg' },
      { title: 'Comedy Movie 2', imgUrl: 'https://snitt.hu/system/covers/big/covers_54655.jpg?1617134531' },
      { title: 'Comedy Movie 3', imgUrl: 'https://www.mafab.hu/static/2018/93/10/294366_1522830666.7375.jpg' },
      { title: 'Comedy Movie 4', imgUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8371978_p_v10_aj.jpg' },
      { title: 'Comedy Movie 5', imgUrl: 'https://www.mafab.hu/static/2019/167/10/316119_1560760422.4.jpg' },
    ]
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Menü nyitása/zárása
  };

  const handleCategoryChange 
= (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false); // Menü bezárása a kategória kiválasztása után
  };

  return (

    <div className="app">
      {/* Hero Banner */}
      <div className="banner">
        <div className="banner-contents">
          <h1>NextStream</h1>
          <div className="mySlides"><img className='asd' src="https://i.cdn29.hu/apix_collect_c/ngg_images/2306/19/a_vajak_the_witcher_175036_1_original_560x313_cover.jpg" alt="" /></div>
          <div className="mySlides"><img className='asd' src="https://www.justwatch.com/images/poster/301589704/s718/from.jpg" alt="" /></div>
          <div className="mySlides"><img className='asd' src="https://media.port.hu/images/001/152/122.jpg" alt="" /></div>
          <div className="mySlides"><img className='asd' src="https://www.mafab.hu/static/2023/215/14/274034_1691152718.4816.jpg" alt="" /></div>
          <div className="mySlides"><img className='asd' src="https://i.ytimg.com/vi/yUirUsoXHuA/hqdefault.jpg" alt="" /></div>

          <button onClick={() => plusSlides(-1)}>Előző</button>
          <button onClick={() => plusSlides(1)}>Következő</button>

          {/* Pontok a képek alatt */}
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <div className="dot" onClick={() => currentSlide(0)}></div>
            <div className="dot" onClick={() => currentSlide(1)}></div>
            <div className="dot" onClick={() => currentSlide(2)}></div>
            <div className="dot" onClick={() => currentSlide(3)}></div>
            <div className="dot" onClick={() => currentSlide(4)}></div>
          </div>
        </div>
      </div>

      {/* Genre Dropdown Menu */}
      <div className="label" role="button" onClick={toggleMenu} aria-haspopup="true" tabIndex={0} aria-expanded={isMenuOpen} aria-labelledby="profileLanguageDropDown-header">
        Műfajok
        <span className="arrow" />
      </div>
      {isMenuOpen && (
        <div role="menu" className="sub-menu theme-lakira" style={{ opacity: 1, transitionDuration: "150ms" }}>
          <ul className="sub-menu-list multi-column">
            {Object.keys(movies).map((genre) => (
              <li className="sub-menu-item" role="none" key={genre}>
                <a href="#" className="sub-menu-link" onClick={() => handleCategoryChange(genre)}>
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Filmek megjelenítése a kiválasztott kategória szerint */}
      <div className="movie-row">
        <h2>{selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : 'Trending'}</h2>
        <div className="row-posters">
          {selectedCategory === '' ? (
            movies.trending.map((movie, index) => (
              <img key={index} className="row-poster" src={movie.imgUrl} alt={movie.title} />
            ))
          ) : (
            movies[selectedCategory]?.map((movie, index) => (
              <img key={index} className="row-poster" src={movie.imgUrl} alt={movie.title} />
            ))
          )}
        </div>
      </div>

      {/* Top Rated */}
      <div className="movie-row">
        <h2>Top Rated</h2>
        <div className="row-posters">
          {movies.topRated.map((movie, index) => (
            <img key={index} className="row-poster" src={movie.imgUrl} alt={movie.title} />
          ))}
        </div>
      </div>
      <div className="movie-row">
        <h2>Action</h2>
        <div className="row-posters">
          {movies.action.map((movie, index) => (
 <img key={index} className="row-poster" src={movie.imgUrl} alt={movie.title} />
          ))}
        </div>
      </div>
      <div className="movie-row">
        <h2>Comedy</h2>
        <div className="row-posters">
          {movies.comedy.map((movie, index) => (
            <img key={index} className="row-poster" src={movie.imgUrl} alt={movie.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;