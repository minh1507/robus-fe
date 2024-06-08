import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Main;
