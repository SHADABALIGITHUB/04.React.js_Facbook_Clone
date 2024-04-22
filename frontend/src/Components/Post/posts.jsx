import React from 'react';
import PostHeader from './PostHeader';
import PostFotter from './PostFotter';

const Posts = (props) => {
    return (
        <div className='w-full'>

              <PostHeader Logo={props.PostLogo} Title={props.PostTitle}/>

              <div className='w-full h-96 bg-red-500 overflow-hidden flex'>
                 <img src={props.PostImage} alt="okey" className='object-fill w-full' />
              </div>

              <PostFotter/>



              
            
        </div>
    );
}

export default Posts;
