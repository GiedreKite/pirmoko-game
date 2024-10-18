import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { ThemeContext } from '../themeContext/ThemeContext';
import '../../App.css'
import Dropdown from "../drobdown/Drobdown";

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (<>
        <h1 className={ style.gameName }>Pasirinkti žaidimą</h1>
        <Link to="/minus" className={ style.link }>Atimkime drauge</Link>
        <Link to="/plus" className={ style.link }>Sudėkime drauge</Link>
        <Link to="/game" className={ style.link }>Pailsėkime</Link>

        <Dropdown />
    </>

    );
}