import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { ThemeContext } from '../themeContext/ThemeContext';
import '../../App.css'
import Dropdown from "../drobdown/Drobdown";
import DrobdownFirstClass from "../drobdown/DrobdownFirstClass";

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (<>
        <header className={ `page ${theme}` }>
            <h1 className={ style.gameName }>Pasirinkti žaidimą</h1>
            <DrobdownFirstClass />
            <Dropdown />
        </header>

    </>

    );
}