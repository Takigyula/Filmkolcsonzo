import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FelsoNav from './components/Navbar/Navbar';
import Filmek from './pages/Filmek/Filmek';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import './App.css';
import Sorozatok from './pages/Sorozatok/Sorozatok';
import Egyedi from './pages/Egyedi/Egyedi';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/egyedi/:id" element={<Egyedi />} />   
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
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
