import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AppContext';

const PrivateRoutes = ({children}) => {
    const { isAuth } = useContext(AuthContext);
    if (!isAuth) {
        return <Navigate to="/signin" />;
      }
    
      return children;
    }

export default PrivateRoutes