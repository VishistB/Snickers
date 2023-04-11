import React, { useState } from 'react';
import styles from './register.module.css';
import registerimg from '../../assets/89192-startup-man-in-front-of-phone-and-rocket@2x.png';

const api_url = 'https://learnify.visionofsid.com/api/auth/register/';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [idImage, setIdImage] = useState(null);
  const [company, setCompany] = useState('');
  const [university, setUniversity] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleIdImageChange = (e) => {
    setIdImage(e.target.files[0]);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('name', name);
    formData.append('phone_no', phoneNo);
    formData.append('country', country);
    formData.append('gender', gender);
    formData.append('id_image', idImage);
    formData.append('company', company);
    formData.append('university', university);

    try {
      const response = await fetch(api_url, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <div className={styles.registerwrapper}>
                <div className={styles.uinfocard}>
               <img  src={registerimg} className={styles.img}/> 
            
               
                </div>
                <div className={styles.dashboardoptions}>
                    <div className={styles.innerboardoptions}>
                        <h1>
                        Register</h1>
                        <div>
                            <h2>Account Information</h2>
                            <div className={styles.userdetails}></div></div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />
      <div className={styles.spacer}> </div>

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <div className={styles.spacer}> </div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />
      <div className={styles.spacer}> </div>
      <label htmlFor="phoneNo">Phone number:</label>
      <input type="text" id="phoneNo" value={phoneNo} onChange={handlePhoneNoChange} />
      <div className={styles.spacer}> </div>
      <label htmlFor="country">Country:</label>
      <input type="text" id="country" value={country} onChange={handleCountryChange} />
      <div className={styles.spacer}> </div>
      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gender} onChange={handleGenderChange}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Prefer Not to Say">Prefer Not to Say</option>
      <div className={styles.spacer}> </div>
    </select>
    <div className={styles.spacer}> </div>
    <label htmlFor="idImage">ID Image:</label>
    <input type="file" id="idImage" onChange={handleIdImageChange} />
    <div className={styles.spacer}> </div>
  
    <label htmlFor="company">Company:</label>
    <input type="text" id="company" value={company} onChange={handleCompanyChange} />
    <div className={styles.spacer}> </div>
    <label htmlFor="university">University:</label>
    <input type="text" id="university" value={university} onChange={handleUniversityChange} />

  
    <button type="submit">Submit</button>
  </form></div></div></div>
  )}
export default Register



// function Register() {
//     return (
//         <>
             
//             <div className={styles.registerwrapper}>
//                 <div className={styles.uinfocard}>
//                <img  src={registerimg}/> 
            
               
//                 </div>
//                 <div className={styles.dashboardoptions}>
//                     <div className={styles.innerboardoptions}>
//                         <h1>
//                         Register</h1>
//                         <div>
//                             <h2>Account Information</h2>
//                             <div className={styles.userdetails}>

//                             <div> <label htmlFor="email">Email:</label></div> 
//                           <input type="Phone" id="Phone" name="Phone" />

//                           <input type="password" id="password" name="password" />
//                           <div> <label htmlFor="password">Password:</label></div> 
                          

//                             <label htmlFor="username">Username:</label>
//                             <input type="text" id="username" name="username" /> 
                            
                          
//                           <div> <label htmlFor="Phone">Phone:</label></div> 
                            
//                           <input type="text" id="cnr" name="country" country/>

//                           <div> <label htmlFor="country">Country</label></div> 
                            
//                           <input type="image" id="img" name="img" />
//                           <div> <label htmlFor="img">Image_ID:</label></div> 
                          
//                             <input type="datetime-local" id="dob" name="dob" />
//                             <div> <label htmlFor="dob">DOB:</label></div> 

                            
//                             <input type="text" id="cmpny" name="cmpny" />
//                             <div> <label htmlFor="cmpny">Company:</label></div> 
                            
//                             <input type="text" id="univ" name="univ" />
//                             <div> <label htmlFor="univ">University:</label></div>
//                             <input type="password" id="password" name="password" />
//                         </div>
//                     </div>
//                         </div>
//                         <div className={styles.msessions}>
//                             <button className={styles.subutton}> Submit</button>
                            
//                         </div>
                           
                     
                       
//                     </div>
//                 </div>
               
            
//         </>
//     )
// }

// export default Register
