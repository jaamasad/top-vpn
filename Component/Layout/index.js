import React, { useState, useEffect } from 'react';
import Footer from "./Footer"
import Navbar from "./Navbar"
import AdPopup from '@/Component/AdPopup';
import Cookies from 'js-cookie';

const Layout = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if(Cookies.get('modalClosed')===undefined ||Cookies.get('modalClosed') === false){
            console.log(Cookies.get('modalClosed'))
            setIsModalOpen(true);
        }
    }, []);
  
    const closeModal = () => {
        setIsModalOpen(false);
        Cookies.set('modalClosed', 'true', { expires: 7 });
    };

    return (
        <>
            <Navbar />
            {children}
            <AdPopup isOpen={isModalOpen} closeModal={closeModal} />            
            <Footer />
        </>
    )
}

export default Layout