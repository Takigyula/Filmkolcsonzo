import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ContextProvider from './Context/Filmcontext.jsx';
import { LoginKezeles } from './utils/LoginContext.jsx';

createRoot(document.getElementById('root')).render(
    <ContextProvider>
    <LoginKezeles>
        <App />
    </LoginKezeles>
    </ContextProvider>
);
