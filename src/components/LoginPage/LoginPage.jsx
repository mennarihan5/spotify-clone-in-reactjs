import styles from './LoginPage.module.css';
import Logo from "../../components/Header/Logo/Logo.jsx";
import Button from "../Buttons/Buttons.jsx";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiHide } from "react-icons/bi";

function LoginPage() {
    return(
        <div className={styles.loginPage}>
            <div className={styles.header}>
                <Logo className={styles.logo}/>
            </div>
            <div className={styles.loginFormWrapper}>
                <div className={styles.loginForm}>
                    <div className={styles.continue}>
                        <Button onClick={()=>{}} type="primary" className={styles.facebookBtn}>
                            <FaFacebookF className={styles.facebookIcon}/>
                            <p className={styles.btnText}>Continue with Facebook</p>
                        </Button>
                        <Button onClick={()=>{}} type="primary" className={styles.appleBtn}>
                            <FaApple className={styles.appleIcon} />
                            <p className={styles.btnText}>Continue with Apple</p>
                        </Button>
                        <Button onClick={()=>{}} type="secondary" className={styles.googleBtn}>
                            <FcGoogle className={styles.googleIcon} />
                            <p className={`${styles.btnText} ${styles.googleText}`}>Continue with Google</p>
                        </Button>
                    </div>
                    <div className={styles.divider}>
                        <span>OR</span>
                    </div>
                    <div className={styles.form}>
                        <label for="username" className={styles.usernameLabel}>Email address or username</label><br/>
                        <input type='text' id="username" className={styles.username} placeholder='Email address or username'/> <br/>
                        <label for="password" className={styles.passwordLabel}>Password</label><br/>
                        <div className={styles.passwordWrapper}>
                            <input type='password' id="password" className={styles.password}  placeholder='Password'/>
                            <BiHide className={styles.hide}/>
                        </div><br/>
                        <p className={styles.forgotPass}><a href="#/forgotPassword">Forgot your password?</a></p> <br/>
                        <div className={styles.login}>
                            <div className={styles.rememberMe}>
                                <input className={styles.remember} type='checkbox' id="remember"/>
                                <label className={styles.rememberTxt} for="remember">Remember me</label>
                            </div>
                            <Button className={styles.loginBtn} onClick={()=>{}} type="primary">
                                log in
                            </Button>
                        </div>
                    </div>
                    <div className={styles.formFooter}>
                        <h3 className={styles.signupTxt}>Don't have an account?</h3>
                        <Button className={styles.signupBtn} onClick={()=>{}} type="secondary">
                            Sign up for Spotify
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage;