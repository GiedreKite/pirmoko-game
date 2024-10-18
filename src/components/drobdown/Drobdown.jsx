import React, { useContext, useState } from "react";
import "./drob.css"; // optional: add styles in a separate CSS file
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ThemeContext } from "../themeContext/ThemeContext";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Function to toggle the dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggle the dropdown state
    };

    return (
        <div className="dropdown">
            {/* Dropdown Button */ }
            <button onClick={ toggleDropdown } className="dropdown-button">
                Fono pasirinkimas
                <span className='icon'>
                    { isOpen ? <FaChevronUp /> : <FaChevronDown /> }
                </span>
            </button>

            {/* Dropdown Menu */ }
            { isOpen && (
                <div className="dropdown-menu">

                    <button className='item' onClick={ () => toggleTheme("dark") } > Šviesus </button>
                    <button className='item' onClick={ () => toggleTheme("light") }  > Tamsus </button>
                    <button className='item' onClick={ () => toggleTheme("girl") }  > Liepos </button>
                    <button className='item' onClick={ () => toggleTheme("boy") }  > Emilio </button>

                </div>
            ) }
        </div>
    );
};

export default Dropdown;
