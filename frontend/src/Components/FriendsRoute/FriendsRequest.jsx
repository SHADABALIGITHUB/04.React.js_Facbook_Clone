
import * as React from 'react';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import propType from 'prop-types';


const FriendsRequest = (props) => {
    return (
        <div className='flex justify-between items-center p-6'>
            <div className='w-28 h-28 p-1 bg-zinc-100 rounded-full flex justify-center items-center '>
            <img src={props.profile} alt="profile" className='rounded-full w-11/12'/>
            </div>
            <div className='flex flex-col justify-centre'>

                <div className='flex  justify-between items-center p-2'>
                      <h3>{props.username} </h3>
                      <p className='text-xs'> 2w</p>
                </div>

                <div className='flex p-2'>

                <Button variant="contained" startIcon={<PersonAddAltIcon/>} sx={{ textTransform: 'none' }}>
                                           Confirm
               </Button>
                      <button className='font-bold text-sm p-2 bg-zinc-300 rounded-xl ml-2'>Delete</button>
                      

                </div>


            </div>

            
        </div>
    );
}
FriendsRequest.prototype={
     username: propType.string.isRequired,
     profile: propType.string,
};

FriendsRequest.defaultProps ={
     username:'Anonymous',
     profile:'./user.png',
}
export default FriendsRequest;

