import { createContext } from 'react';

const BelepContext = createContext();

const LoginKezeles = (props) => {
    const setBelep = (adat) => {
        localStorage.setItem('belepve', JSON.stringify(adat));
    };

    const getBelep = () => {
        if (localStorage.getItem('belepve')) return true;
        else return false;
    };

    const setAdmin = (adat) => {
        localStorage.setItem('admine', JSON.stringify(adat));
    };

    const getAdmin = () => {
        return JSON.parse(localStorage.getItem('admine'));
    };

    const setAvatar = (adat) => {
        localStorage.setItem('avatar', JSON.stringify(adat));
    };

    const getAvatar = () => {
        return JSON.parse(localStorage.getItem('avatar'));
    };

    return (
        <BelepContext.Provider
            value={{
                setBelep,
                getBelep,
                setAdmin,
                getAdmin,
                setAvatar,
                getAvatar,
            }}
        >
            {props.children}
        </BelepContext.Provider>
    );
};

export { LoginKezeles };

export default BelepContext;
