import React, { useContext } from 'react';
import style from './Footer.module.css';
import { ThemeContext } from '../themeContext/ThemeContext';
export default function Footer() {
    const { theme } = useContext(ThemeContext);


    return (
        <footer className={ `page ${theme}` }>
            <div className={ style.gameFooter }>
                &copy; Copyright belongs to Giedre https://github.com/GiedreKite 2024

            </div>

        </footer >
    )
}