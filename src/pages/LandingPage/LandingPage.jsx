import LandingPageHeader from "../../components/Header/LandingPageHeader/LandingPageHeader.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Features from "../../components/Features/Features.jsx";
import Plans from "../../components/Plans/Plans.jsx";
import Footer from "../../components/Footer/Footer.jsx";

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