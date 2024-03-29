import { routes } from '../../routes.js';
import Logo from '../Header/Logo/Logo';
import styles from './Sidebar.module.css';
import { recommendations, sidebarMenu } from './data.js';
import { Link } from "react-router-dom";
import { appSettings } from '../../utils/user.js';
import { FiArrowDownCircle } from "react-icons/fi";

export const Sidebar = () => {
    const settings = appSettings();

    return(
        <aside className={styles.aside}>
            <div className={styles.logo}>
                <Logo useWhite={true}/>
            </div>
            <div className={styles.menu}>
                {
                    sidebarMenu.map((item, index) => {
                        return <>
                            <MenuItem {...item}/>
                            {
                                (index + 1) % 3 == 0 ?
                                <br/>
                                : <></>
                            } 
                    </>
                    })
                }
            </div>
            <div className={`${styles.menu} ${styles.divider} ${styles[`bottom-menu`]}`}>
                {
                    recommendations.map((recommendation) => {
                        return <Link className={`${styles[`menu-item-regular`]} ${styles[`menu-item`]}`} to={routes.getRecommendations(recommendation)}>{recommendation}</Link>
                    })
                }
                {
                !settings.hasInstalledApp && <div className={styles[`install-app`]}>
                <span className={styles[`install-icon`]}><FiArrowDownCircle /></span>
                <span className={styles.install}>Install App</span>
                </div>
                }
            </div>
        </aside>
    )
}

export const MenuItem = (item) => {
    return(
        <Link to={item.url} className={styles[`menu-item`]}>
            {item.icon}
            <span>
                {item.name}
            </span>
        </Link>
    )
}