import './logo.css';
import logoBlack from '../../../app/assets/images/logo-black.svg';
import logoWhite from '../../../app/assets/images/logo-white.svg';


const Logo = (props) => {
    const image = props.useWhite ? logoWhite : logoBlack;

        return(
            <a href='#/dashboard' className='main-logo'>
                <img src={image} alt='Logo' className='main-logo-img'/>
            </a>
        );
}

export default Logo;