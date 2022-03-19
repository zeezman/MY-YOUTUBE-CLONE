import React from "react"; 
import YOUTUBE from '../../assets/youTube1.png'
import Avatar from 'react-avatar';
import {GiHamburgerMenu} from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import { MdOutlineApps} from 'react-icons/md';
import { MdVideoCall} from 'react-icons/md';
import {GrMicrophone } from 'react-icons/gr';
import {IoMdNotifications } from 'react-icons/io'; 
import './navbar.scss' 
import {useGlobalContext} from '../../contexts/Context'

const Navbar = () => {
const {SearchTerm, setSearchTerm} = useGlobalContext();
 const { openSidebar} = useGlobalContext();
const { fetchData } = useGlobalContext();

    const handleSubmit = (e) => { 
        e.preventDefault();
        fetchData(`search?part=snippet&q=${SearchTerm}`);
    }

    const searchVideo = (e) => {
            setSearchTerm(e.target.value)
        }
  return (
        <header className="header"> 
           <div className="app__container">
               <div className="row">
                   <div className="nav__left">                        
                       <a className="icon" onClick={openSidebar}> <GiHamburgerMenu /></a>
                        <img src={YOUTUBE} alt="youtube logo" className="yt"/>
                   </div>
                   <div className="nav__center">
                        <form className='search-form' onSubmit={handleSubmit}> 
                                <input
                                    type='text' 
                                    id='name'
                                    placeholder="search..."
                                    value={SearchTerm}
                                    onChange={searchVideo}
                                /> 
                                <a href="" className="icon--s">
                                    <GoSearch />
                                </a>  
                                 <a href="" className="icon--s"  >
                                    <GrMicrophone /> 
                                 </a>
                               
                            </form>  
                           
                            
                   </div>
                   <div className="nav__right">
                       <ul>
                           <li> 
                               <a href=" "><MdVideoCall /></a>
                               <a href=" "> <MdOutlineApps /></a>
                               <a href=" "> <IoMdNotifications /> </a>                        
                           </li>
                       </ul>
                        
                        
                   
                <Avatar name="azeez" size={40} round="200px" />
                   </div>
               </div>              
               
            </div>  
            {/* <Avatar size="100" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" /> */}
        </header>
  );

};

export default Navbar; 