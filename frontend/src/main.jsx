import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LoginKezeles } from './utils/LoginContext.jsx';

createRoot(document.getElementById('root')).render(
    <LoginKezeles>
        <App />
    </LoginKezeles>
);
