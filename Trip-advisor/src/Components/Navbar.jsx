
import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AppContext'
import '../Styles/Navbar.css'
import Darkmode from './Darkmode'

const Navbar = () => {
  // # opposite-beginner-5472
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate()
  return (
    <div>
      <Box>
        <div className='Navbar_main_container'>
            <div onClick={()=>{navigate('/')}} className='Navbar_logo_div'>
                 <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="brand_logo" />
            </div>
            <div className='Navbar_routes_div'>
                <div>
                <i class="fa-solid fa-pen"></i><h4>Review</h4>
                </div>
                <div>
                
                   <i class="fa-regular fa-heart"></i>
                   <h4>Trip</h4>
                </div>
                <div style={{backgroundColor:"black", color:"white", cursor:"pointer"}} className='signin_div' onClick={()=>{
                  setIsAuth( isAuth ? !isAuth : isAuth)
                  navigate('/signin')
                }}>
                    {!isAuth ? <h4>Sign in</h4> : <h4>Logout</h4>}
                </div>
                  <Darkmode border='0px'/>
            </div>
        </div>
        </Box>
    </div>
  )
}

export default Navbar