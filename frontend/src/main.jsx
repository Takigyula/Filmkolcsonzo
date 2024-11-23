import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LoginKezeles } from './utils/Logincontext.jsx';

createRoot(document.getElementById('root')).render(
    <LoginKezeles>
        <StrictMode>
            <App />
        </StrictMode>
    </LoginKezeles>
);
