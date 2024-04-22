import React from 'react';
import LNavbar from './LNavbar';
import RNavbar from './RNavbar';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
             
                <LNavbar/>
                <RNavbar/>
             
            
        </div>
    );
}

export default Navbar;
