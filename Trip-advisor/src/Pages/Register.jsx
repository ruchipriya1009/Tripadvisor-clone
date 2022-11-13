import React, { useState } from 'react'
import '../Styles/Register.css'
import axios from 'axios';
import { useEffect } from 'react';
import { emailValidator, passwordValidator } from "./validate";
import { Navigate } from 'react-router';

const Register = () => {


	const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');

	

  const [formData, setFormData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: ""
});

const formSubmitter = e => {
  axios.post("http://localhost:8080/users", formData)
    .then(()=>{
        setFormData({
          id: "",
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          password: ""
        })
    })
    .then(()=>{
        getData();
    })



  setsuccessMessage('');
  if (!emailValidator(formData.email)) return seterrorMessage('Please enter valid email id');

  if (!passwordValidator(formData.password))
    return seterrorMessage(
      'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
    );

  if(formData.firstname === ""){
   
  }
  if(formData.lastname === ""){
    return seterrorMessage("Please enter the lastname")
  }
  if(formData.mobile === ""){
    return seterrorMessage("Please enter the mobile number")
  }
  Navigate('/signin')
  }

const [data, setData] = useState({});

const handleChange = (e)=>{
    const {id, value} = e.target;
    setFormData({
        ...formData,
        [id]:value
    })
}


useEffect(()=>{
    getData();
}, []);

const getData = ()=>{
    axios.get("http://localhost:8080/users")
    .then((res)=>{
        setData(res.data)
    })
}

  return (
    <div>
        <div style={{ width: "100%", height: "150px" }}> </div>
        <div className='Resiter_main_div'>
           <div className='Register_title'>
            <h1>PERSONAL INFORMATION</h1>
           </div>
           {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
           <div className='Name_div'>
            <input type="text" placeholder='First Name'
             id="firstname"
             onChange={handleChange} 
             value={formData.firstname} />
            <input type="text"  placeholder='Last Name'id="lastname"
             onChange={handleChange} 
             value={formData.lastname} />
           </div>
           <div className='mail_div'>
           <input type="text" placeholder='Enter email' id="email"
             onChange={handleChange} 
             value={formData.email} /><br />
            <input type="text"  placeholder='Phone'id="mobile"
             onChange={handleChange} 
             value={formData.mobile} /><br />
            <input type="password" placeholder='Password' id="password"
             onChange={handleChange} 
             value={formData.password} /><br />
            <button  onClick={formSubmitter}>Register</button>
           </div>
        </div>
    </div>
  )
}

export default Register