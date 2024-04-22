import React, { useState } from 'react';
import axios  from 'axios';
const Login = (props) => {
    const [wrong,setwrong]=useState('');
    const clicked=()=>{props.onchange(false);}
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
    //  console.log("working");
      try {
        const response = await axios.post('http://192.168.0.125:5000/login', { email, password });
       
          props.OnSubmit(true);
          setwrong('');
         // Temporary log for debugging
      } catch (error) {
           setwrong('User Not Found')
        // console.error('Login error:', error); // Log the error for debugging
        
      }
    };
  



      
    return (

        <>
       

                       <div></div>
                       <div className={`bg-blue-100 border-t-4 ${props.MESSAGE==='Account Created Successfully'?'bg-blue-100 border-blue-500':props.MESSAGE==='Already Exist Email'?'bg-red-100 border-red-500':''} border-blue-500 rounded-b text-blue-900 px-4 py-2 shadow-md ${props.MESSAGE===''?'hidden':'block'}`}role="alert">
            <div className="flex">
              <div className="py-1"><svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7c3.87 0 7-3.13 7-7s-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM8 8h2v5H8V8zm0-2h2v2H8V6z"/></svg></div>
              <div>
                <p className="font-bold sm:text-md text-xs">{props.MESSAGE}{wrong}</p>
              </div>
            </div>
          </div>
                       <div>Log in to Facebook</div>
                      <div  className='w-full p-2 flex justify-center'>
                      <input type="text" placeholder='Email or phone number' name="email" id="email" onChange={(e) => setEmail(e.target.value)}  className='w-full p-2 border-2 border-solid border-slate-300 rounded-lg' />

                      </div>

                      <div className='w-full p-2 flex justify-center'>
                      <input type="password" placeholder='Password' name='password' id="password" onChange={(e) => setPassword(e.target.value)} className='w-full p-2 border-2 border-solid border-slate-300 rounded-lg' />

                      </div>
             
             {/* pop up wrong  */}
         <div className={`bg-blue-100 border-t-4 ${wrong==='User Not Found'?'bg-red-100 border-red-500':''} border-blue-500 rounded-b text-blue-900 px-4 py-1 shadow-md ${wrong===''?'hidden':'block'}`}role="alert">
            <div className="flex justify-center items-center">
              <div className="py-1"><svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7c3.87 0 7-3.13 7-7s-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM8 8h2v5H8V8zm0-2h2v2H8V6z"/></svg></div>
              <div>
                <p className="font-bold sm:text-base text-xs">{props.MESSAGE}{wrong}</p>
              </div>
            </div>
          </div>

             <button type='submit' onClick={handleSubmit} className='bg-blue-600 text-white font-sans p-2 font-bold w-4/5 rounded-lg active:bg-blue-800' >Login </button>

             <p className='text-sm text-blue-600 cursor-pointer'>Forget password ?</p>


             <hr/>

             <button onClick={clicked} className='bg-green-600 text-white font-sans p-2 font-bold md:w-1/2 w-4/6 rounded-lg active:bg-green-700 text-sm md:text-md'>Create new  account</button>


                      
              
                       

            
            
        
        </>
    );
}

export default Login;
