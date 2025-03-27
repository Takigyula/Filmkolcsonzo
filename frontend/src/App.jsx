import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import FelsoNav from './components/Navbar/Navbar';
import Filmek from './pages/Filmek/Filmek';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import './App.css';
import Sorozatok from './pages/Sorozatok/Sorozatok';
import Egyedi from './pages/Egyedi/Egyedi';
import Csomagok from './pages/Csomagok/Csomagok';
import Profil from './pages/Profil/Profil';
import Gyik from './pages/Gyik/Gyik';
import EgyediSorozat from './pages/EgyediSorozat/EgyediSorozat';
// import Kategoria from './pages/Kategorial/kategoria';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/egyedi/:id"
                        element={<Egyedi />}
                    />
                    <Route
                        path="/egyedisorozat/:id"
                        element={<EgyediSorozat />}
                    />
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/filmek"
                        element={<Filmek />}
                    />
                    <Route
                        path="/sorozatok"
                        element={<Sorozatok />}
                    />
                    <Route
                        path="/csomagok"
                        element={<Csomagok />}
                    />
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                    />
                    <Route
                        path="/profil"
                        element={<Profil />}
                    />
                    <Route
                        path="/gyik"
                        element={<Gyik />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
