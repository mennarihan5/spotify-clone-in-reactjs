import './logo.css';
import logoBlack from '../../../app/assets/images/logo-black.svg';
import { ReactComponent as LogoWhiteSvg } from '../../../app/assets/images/logo-white.svg'


const Logo = (props) => {
    if(props.useWhite) {
        return(
            <a href='#/dashboard' className='main-logo'>
                <LogoWhiteSvg />
            </a>
        );
    } else {
        return(
            <a href='#/dashboard' className='main-logo'>
                <img src={logoBlack} alt='Logo' className='main-logo-img'></img>
            </a>
        );
    }
    
}

export default Logo;