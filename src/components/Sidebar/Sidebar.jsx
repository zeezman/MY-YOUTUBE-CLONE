import React,{useState} from "react";
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data'; 
import './sidebar.scss'
import {useGlobalContext} from '../../contexts/Context'

const Sidebar = () => {  
   const { closeSidebar, isSidebarOpen} = useGlobalContext();
 
  return (  
     <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'> 
        <button className='close-btn'   onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul> 
    </aside>
  );
};

export default Sidebar;
 
