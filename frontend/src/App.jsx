import { useState } from 'react'

import ConatinerLogin from './Components/Login/ContainerLogin'
import Dashboard from './Components/Main/Dashboard';
import { Route,Routes } from 'react-router-dom';
import Fae from './Components/FriendsRoute/fae';
import Messenger from './Components/MessengerRoute/Messenger';
import Watch from './Components/watchRoute/watch';
import Notification from './Components/NotificationRoute/Notification';
import Shop from './Components/ShopRoute/Shop';


function App() {
  const [count, setCount] = useState(false);


 

    const Welcomefun=(newValue)=>{
        setCount(newValue);
    }

  return (
    <>
      
       
    <Routes>

        <Route path="/Login" element={<Fae/>} /> 
        

        <Route path="/" element={count===false?<ConatinerLogin welcome={Welcomefun}/>:<Dashboard/>} />
        <Route path="/friends" element={<Fae/>} />
        <Route path="/messenger" element={<Messenger/>} />
        <Route path="/watch" element={<Watch/>} />
        <Route path="/notify" element={<Notification/>} />
        <Route path="/shop" element={<Shop/>} />
        
        
      </Routes>
 

       
      

      
    </>
  )
}

export default App
