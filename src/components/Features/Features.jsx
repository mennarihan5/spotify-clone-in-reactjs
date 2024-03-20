import adFree from "../../app/assets/images/Image(1).png";
import offlinePlay from  "../../app/assets/images/Image(2).png";
import playEverywhere from  "../../app/assets/images/Image(3).png";
import prePay from  "../../app/assets/images/Image(4).png";
import featuresData from "./data";
import styles from './Features.module.css';

const Features = () => {
    return(
        <div className={styles.features}>
            <h2 className={styles.featuresTitle}>The power of Premium</h2>
            <div className={styles.cards}>
                {featuresData.map((feature) => (
                    <div className={styles.card}>
                        <div>
                            <img src={feature.image}/>
                        </div>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardDesc}>{feature.description}</p>
                    </div>
               ))}
            </div>
        </div>
    );
}

export default Features;