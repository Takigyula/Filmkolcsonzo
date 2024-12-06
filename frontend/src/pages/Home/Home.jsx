import React from 'react';
import './Home.css';
import Imagesslider from './Imagesslider';

const Home = () => {
    return (
        <div className="home-container">
           {/* <div className='col-sm-5'><h1 id="csetflix">NextStream</h1></div> */}
           <div><Imagesslider /></div>
        </div>
        
    );
};

export default Home;
