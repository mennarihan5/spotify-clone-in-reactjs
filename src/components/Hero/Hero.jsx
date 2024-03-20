import './Hero.css';
import Button from '../Buttons/Buttons';

const Hero = (props) => {
    return(
        <div className="free-premium-month">
            <h2 className="free-premium-month-title">Get Premium free for 1 month</h2>
            <p className="free-premium-month-description-1">Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
            <div className="free-premium-month-btn-wrapper">
                <Button onClick={()=>{}} type="primary">
                    GET STARTED
                </Button>
                <Button onClick={()=>{}} type="secondary">
                    SEE OTHER PLANS
                </Button>
            </div>
            <p className="free-premium-month-description-2"><span className="underlined">Terms and conditions apply</span> 1 month free not available for users who have already tried Premium.</p>
        </div>
    );
}

export default Hero;