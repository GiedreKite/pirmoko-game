import React, { useContext, useState } from "react";
import "./drob.css"; // optional: add styles in a separate CSS file
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ThemeContext } from "../themeContext/ThemeContext";
import { Link } from "react-router-dom";

const DropdownFirstClass = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={ toggleDropdown } className="dropdown-button">
                Pirmoko žaidimai
                <span className='icon'>
                    { isOpen ? <FaChevronUp /> : <FaChevronDown /> }
                </span>
            </button>

            { isOpen && (
                <div className="dropdown-menu">

                    <Link to="/minus" className='link'>Atimkime drauge</Link>
                    <Link to="/plus" className='link'>Sudėkime drauge</Link>
                    <Link to="/game" className='link'>Pailsėkime</Link>
                </div>
            ) }
        </div>
    );
};

export default DropdownFirstClass;
