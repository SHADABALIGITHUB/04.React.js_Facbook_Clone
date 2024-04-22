import React from 'react';

const LNavbar = () => {
    return (
        <>
           <div className='flex items-center'>
            <img src="./Facebook.jpeg" alt="error_in_image" className='w-6 h-6 m-2' />
            <h1 className='md:hidden text-xl text-blue-600 font-bold'>facebook</h1>
            <input type="text" className="hidden md:block py-2 px-1 ml-1 mr-1 flex-1 bg-gray-200 border-transparent rounded-2xl text-sm text-center border-none" placeholder="Search Facebook"></input>
             {/* <input type="text" className='hidden md:block' placeholder='Search' /> */}
            </div>
       </>
    );
}

export default LNavbar;
