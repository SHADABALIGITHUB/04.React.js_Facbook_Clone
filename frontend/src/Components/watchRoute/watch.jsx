
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Navbar2 from '../Navbars/Navbar2';
const Watch = () => {
    return (
        <div className='md:flex justify-between bg-gray-200 overscroll-none'>
 
               

        <div className='md:w-1/4'>

        </div>


   <div className='md:w-1/3 bg-white'>

          <Navbar2/>

             

            <div className='flex p-2 items-center justify-between'>


                <h3 className='font-sans font-bold text-2xl'>Videos</h3>

                <div className='flex justify-center items-center gap-1' >

                    <div className='p-1 rounded-full bg-zinc-200'>
                        <PersonRoundedIcon color="black"/>
                    </div>

                    <div className='p-1 rounded-full bg-zinc-200'>
                        <SearchRoundedIcon color="black"/>
                    </div>

                </div>

            </div>
  
                 <hr />

            <div className='flex justify-center items-center'>

               

                <Alert severity="warning"> Working on this part</Alert>

            </div>

            </div>
        
    
        </div>



        
    );
}

export default Watch;
