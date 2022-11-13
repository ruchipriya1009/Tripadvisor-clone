import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../Styles/Login.css'
import axios from "axios";
import { emailValidator, passwordValidator } from "./validate";
import { AuthContext } from "../Context/AppContext";
// import { useDispatch } from "react-redux";
const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const[user, setUser] = useState([])
  const navigate = useNavigate()

useEffect(()=>{
  axios.get("http://localhost:8080/users")
    .then((res)=>{
      setUser(res.data)
    })
}, [])

	const [input, setInput] = useState({ email: '', password: ''});

	const [errorMessage, seterrorMessage] = useState('');
	const [successMessage, setsuccessMessage] = useState('');

  const handleChange = e => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	

	// React.useEffect(()=>{
	// 	if(localStorage.getItem('auth')) history.push('/')
	// },[])

	const formSubmitter = e => {
		e.preventDefault();
		setsuccessMessage('');
		if (!emailValidator(input.email)) 
    return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(input.password))
			return seterrorMessage('Please enter a valid password');

      user.map((e)=>{
        if(input.email !== e.email || input.password !== e.password){
          return seterrorMessage('Invalid email or password');
        }else{
          setIsAuth(true)
          navigate('/products');
          localStorage.setItem('auth', true)
        }
    })
	};

  return (
    <div>
        <div style={{ width: "100%", height: "150px" }}> </div>
         <div className="Login_main">
          <div className='Already_user'>
                  <div className='title_div'><h1>REGISTERED CUSTOMERS</h1></div>
                  <p>If you have an account, sign in with your email address.</p>
                  {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
                  <div>
                    <input placeholder="Enter Email" 
                        type="text"
                        name="email" 
                        onChange={handleChange} />
                  </div>
                  <div>
                    <input placeholder="Enter Password" 
                        type="password"
                        name="password" 
                        onChange={handleChange}/>
                  </div>
                  <button onClick={formSubmitter}>SIGNIN</button>
          </div>
          <div className='New_user'>
          <div className='New_title_div'><h1>NEW CUSTOMERS</h1></div>
           <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
           <button onClick={()=>{navigate('/signup')}}>CREATE AN ACCOUNT</button>
          </div>
         </div>
        </div>
  )
}

export default Login