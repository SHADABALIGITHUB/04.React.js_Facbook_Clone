import React from 'react';
import { Frown } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';
import { Link } from 'react-router-dom';
const Profile = () => { 

      

       const addNewPost=()=>{
                
        // <Link to='/watch'>
           
        //  </Link>
          console.log("value here");1
           
       }
     
    return (
        <div className='flex m-1 items-center justify-between'>

            <ProfilePhoto/>

{/* 
            <input type="text" placeholder="what's on your mind?" className='bg-gray-400 mt-2 mb-2 w-1/2' /> */}
          <input type="text" className="py-2 px-1 ml-1 mr-1 flex-1 bg-gray-200 border-transparent rounded-2xl text-sm text-center border-none" placeholder="what's on your mind?" onClick={addNewPost} ></input>


            <div className='flex items-center justify-center flex-col'>
                <img src="./photo.png" alt="img" />
                <h4>Photo</h4></div>

        </div>
    );
}

export default Profile;
