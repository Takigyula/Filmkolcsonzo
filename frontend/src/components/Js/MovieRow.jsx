// import React from 'react';

// const MovieRow = ({ movies, selectedCategory, handleMovieClick }) => {
//   // Szűrjük a filmeket a kiválasztott kategória szerint
//   const filteredMovies = movies.filter(movie => movie.category === selectedCategory);

//   return (
//     <div className="movie-row">
//       <h2>{selectedCategory}</h2>
//       <div className="movie-list">
//         {filteredMovies.map(movie => (
//           <div key={movie.id} className="movie-item" onClick={() => handleMovieClick(movie.id)}>
//             <img src={movie.poster} alt={movie.title} />
//             <h3>{movie.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieRow;