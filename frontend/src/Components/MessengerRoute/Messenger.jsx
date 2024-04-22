import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Messenger = () => {

      
    return (
        <div className='flex flex-col h-screen'> 

             <div className='flex p-2 gap-1 font-bold'>
               
               
               <Link to='/'> <ArrowBackIcon/> </Link>
                <h3>Messages</h3>

                
                   
             </div>
            
              <hr className='border-b-2' />    

              <div className='flex-1 flex flex-col justify-center items-center gap-2 pl-12 pr-12'>

                   <img src="./messenger.png" alt="message" className='w-24 h-24' />

                 
                    
                   <h3 className='font-bold text-xl flex justify-center items-center' > Use Messenger to  keep <br /> chatting</h3>

                   <h5 className='text-md p-2 text-slate-400'>Chats on mobile browser are not available.</h5>

                   <Button variant="contained" sx={{ textTransform: 'none', fontWeight: 'bold',width:'100%'  }}>
                                           Go To Messenger
               </Button>
               </div>
 
              
              
            
        </div>
    );
}

export default Messenger;
