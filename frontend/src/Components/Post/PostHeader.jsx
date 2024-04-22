import React from 'react';
import{Earth,Ellipsis} from 'lucide-react';
const PostHeader = (props) => {
    return (
        <div className='flex justify-between pr-4 pl-2'>

            <div className='flex gap-1'>
             <div className='w-10 h-10 p-1 rounded-full bg-slate-200'>

               <img src={props.Logo} alt="no-profile" className='w-full h-full' />
               </div>

            <div className='flex flex-col'>
               <div className='flex'>
                   <h2 className='font-bold'>{props.Title}</h2> 
                   <h2>.</h2>
                   <button className='text-blue-600 font-bold'>Follow</button>
               </div>

               <div className='flex text-sm text-gray-400 items-center'>
                 4d . <Earth className='w-4' />
               </div>

            </div>

            </div>

            <div>
            <Ellipsis />
            </div>

            
        </div>
    );
}

export default PostHeader;
