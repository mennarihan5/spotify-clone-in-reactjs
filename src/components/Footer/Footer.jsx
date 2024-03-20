import styles from './Footer.module.css';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import Logo from '../Header/Logo/Logo.jsx';
import { aboutMenu, communities, legalMenu, usefulLinks } from './data.js';

function Menu({title, options}) {
    return(
        <nav className={styles.menuCol}>
            <h5>{title || <>&nbsp;</>}</h5>
            <ul className={styles.menuList}>
                {
                    options && options.map((option) => {
                        return(
                            <li>
                                <a href={option.url}>{option.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.menu}>
                <div className={styles.topMenu}>
                    <div>
                        <Logo useWhite={true}/>
                    </div>
                    <div className={styles.menuWrapper}>
                        <Menu title="" options={aboutMenu}/>
                        <Menu title="Communities" options={communities}/>
                        <Menu title="Useful links" options={usefulLinks}/>
                    </div>
                </div>
                <div className={styles.bottomMenu}>
                    <ul className={styles.legalMenuWrapper}>
                        {
                            legalMenu && legalMenu.map((item) => {
                                return(
                                    <li className={styles.legalItem}><a href={item.url}>{item.name}</a></li>
                                )
                            }) 
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.copyrightsWrapper}>
                <div className={styles.icons}>
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebookF />
                </div>
                <div className={styles.copyrights}>
                    <p><FaEarthAfrica />India (English)</p>
                    <p>© 2023 Spotify AB</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;