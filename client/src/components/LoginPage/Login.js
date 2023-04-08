import React from 'react'
import styles from './login.module.css'


function Login() {
    return (
        <>
            <div className={styles.loginwrapper}>
                <div className={styles.uinfocard}>
                </div>
                <div className={styles.dashboardoptions}>
                    <div className={styles.innerboardoptions}>
                        <h1>
                        LOGIN</h1>
                        <div>
                            <h2>Account Information</h2>
                            <div className={styles.userdetails}>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" /> 
                            <div className={styles.spacer}> 
                        
                            
                            </div>
                          <div> <label htmlFor="password">Password:</label></div> 
                            
                            <input type="password" id="password" name="password" />
                        </div>
                    </div>
                        </div>
                        <div className={styles.msessions}>
                            <button className={styles.subutton}>  Submit</button>
                            
                        </div>
                           
                     
                       
                    </div>
                </div>
               
            
        </>
    )
}

export default Login
