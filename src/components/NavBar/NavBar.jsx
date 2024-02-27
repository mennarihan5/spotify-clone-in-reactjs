import './NavBar.css';

export const NavBar = () => {
    return(
        <nav className='navbar'>
            <ul className='navbar-list-wrapper'>
                <li className='navbar-item'>Premium</li>
                <li className='navbar-item'>Support</li>
                <li className='navbar-item'>Download</li>
                <li className='navbar-item line'>|</li>
                <li className='navbar-item'>Sign up</li>
                <li className='navbar-item'>Log in</li>
            </ul>
        </nav>
    );
}