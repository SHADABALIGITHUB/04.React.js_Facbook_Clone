import React from 'react';
import {Search,Menu,Grip,MessageCircle,Bell} from 'lucide-react';
const RNavbar = () => {
    return (
        <div className='flex justify-center items-center m-2'>

              <div className='hidden md:block'>
             <Grip className='' />
              </div>

              <div className='hidden md:block'>
              <MessageCircle />
              </div>
              <div className='hidden md:block'>
              <Bell />
              </div>
              <div>
                
              </div>
            
            <Search className='md:hidden m-1 w-full h-full rounded-full bg-slate-300 p-1'/>
             <Menu className='md:hidden m-1 w-full h-full rounded-full bg-slate-300 p-1'/>
        </div>
    );
}

export default RNavbar;
