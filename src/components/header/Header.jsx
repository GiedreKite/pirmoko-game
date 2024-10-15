
import { Link } from 'react-router-dom';
import style from './Header.module.css';
export default function Header() {


    return (<>
        <h1 className={ style.gameName }>Pasirinkti žaidimą</h1>
        <Link to="/minus" className={ style.link }>Atimkime drauge</Link>
        <Link to="/plus" className={ style.link }>Sudėkime drauge</Link>
        <Link to="/game" className={ style.link }>Pailsėkime</Link>

    </>

    );
}