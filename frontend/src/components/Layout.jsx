import { Outlet } from 'react-router-dom';
import { Navbar } from './partials/Navbar';
import { Footer } from './partials/Footer';

export const Layoutt = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}


