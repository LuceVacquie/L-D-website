import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {

    return (
        <div className="min-h-screen">
            <div className="flex">      
                <Navbar/>         
            </div>
            <main>{children}</main>
            <div className="flex inset-x-0 bottom-0">      
                <Footer/>         
            </div>
        </div>
    );
}

export default Layout