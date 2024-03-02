import './LandingPageHeader.css';
import Logo from '../../Header/Logo/Logo';
import NavBar from '../../Header/NavBar/NavBar';

const LandingPageheader = () => {
    return(
        <header className="header-wrapper">
            <div className='header'>
                <Logo useWhite={true}/>
                <NavBar />
            </div>
        </header>
    );
}

export default LandingPageheader;
