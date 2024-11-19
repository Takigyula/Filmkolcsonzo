import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import FelsoNav from './components/Navbar/Navbar';
import Filmek from './pages/Filmek/Filmek';

function App() {
    return (
        <BrowserRouter>
            <FelsoNav />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/filmek"
                    element={<Filmek />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
