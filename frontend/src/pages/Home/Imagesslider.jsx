import React, { useState } from 'react';
import './Imagesslider.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); // Aktuális kiválasztott kategória
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü állapot (nyitva vagy zárva)

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
      { title: 'Movie 8', imgUrl: 'https://resizing.flixster.com/suPMbIFPaMa4VWAM72eq76mjJ9g=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvYjRhYjdkZDQtZGE5OC00NTdmLWFiM2QtZTEzNDJjM2RkMGM1LmpwZw==' },
    ],
    topRated: [
      { title: 'Top Movie 1', imgUrl: 'https://m.media-amazon.com/images/M/MV5BYzM3ZTFmMTUtODAxNy00N2IxLWI2MGMtYTdmMDFhNmZkMDI3XkEyXkFqcGc@._V1_.jpg' },
      { title: 'Top Movie 2', imgUrl: 'https://img2.filmek.hu/original/roXSRnno9M6zDQIs1QAWx5F5KDR.jpg' },
      { title: 'Top Movie 2', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20iFsO9v7uRw5PfW_UMwGczKRvZ8G-n_zIw&s' },
      { title: 'Top Movie 2', imgUrl: 'https://lh5.googleusercontent.com/proxy/evyCd70ZKzDeHbgkoOBeZzVIfZ8qYwwEM-RxY4FC2aMo1OEpEUJsIveGUqylRd2rm1PI15Mvch8GaERxLGTfVwvxnQiweNSGc19BURuOovfi1AE' },
      { title: 'Top Movie 2', imgUrl: 'https://media.port.hu/images/001/152/122.jpg' },
      { title: 'Top Movie 2', imgUrl: 'https://filmtett.ro/resized/2023/04/filmsidebar_papa-ordoguzo-plakat.jpg' },
      { title: 'Top Movie 3', imgUrl: 'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaSWW48t0IluMnNMUonTWQgWcAlj8wyBOu2HYjiNTyy406d8vAGtfcUMq2M0qMGVSng0NUQQn5rP4QCE_ElHCt6M3F62W05Ksc7-Mo1OGv4rcu1vGBk9HaL5HPUR-AVB8MZXVg.jpg?r=488' },
    ],
    action: [
      { title: 'Action Movie 1', imgUrl: 'https://image.tmdb.org/t/p/original/a3Wpt1VVufpGjrwMbqKKfwg8tmw.jpg' },
      { title: 'Action Movie 2', imgUrl: 'https://image.tmdb.org/t/p/original/owXj2cocfSvwNlg1HeppmeccyGQ.jpg' },
    ],
    comedy: [
      { title: 'Comedy Movie 1', imgUrl: 'https://image.tmdb.org/t/p/original/4AQ4J2YrVn9L02ujs9UNmjZfJ3M.jpg' },
      { title: 'Comedy Movie 2', imgUrl: 'https://image.tmdb.org/t/p/original/yAFsjEkLzETDb8M9pJfyyDs5P2z.jpg' },
    ]
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Menü nyitása/zárása
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false); // Menü bezárása a kategória kiválasztása után
  };

  return (
    <div className="app">
      {/* Hero Banner */}
      <div className="banner">
        <div className="banner-contents">
        <h1>NextStream</h1>
            <img className='kep' src="../src/assets/images/Stranger_Things_logo.jpg" alt="asd" />
          <h1 className="banner-title">Stranger Things</h1>
          <button className="banner-button">Play</button>
        </div>
      </div>

      {/* Filmek megjelenítése a kiválasztott kategória szerint */}
      <div className="movie-row">
        <h2>{selectedCategory ? selectedCategory : 'Trending'}</h2>
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
    </div>
  );
};

export default App;
