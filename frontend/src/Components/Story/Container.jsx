import React from 'react';
import Card from './Card';
import {Plus} from 'lucide-react';

const Container = () => {
    return ( 
       
          <div className="flex overflow-x-auto whitespace-no-wrap h-52 p-3">
             <div className="inline-block mr-4">

                <div className='w-32 h-48 bg-slate-200 rounded-xl flex flex-col overflow-hidden items-center'>

                         <div className='h-3/4 overflow-hidden'>
                      
                         <img src="./boy.png" alt="" className='transform scale-150'/>
                          
                         </div>
                         

                         
                         <div className='relative -top-2'>
                         <Plus  className='bg-blue-700 rounded-full text-white font-bold' />
                         </div>

                         <div className='flex items-center flex-col justify-center'>

                         <h2 className='font-bold'>Add  To</h2>
                         <h1 className='font-bold'>Story</h1>

                         </div>


                        


                    

                </div>

             </div>

      {[...Array(10)].map((_, index) => (
        <div key={index} className="inline-block  mr-4">
          <Card />
        </div>
      ))}
    </div>

             

        


     
    );
}

export default Container;
