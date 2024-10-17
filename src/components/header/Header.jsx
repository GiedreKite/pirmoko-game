
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { ThemeContext } from '../themeContext/ThemeContext';
import { useContext } from 'react';
import '../../App.css'
export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (<>
        <h1 className={ style.gameName }>Pasirinkti žaidimą</h1>
        <Link to="/minus" className={ style.link }>Atimkime drauge</Link>
        <Link to="/plus" className={ style.link }>Sudėkime drauge</Link>
        <Link to="/game" className={ style.link }>Pailsėkime</Link>
        <button onClick={ () => toggleTheme("dark") } > Šviesus </button>
        <button onClick={ () => toggleTheme("light") }  > Tamsus </button>
        <button onClick={ () => toggleTheme("girl") }  > Liepos </button>
        <button onClick={ () => toggleTheme("boy") }  > Emilio </button>

    </>

    );
}