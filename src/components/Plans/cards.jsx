import Button from "../Buttons/Buttons";
import styles from "./Plans.module.css";
// import { pricingList } from "./data";

function Cards(props) {
    const priceOffer = props.priceText ? "/month after offer period" : "/day";
    const termsText = props.terms? "1 month free not available for users who have already tried Premium." : ""

    return(
        <div className={styles.card}>
            <div className={styles.header}>
                {props.free && <div className={styles.free}>{props.free}</div>}
                <div className={styles.onetime}>One-time plans available</div>
                <h2 className={styles.planName}>{props.planName}</h2>
                <p className={styles.price}>{props.price} {priceOffer}</p>
                <p className={styles.accounts}>{props.accounts} {props.accountsText}</p>
            </div>
            <div className={styles.contentWrapper}>
                <ul className={styles.content}>
                    {
                        props.features && props.features.map((feature) => <li className={styles.item}><p>{feature}</p></li>)
                    }
                </ul>
                <Button className={styles.button} onClick={() => {}} type="primaryWide">
                    VIEW PLANS
                </Button>
            </div>
            <p className={styles.footer}><a href="#">Terms and conditions apply.</a>{termsText}</p>
        </div>
    );
}

export default Cards;