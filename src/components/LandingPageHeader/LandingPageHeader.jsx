import './LandingPageHeader.css';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';

export const LandingPageheader = () => {
    return(
        <header className="header">
            <Logo />
            <NavBar />
        </header>
    );
}
