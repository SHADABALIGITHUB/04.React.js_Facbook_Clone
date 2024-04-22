import React, { useState } from 'react';
import {MessageCircleMore,Forward} from 'lucide-react'
const PostFotter = () => {
     const[color,setColor]=useState('thumb_Unpress.svg');
    const cliked=()=>{

             color==="thumb_Unpress.svg"?setColor('thumbs.svg'):setColor('thumb_Unpress.svg');
    }
    return (
        <div className='flex items-center justify-between mr-2 ml-2 mt-1 mb-1'>
            <div className='rounded-2xl bg-gray-300 w-1/3 h-10 py-2 flex justify-center' onClick={cliked}> {<img src={`${color}`} alt="okey" className='w-full h-full' />}</div>
            <div className='rounded-2xl bg-gray-300 w-1/3 py-2 flex justify-center'> <MessageCircleMore /></div>
            <div className='rounded-2xl bg-gray-300 w-1/3 py-2 flex justify-center'> <Forward /> </div>
            
        </div>
    );
}

export default PostFotter;
