import React, { useEffect, useState } from 'react';
import Login from './Login';
import FacebookHeading from './FacebookHeading';
import Register from './Register';

const ConatinerLogin = (props) => {
  const[loginSignin,setLoginSignin]=useState(true);
  const [message,setMessage]=useState('');
 

  const handleChange = (newValue) => {
    setLoginSignin(newValue);
  };

  

  const handlemessage=(newValue)=>{
     setMessage(newValue);
  }
  const handlelogin=(newValue)=>{
           props.welcome(newValue);
  }
  useEffect(()=>{

    const timeoutId = setTimeout(() => {
        setMessage('');
    }, 2000);
  
    return () => clearTimeout(timeoutId); 

  },[loginSignin])

        
    return (
        <div className='bg-slate-200 h-screen w-screen flex items-center gap-10 justify-center'>

                <FacebookHeading/>
               

               <div className='sm:w-1/2 w-full flex flex-col items-center gap-10'>

                 <h1 className='md:hidden text-4xl md:mb-2 text-blue-700 font-bold font-mono'>facebook</h1>
                 <div className='bg-white lg:w-2/5 w-4/5 flex flex-col items-center gap-3 shadow-2xl pl-8 pr-8 pt-8 pb-20 rounded-lg'>
                 
                 {loginSignin==true?<Login onchange={handleChange} MESSAGE={message} OnSubmit={handlelogin} />:<Register onchange={handleChange} MESSAGE={handlemessage}/>}

                 </div>
               </div>


              
             
        </div>
    );
}

export default ConatinerLogin;
