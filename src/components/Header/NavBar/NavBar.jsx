import './NavBar.css';

const NavBar = () => {
    return(
        <nav className='navbar'>
            <ul className='navbar-list-wrapper'>
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
                <li className='navbar-item'>
                    <a href='#/login'>Log in</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;