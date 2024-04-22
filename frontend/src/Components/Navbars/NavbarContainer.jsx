import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
const NavbarContainer = () => {
    return (
        <>
          <div className='md:fixed md:w-full top-0 left-0 bg-white'>
              <Navbar />
              </div>
              <hr />
               <div className='md:fixed md:w-1/3'>
              <Navbar2/>  
              </div> 
              <div className='md:mt-20'>
              <hr />    
              </div>
        </>
    );
}

export default NavbarContainer;
