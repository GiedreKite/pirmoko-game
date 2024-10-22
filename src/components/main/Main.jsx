
import React, { useContext, useState, useEffect } from 'react';
import style from './Main.module.css';

import logo from './img/logo.png';


import Header from '../header/Header';

import Footer from '../footer/Footer.jsx';

import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import '../../App.css'






export default function Main() {


    const [visible, setVisible] = useState(false);
    const { theme } = useContext(ThemeContext);
    const [isMobile, setIsMobile] = useState(false);

    // Custom Hook to detect screen width

    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 700); // Optional delay
    }, []);


    return <>
        <Header />

        <main className={ `page ${theme}` }>




            <div className={ style.container }>

                <div className={ style.photoContainer }>
                    { !isMobile && <img className={ style.bouncingPhoto } src={ logo } alt="logo" /> }
                </div>


                <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                    <h1 className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }>Malonu, kad apsilankėte Giedrės mokslų pasaulyje</h1>
                </div>



            </div>




        </main>

        <Footer />

    </>

}





