import React from 'react'
import styles from './register.module.css'
import registerimg from '../../assets/5437683-removebg-preview.png'

function Register() {
    return (
        <>
             
            <div className={styles.registerwrapper}>
                <div className={styles.uinfocard}>
               <img  src={registerimg}/> 
            
               
                </div>
                <div className={styles.dashboardoptions}>
                    <div className={styles.innerboardoptions}>
                        <h1>
                        Register</h1>
                        <div>
                            <h2>Account Information</h2>
                            <div className={styles.userdetails}>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" /> 
                            
                          <div> <label htmlFor="email">Email:</label></div> 
                          <input type="Phone" id="Phone" name="Phone" />
                          <div> <label htmlFor="Phone">Phone:</label></div> 
                            
                           
                            
                          
                            <input type="datetime-local" id="dob" name="dob" />
                            <div> <label htmlFor="dob">DOB:</label></div> 

                            <input type="password" id="password" name="password" />
                            <div> <label htmlFor="password">Password:</label></div> 
                            
                            <input type="password" id="password" name="confirm password" />
                            <div> <label htmlFor="password">Confirm Password:</label></div> 
                            
                            <input type="password" id="password" name="password" />
                        </div>
                    </div>
                        </div>
                        <div className={styles.msessions}>
                            <button className={styles.subutton}> Submit</button>
                            
                        </div>
                           
                     
                       
                    </div>
                </div>
               
            
        </>
    )
}

export default Register
