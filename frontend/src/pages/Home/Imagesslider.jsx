import React, { useState, useEffect } from 'react';
import './Imagesslider.css';

const Imagesslider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    // const [categories] = useState([
    //     { id: 1, name: 'Action' },
    //     { id: 2, name: 'Comedy' },
    //     { id: 3, name: 'Drama' },
    //     // További kategóriák hozzáadása szükség szerint
    // ]);

    const plusSlides = (n) => {
        setSlideIndex(prevIndex => {
            const newIndex = prevIndex + n;
            if (newIndex > 2) return 0; // Ha túllép a diák számán, vissza az elsőre
            if (newIndex < 0) return 2; // Ha visszalép a diák számán, az utolsóra lép
            return newIndex; // Visszaadja az új indexet
        });
    };

    const showSlides = (n) => {
        // console.log(n);
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


    return (
        <div>
            <div className="mySlides"><img className='asd' src="../src/assets/images/vajak.jpg" alt="" /></div>
            <div className="mySlides"><img className='asd' src="../src/assets/images/verdak.jpg" alt="" /></div>
            <div className="mySlides"><img className='asd' src="../src/assets/images/hatter.jpg" alt="" /></div>

            <button onClick={() => plusSlides(-1)}>Previous</button>
            <button onClick={() => plusSlides(1)}>Next</button>

            <div className="dot" onClick={() => currentSlide(0)}></div>
            <div className="dot" onClick={() => currentSlide(1)}></div>
            <div className="dot" onClick={() => currentSlide(2)}></div>
        </div>
    );
};

export default Imagesslider;