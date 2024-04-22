import React,{useState} from 'react';
import axios from "axios";
const Register = (props) => {
    //  const[auth,setAuth]=useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        
        name: '',
        surname:'',
        email: '',
        password:'',
        gender:'',

      });
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: [event.target.value],
       
        });
      };

      const autentication=(event)=>{
            
        event.preventDefault();

            if(formData.name===''){
                 alert("enter name");
                 return false;
            }
            if(formData.surname===''){
                alert("enter surname");
                return false;
            }
            if(formData.email===''){
               alert("enter email");
               return false; 
            }
            if(formData.password===''){
               alert("enter password");
               return false;
            }
            if(formData.gender===''){
               alert("Select gender");
               return false;
            }

           return true;
           




         
      }

      const handleSubmit = async (event) => {
        event.preventDefault();

     if(autentication(event)){
             
                  
              
        event.preventDefault(); 
    
       
        try {
            const response= await axios.post('http://192.168.0.125::5000/create', formData);
           
          setMessage(response.data.message);
          props.onchange(true);
          props.MESSAGE("Account Created Successfully");
          // console.log(formData);
        }
        catch(err){
            console.log("err",err);

        }
      
      }
         
      };

      const cliked=(e)=>{

            props.onchange(true);
           

      }

      






    return (
        <>
           <div className='flex flex-col items-center'>
           <h2 className='font-bold text-xl mb-0'>Create a new account</h2>
           <p className='text-slate-400 md:text-slate-500 text-sm p-0 mt-0'>it's quick and easy</p>
           </div>

 {/* instaruction box */}
           <div className={`bg-blue-100 border-t-4 ${message==='Account Created Successfully'?'bg-blue-100 border-blue-500':message==='Already Exist Email'?'bg-red-100 border-red-500':''} border-blue-500 rounded-b text-blue-900 px-4 py-2 shadow-md ${message===''?'hidden':'block'}`}role="alert">
            <div className="flex">
              <div className="py-1"><svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7c3.87 0 7-3.13 7-7s-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM8 8h2v5H8V8zm0-2h2v2H8V6z"/></svg></div>
              <div>
                <p className="font-bold sm:text-md text-xs">{message}</p>
              </div>
            </div>
          </div>

           
    {/* <form onSubmit={handleSubmit}> */}
           <div className='w-full' style={{border:'0.1px solid #c9c9c9'}}></div>

           <div className='flex justify-center pt-1 gap-2'>
               <input type="text" id="name" name="name"  placeholder='First name' className='w-1/2 text-sm p-2 border-2 border-solid border-slate-300 rounded-lg'  onChange={handleChange}/>
               <input type="text" id="surname" name="surname"  placeholder='Surname'className='w-1/2 p-2 text-sm border-2 border-solid border-slate-300 rounded-lg'  onChange={handleChange} />
           </div>
           
           <input type="text" placeholder='Mobile number or email address' className='w-full text-sm p-2 border-2 border-solid border-slate-300 rounded-lg' onChange={handleChange} name="email" id="email"/>
           
           <input type="password" placeholder='New password' className='w-full text-sm p-2 border-2 border-solid border-slate-300 rounded-lg'  onChange={handleChange} name="password" id="password"/>

            <div className='flex p-1 items-center gap-1 w-full'>
            <label htmlFor="date" className='text-slate-500 md:text-slate-600 md:text-sm text-xs'>Date of birth ?</label>
            <input type="date" className='text-slate-300 text-sm flex-1 p-2 border-2 border-solid border-slate-300 rounded-lg' placeholder='Date'/>
            </div>
            <div className='flex p-1 items-center gap-1 w-full'>

            <label htmlFor="gender" className='text-slate-500 md:text-slate-600 md:text-sm text-xs'> Gender ?</label>
            <div className='flex-1 flex'>
            <div className='text-slate-300 text-sm p-2 flex-1 border-2 border-solid border-slate-300 rounded-lg flex gap-1'>
             <label htmlFor="Male">Male</label>
             <input type="radio" name="gender" value='Male' onClick={handleChange}/>
             </div>
             <div className='text-slate-300 text-sm  p-2  flex-1 border-2 border-solid border-slate-300 rounded-lg flex gap-1'>
             <label htmlFor="Female">Female</label>
             <input type="radio" name="gender" value="Female" onClick={handleChange}/>
             </div>
             </div>

            
            </div>
           
            
             <button onClick={handleSubmit} className='bg-green-600 text-white font-sans p-2 font-bold w-4/5 rounded-lg active:bg-blue-800'>Sign up</button>

             {/* </form> */}
             <h3 className='text-sm text-blue-600 md:text-base cursor-pointer' onClick={cliked} >Already have a account?</h3>
        </>
    );
}

export default Register;
