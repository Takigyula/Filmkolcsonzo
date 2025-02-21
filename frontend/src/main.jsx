import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ContextFilmProvider from './Context/Filmcontext.jsx';
import ContextKategoriaProvider from './Context/KategoriaContext.jsx';
import ContextSorozatProvider from './Context/SorozatContext.jsx';
import { LoginKezeles } from './utils/LoginContext.jsx';

createRoot(document.getElementById('root')).render(
    <ContextFilmProvider>
        <ContextSorozatProvider>
            <ContextKategoriaProvider>
    <LoginKezeles>
        <App />
    </LoginKezeles>
    </ContextKategoriaProvider>
    </ContextSorozatProvider>
    </ContextFilmProvider>
);
