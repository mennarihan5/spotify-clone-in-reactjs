import LandingPageHeader from "../Header/LandingPageHeader/LandingPageHeader";
import Hero from "../Hero/Hero.jsx";
import Features from "../Features/Features.jsx";
import Plans from "../Plans/Plans.jsx";
import Footer from "../Footer/Footer.jsx";

function LandingPage() {
    return (
        <div className="App">
            <LandingPageHeader />
            <Hero />
            <Features />
            <Plans />
            <Footer />
        </div>
    );
}

export default LandingPage;