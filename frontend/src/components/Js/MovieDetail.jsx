// import React from 'react';
// import { useParams } from 'react-router-dom';

// const MovieDetail = ({ movies }) => {
//   const { movieId } = useParams(); // A film azonosítója az URL-ből
//   const movie = movies.trending.find(m => m.title === movieId) || 
//                 movies.topRated.find(m => m.title === movieId) || 
//                 movies.action.find(m => m.title === movieId) || 
//                 movies.comedy.find(m => m.title === movieId);

//   if (!movie) {
//     return <div>Film nem található.</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <img src={movie.imgUrl} alt={movie.title} />
//       {/* Itt adhatsz hozzá további információkat a filmről */}
//       <p>Részletek a filmről...</p>
//     </div>
//   );
// };

// export default MovieDetail;