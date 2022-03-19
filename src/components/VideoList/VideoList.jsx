import React from "react";
import {Link} from 'react-router-dom';

const VideoList = ({video, id}) => {

  return(
     <Link
      to={
        video?.snippet?.thumbnails?.high.url
          ? `/video-details/${id}`
          : `/video-details/cV2gBU6hKfY`
      }
      style={{ textDecoration: 'none' }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div
        className='recipe-card'       
      >
            <img src={ video?.snippet?.thumbnails?.high.url ||
                'https://i.pinimg.com/474x/30/88/a3/3088a3ebaf713600adacd00397ee410d.jpg'}
                alt="thumbnail" />
         
              <div className="text">
                  <h3>
                    {video?.snippet?.title}
                  </h3>
                  <p>{video?.snippet?.channelTitle} </p>
              </div>
      </div>
    </Link>
  )
};

export default VideoList;
