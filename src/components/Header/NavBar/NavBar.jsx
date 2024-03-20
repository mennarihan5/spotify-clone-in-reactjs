import './NavBar.css';
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';


const NavBar = () => {
    const [showMenu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((show) => !show)
    }

    return(
        <nav className='navbar'>
        <div className='hamburger-icon' onClick={toggleMenu}><FiAlignJustify /></div>
            <ul className={`navbar-list-wrapper ${showMenu? 'show-nav' : ''}`}>
                <li className='navbar-item'>
                    <a href='#/premium'>Premium</a>
                </li>
                <li className='navbar-item'>
                    <a href='#/support'>Support</a>
                </li>
                <li className='navbar-item'>
                    <a href='#/download'>Download</a>
                </li>
                <li className='navbar-item line'>|</li>
                <li className='navbar-item'>
                    <a href='#/signup'>Sign up</a>
                </li>
                <li  className='navbar-item'>
                    <a href='#/login'>Log in</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;