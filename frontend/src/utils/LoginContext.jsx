import { createContext } from 'react';

const BelepContext = createContext();

const LoginKezeles = (props) => {
    const setBelep = (adat) => {
        localStorage.setItem('belepve', JSON.stringify(adat));
    };

    const getBelep = () => {
        return JSON.parse(localStorage.getItem('belepve'));
    };

    const setAdmin = (adat) => {
        localStorage.setItem('admine', JSON.stringify(adat));
    };

    const getAdmin = () => {
        return JSON.parse(localStorage.getItem('admine'));
    };

    return (
        <BelepContext.Provider
            value={{ setBelep, getBelep, setAdmin, getAdmin }}
        >
            {props.children}
        </BelepContext.Provider>
    );
};

export { LoginKezeles };

export default BelepContext;
