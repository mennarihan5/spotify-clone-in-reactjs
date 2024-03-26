import styles from './LoginPage.module.css';
import { useState } from 'react';
import Logo from "../../components/Header/Logo/Logo.jsx";
import Button from "../Buttons/Buttons.jsx";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiHide } from "react-icons/bi";
import { toast } from 'react-toastify';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    // const [form, setForm] = useState({});

    const handleEmail = (event) => {
        setEmail(event.target.value);
        // setForm({...form, email: event.target.value});
    }
    const handlePassword = (event) => { 
        setPassword(event.target.value);
        // setForm({...form, password: event.target.value});
    }
    const handleRememberMeCheckbox = (event) => {
        setRememberMe(event.target.checked);
        // setForm({...form, rememberMe: event.target.value});
    }

    const handleLogin = () => {
        const payload = {
            username: email,
            password,
            rememberMe
        }
        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
        })
        .then(async(response) => {
                if(response.status >= 400) {
                    const data = await response.json();
                    throw data;
                }
                return response.json();
        })
        .then((response) => {
            console.log("Resolved", response);
        } )
        .catch((error) => {
            toast.error('This is an error!');
            setError(error.message);
        })
        .finally(() => {
            setIsSubmitting(false);
        })
              
    }


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
                    {
                        error && <div className={styles.error}>{error}</div>
                    }
                    <div className={styles.form}>
                        <label htmlFor="username" className={styles.usernameLabel}>Email address or username</label><br/>
                        <input onChange={handleEmail} type='text' id="username" className={styles.username} placeholder='Email address or username'/> <br/>
                        <label htmlFor="password" className={styles.passwordLabel}>Password</label><br/>
                        <div className={styles.passwordWrapper}>
                            <input onChange={handlePassword} type='password' id="password" className={styles.password}  placeholder='Password'/>
                            <BiHide className={styles.hide}/>
                        </div><br/>
                        <p className={styles.forgotPass}><a href="#/forgotPassword">Forgot your password?</a></p> <br/>
                        <div className={styles.login}>
                            <div className={styles.rememberMe}>
                                <input onChange={handleRememberMeCheckbox} className={styles.remember} type='checkbox' id="remember"/>
                                <label className={styles.rememberTxt} htmlFor="remember">Remember me</label>
                            </div>
                            <Button className={styles.loginBtn} onClick={handleLogin} type="primary" disabled={isSubmitting}>
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