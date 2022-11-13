
// import { useContext } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

// import { AuthContext } from './Context/AppContext';
import AllRoutes from './Routes/AllRoutes';

function App() {
  // const {otp} = useContext(AuthContext);
  return (
    <div className="App">
    
      <Navbar/>
       <AllRoutes/>
      
      <Footer/>
    </div>
  );
}

export default App;
