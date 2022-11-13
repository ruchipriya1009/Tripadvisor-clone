import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

 export const AuthContext = createContext()

const AppContext = ({children}) => {
    //  const locations = JSON.parse(localStorage.getItem("location") || "[]")
    //  console.log(locations[0].location)


    const [text, setText] = useState("")
    const [location , setLocation] = useState([])
    const [entered, setEntered] = useState(false)
    const [ alert, setAlert] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [otp, setOtp] =  useState(false)
    const navigate = useNavigate()

    function handleChange(e){
        setText(e.target.value)
        setEntered(true)
    }
    function handleEnter(e){
        if(e.key==="Enter"){
          if(entered){
            setLocation([...location,{
              id: Date.now() + text.length,
              location: text
          }])
          setText("");
          setAlert(false)
          if(isAuth){
            navigate('/products')
          }
          else{
            navigate('/signin')
          }
          // navigate('/products')
          }
          else{
            setAlert(true)
            console.log("alret")
          }
        }
        
    }
    //       useEffect(()=>{
    //     localStorage.setItem("location", JSON.stringify(location))
    //   },[location])

  return (
    <AuthContext.Provider value={{location,setLocation, text, handleChange, handleEnter,entered,alert,isAuth,setIsAuth,otp}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AppContext