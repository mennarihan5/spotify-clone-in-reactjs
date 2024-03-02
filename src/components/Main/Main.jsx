import './Main.css';
import adFree from "../../../src/app/assets/images/Image(1).png";
import offlinePlay from "../../../src/app/assets/images/Image(2).png";
import playEverywhere from "../../../src/app/assets/images/Image(3).png";
import prePay from "../../../src/app/assets/images/Image(4).png";
// import upi from "../../../src/app/assets/images/upi.png";
// import payTm from "../../../src/app/assets/images/paytm.png";
// import visa from "../../../src/app/assets/images/visa.png";
// import masterCard from "../../../src/app/assets/images/mastercard.png";
// import amex from "../../../src/app/assets/images/amex.png";
// import dinersClub from "../../../src/app/assets/images/diners.png";
// import check from "../../../src/app/assets/images/check.png";

function FreePremiumMonth() {
    return(
        <div className="free-premium-month">
            <h2 className="free-premium-month-title">Get Premium free for 1 month</h2>
            <p className="free-premium-month-description-1">Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
            <button className="free-premium-month-button1 btn">GET STARTED</button>
            <button className="free-premium-month-button2 btn">SEE OTHER PLANS</button>
            <p className="free-premium-month-description-2"><span className="underlined">Terms and conditions apply</span> 1 month free not available for users who have already tried Premium.</p>
        </div>
    );
}

function PremiumPowerCards(props) {
    return(
        <div className="premium-power-wrapper">
            <div className="premium-power-cards">
                <div className="premium-power-cards-img">
                    <img src={props.img}></img>
                </div>
                <h3 className="premium-power-cards-title">{props.title}</h3>
                <p className="premium-power-cards-desc">{props.desc}</p>
            </div>
        </div>
    );
}

function PremiumPower() {
    return(
        <div className="premium-power-wrapper">
            <h2 className="premium-power-title">The power of Premium</h2>
            <div className="premium-power-cards">
                <PremiumPowerCards img={adFree} title="Ad-free music listening" desc="Enjoy uninterrupted music."/>
                <PremiumPowerCards img={offlinePlay} title="Offline playback" desc="Save your data by listening offline."/>
                <PremiumPowerCards img={playEverywhere} title="Play everywhere" desc="Listen on your speakers, TV, and other favorite devices."/>
                <PremiumPowerCards img={prePay} title="Pay your way" desc="Prepay with Paytm, UPI, and more."/>
            </div>
        </div>
    );
}

// function PickPremiumPlanIcons(props) {
//     return(
//             <div className="PickPremiumPlanIcon">
//                 <img src={props.img}></img>
//             </div>
//     );
// }

// function PickPremiumPlanCardsFeatures(props) {
//     return(
//         <div className="pick-premium-plan-card-features">
//                 <div className="pick-premium-plan-card-features-text">
//                     <img src={check}></img>
//                     <p>{props.text}</p>
//                 </div>
//             </div>
//     );
// }

// function PickPremiumPlanCards(props) {
//     return(
//         <div className="pick-premium-plan-card">
//             <Button text="1 month free"/>
//             <p className="pick-premium-plan-card-label">One-time plans available</p>
//             <h2 className="pick-premium-plan-card-title">{props.title}</h2>
//             <p className="pick-premium-plan-card-offer">{props.offer}</p>
//             <PickPremiumPlanCardsFeatures />
//             <PickPremiumPlanCardsFeatures />
//             <PickPremiumPlanCardsFeatures />
//             <Button text="VIEW PLANS"/>
//             <p className="">{props.terms}</p>
//         </div>
//     );
// }

// function PickPremiumPlan() {
//     return(
//         <div className="pick-premium-plan-wrapper">
//             <h2 className="pick-premium-plan-title">Pick your Premium</h2>
//             <p className="pick-premium-plan-desc">Listen without limits on your phone, speaker, and other devices.</p>
//             <div className="pick-premium-plan-icons-wrapper">
//                 <PickPremiumPlanIcons img={upi} />
//                 <PickPremiumPlanIcons img={payTm} />
//                 <PickPremiumPlanIcons img={visa} />
//                 <PickPremiumPlanIcons img={masterCard} />
//                 <PickPremiumPlanIcons img={amex} />
//                 <PickPremiumPlanIcons img={dinersClub} />
//             </div>
//             <div className="pick-premium-plan-cards-wrapper">
//                 <PickPremiumPlanCards />
//                 <PickPremiumPlanCards />
//                 <PickPremiumPlanCards />
//                 <PickPremiumPlanCards />
//             </div>
//         </div>
//     );
// }

function Main() {
    return(
        <>
            <FreePremiumMonth />
            <PremiumPower />
        </>
    );
}

export default Main;