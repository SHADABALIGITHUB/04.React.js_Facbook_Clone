import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FriendsRequest from './FriendsRequest';
import Navbar2 from '../Navbars/Navbar2';
const Fae = () => {
    return (
        <div className='md:flex justify-between bg-gray-200 overscroll-none'>
 
               

              <div className='md:w-1/4'>

                okey ia mworking 

              </div>


         <div className='md:w-1/3 bg-white'>

                <Navbar2/>


     {/* main  part friends container */}
        <div>
            <div className='flex justify-between  p-3 items-center'>
            <h3 className='font-sans font-bold text-2xl'> Friends</h3>
             <div className='bg-zinc-300 p-1 rounded-full'><SearchIcon/></div>
            </div>
             <div className='flex p-3'>
                <button className='font-bold text-sm p-2 bg-zinc-300 rounded-2xl'>Suggestions</button>
                <button className='font-bold text-sm p-2 bg-zinc-300 rounded-2xl ml-2'>Your Friends</button>
             </div>
             <div className='p-2 flex justify-between items-center'>
                <h3 className='font-bold text-md'>Friend request</h3>
                <h3 className='text-blue-700 text-sm'>See all</h3>

             </div>


              <FriendsRequest username="Apna college" profile="./apna_college.png"/>
              <FriendsRequest/>
              <FriendsRequest username={"Vite "} profile="./vite.svg"/>
              <FriendsRequest/><FriendsRequest/><FriendsRequest/><FriendsRequest/><FriendsRequest/>


        </div>

        </div>
        
    
        </div>
    );
}

export default Fae;
