import React from 'react';
import Profile from '../Main/Profile';
import ContainerStory from '../Story/Container';
import Posts from '../Post/posts'

const HomeContainer = () => {
    return (
       <>
          <Profile/>
               <hr className='border-2' />
               <ContainerStory/>
               <hr className='border-4' />
               <Posts PostImage="did.jpeg" PostLogo="apna_college.png" PostTitle="Apna College"/>
               <hr className='border-4' />
               <hr className='border-4' />
               <Posts PostImage="okey.png" PostLogo="react.png" PostTitle="React Dev" />
               <hr className='border-4' /><hr className='border-4' />
               <Posts />
               <hr className='border-4' /><hr className='border-4' />
               <Posts/>
               <hr className='border-4' />
</>
    );
}

export default HomeContainer;
