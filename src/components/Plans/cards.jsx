import Button from "../Buttons/Buttons";
import styles from "./Plans.module.css";
// import { pricingList } from "./data";

function Cards(props) {
    const priceOffer = props.priceText ? "/month after offer period" : "/day";
    const termsText = props.terms? "1 month free not available for users who have already tried Premium." : ""

    return(
        <div className={styles.card}>
            <div className={styles.header}>
                <div >{props.free}</div>
                <div>One-time plans available</div>
                <h2 >{props.planName}</h2>
                <p >{props.price} {priceOffer}</p>
                <p >{props.accounts} {props.accountsText}</p>
            </div>
            <div className={styles.content}>
                <ul>
                    {
                        props.features && props.features.map((feature) => <li>{feature}</li>)
                    }
                </ul>
                <Button onClick={() => {}} type="primaryWide">
                    VIEW PLANS
                </Button>
            </div>
            <p className={styles.footer}><a href="#">Terms and conditions apply.</a>{termsText}</p>
        </div>
    );
}

export default Cards;