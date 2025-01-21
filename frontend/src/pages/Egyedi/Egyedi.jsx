import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FelsoNav from '../../components/Navbar/Navbar';

const Egyedi = () => {
    const {id} = useParams();
    const[film, setFilm] = useState({});

    useEffect(() => {
        const leker = async () => {
            let response = await fetch('http://localhost:3500/api/cinema/filmek/films');
    
            if (response.ok) {
                let result = await response.json();
                
                let egyediFilm = result.filmek.filter((film) => film._id === id);
                console.log(egyediFilm[0]);
                setFilm(egyediFilm[0]);
                
                let egyediKontener = document.querySelector('.egyedi-container');
                egyediKontener.style.backgroundImage = `url('/images/${egyediFilm[0].plakat}')`;
                console.log(egyediFilm[0]);
            }
        }

        leker();


    }, []);

  return (
    <div className='egyedi-container'>
        <FelsoNav />
        
        <h1>Cím: {film.cim}</h1>
        <img src={`/images/${film.plakat}`} alt="" />
    </div>
  )
}

export default Egyedi;