import React from 'react';

import AddProfileBox from '../POP_UP/Add_profile_Box';
import NavbarContainer from '../Navbars/NavbarContainer';
import HomeContainer from '../HomeRoute/HomeContainer';

const Dashboard = (props) => {
    return (
        <div className='md:flex justify-between bg-gray-200 overscroll-none'>
 
               

              <div className='md:w-1/4'>

              </div>


              <div className='md:w-1/3 bg-white'>

              
              <NavbarContainer/>
                  

              <HomeContainer/>
   
               
            

               </div>

               <div className='md:w-1/4'>

               </div>


            

              
        </div>
    );
}

export default Dashboard;
