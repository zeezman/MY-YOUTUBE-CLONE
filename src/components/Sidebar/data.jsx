import React from 'react';
import { AiFillHome } from 'react-icons/ai'; 
import { MdExplore } from 'react-icons/md'; 
import { SiYoutubestudio } from 'react-icons/si'; 
import { RiVideoFill } from 'react-icons/ri'; 
import { AiOutlineHistory } from 'react-icons/ai'; 
import { MdVideoLibrary } from 'react-icons/md'; 
import { MdSubscriptions } from 'react-icons/md'; 
import { MdOutlineWatchLater } from 'react-icons/md'; 
import { AiOutlineLike } from 'react-icons/ai'; 

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <AiFillHome/>,      
  },
  { 
    id: 2,
    url: '/explore',
    text: 'Explore',
    icon:  <MdExplore/>,
  },
  {
    id: 3,
    url: '/Shorts',
    text: 'Shorts',
    icon:  <SiYoutubestudio/>,
  },
  {
    id: 4,
    url: '/Subscriptions',
    text: 'Subscriptions',
    icon: <MdSubscriptions/>,
  }, 
  {
    id: 5,
    url: '/Library',
    text: 'Library',
    icon:  <MdVideoLibrary/>,
  },
  {
    id: 6,
    url: '/History',
    text: 'History',
    icon: <AiOutlineHistory /> ,
  },{
    id: 7,
    url: '/Your Videos',
    text: 'Your Videos',
    icon:  <RiVideoFill/> ,
  },{
    id: 8,
    url: '/Watch Later',
    text: 'Watch Later',
    icon: <MdOutlineWatchLater/>,
  },{
    id: 9,
    url: '/Liked Videos',
    text: 'Liked Videos',
    icon:  <AiOutlineLike/> ,
  }, 
];
 