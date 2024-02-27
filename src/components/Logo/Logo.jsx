import './logo.css';
import logo from '../../images/logo.png';

export const Logo = () => {
    return(
        <h1 className='main-logo'>
            <img src={logo} alt='Logo' className='main-logo-img'></img>
        </h1>
    );
}