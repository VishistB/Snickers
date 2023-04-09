import React from "react";
import styles from "./login.module.css";
import loginimg from "../../assets/5437683-removebg-preview.png";
import vec from "../../assets/5437683-removebg-preview.png"
import google from  "../../assets/L-removebg-preview.png"
import FB from "../../assets/FB-removebg-preview.png"

function Login() {
    return (
        <>
            <div className={styles.loginwrapper}>
                <div className={styles.flexleft}>
                    <h1>Start Learning Here</h1>
                    <div className={styles.loginbox}>
                        <h2>Login/Sign up on Learnify</h2>
                        <div className={styles.twoauthbtns}>
                            <button className={styles.authbtn}><img src={google} style={{width:"40px"}}/>GOOGLE</button>
                            <button className={styles.authbtn}><img src={FB} style={{width:"40px"}}/>FACEBOOK</button>
                        </div>
                        <p>or continue with email address</p>
                        <div className={styles.line}></div>
                        <input type="text" className={styles.inpfield} placeholder="ENTER EMAIL"/>
                        <input type="password" className={styles.inpfield} placeholder="ENTER PASSWORD"/>
                        <div className={styles.remandforg}>
                            <div style={{display:"flex"}}><input type="checkbox"/><p>Remember me</p></div>
                            <a>Forgot Password</a>
                        </div>
                        <button className={styles.logbtn}>LOGIN</button>
                        <p>Don't have an Account? sign up here</p>
                    </div>
                </div>
                <div className={styles.flexright}>
                    <img src={vec} style={{width:"600px"}}/>
                </div>
            </div>
        </>
    );
}

export default Login;
