import styles from './Plans.module.css';
import Button from "../Buttons/Buttons.jsx";
import { paymentIcons, pricingList } from './data.js';
import Cards from './cards.jsx';


const Plans = () => {
    const renderPaymentIcons = (payment) => {
        if (payment.icon) {
            return <img src= {payment.icon} />;
        } else {
            return null;
        }
    }

    return(
        <div className={styles.planWrapper}>
            <h2 className={styles.planTitle}>Pick your Premium</h2>
            <p className={styles.planDesc}>Listen without limits on your phone, speaker, and other devices.</p>
            <div className={styles.iconsWrapper}>
                {
                    paymentIcons.map(renderPaymentIcons)
                }
            </div>
            <div className={styles.cardsWrapper}>
               {
                    pricingList.map((list) => {
                        return <Cards free={list.free} planName={list.planName} price={list.price} priceText={list.priceText} accounts={list.accounts} accountsText={list.accountsText} features={list.features} terms={list.terms} />
                    })
               }
            </div>
            <div className={styles.learnMore}>
                <p className={styles.learnMoreText}>Special discount for eligible students in university</p>
                <Button onClick={()=>{}} type="primary" className={styles.learnMoreBtn}>
                    LEARN MORE
                </Button>
            </div>
        </div>
    );
}

export default Plans;

