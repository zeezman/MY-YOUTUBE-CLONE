import React from "react"; 
import Sidebar from "../Sidebar/Sidebar";
import VideoDetail from "../VideoDetail/VideoDetail"; 

const Home = () => {
  return ( 
      <main>
          <div className="row">
              <Sidebar />
               <VideoDetail /> 
          </div>
      </main>
  )
};

export default Home;
