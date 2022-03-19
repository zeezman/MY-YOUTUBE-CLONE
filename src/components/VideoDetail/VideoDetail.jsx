import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import ReactPlayer from 'react-player';
import {useGlobalContext} from '../../contexts/Context';
import VideoList from '../VideoList/VideoList';
import './videoDetail.scss';

const VideoDetail = () => { 
  const {id} = useParams()
  const {data, fetchData, fetchOtherData, results} = useGlobalContext()
  const [videoDetail, setVideoDetail] = useState(); 
  

  useEffect(() => {
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`);
    fetchOtherData(`videos?part=snippet,statistics&id=${id}`);
  }, [id]); 

  useEffect(() => {
    setVideoDetail(results[0]);
  }, [results]);

  if (videoDetail?.snippet?.title) {
    document.title = videoDetail?.snippet?.title;
  }
  

  return (  
      <>
        {VideoDetail && (
          <div className="row"> 
                   <div className='video-detail'>
                            <ReactPlayer
                              className='video-card'
                              controls
                              url={`https://www.youtube.com/watch?v=${id}`}
                            />
                                <h2>
                                  {videoDetail?.snippet?.title}
                                </h2> 
                                 <p>{videoDetail?.snippet?.description} </p>

                              <div className='headers'>
                                  <div >
                                      <h3 style={{ marginBottom: '5px' }}>
                                        {parseInt(
                                          videoDetail?.statistics?.viewCount
                                        ).toLocaleString('en-US')}{' '}
                                        views
                                      </h3>
                                    {/* <Typography>{videoDetail?.snippet?.publishedAt}</Typography> */}
                                  </div>

                                  <div
                                    style={{
                                      opacity: 0.7,
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      gap: 3,
                                    }}
                                    className='like-dislike'
                                  >
                                              {/* <Typography
                                                sx={{
                                                  marginBottom: '5px',
                                                  display: 'flex',
                                                  justifyContent: 'flex-start',
                                                  alignItems: 'center',
                                                  gap: 1,
                                                }}
                                              >
                                                <ThumbUpAltOutlinedIcon />
                                              <Typography>
                                                {parseInt(
                                                  videoDetail?.statistics?.likeCount
                                                ).toLocaleString('en-US')}
                                              </Typography>
                                            </Typography> */}
                                          {/* <Typography
                                            sx={{
                                              marginBottom: '5px',
                                              display: 'flex',
                                              justifyContent: 'flex-start',
                                              alignItems: 'center',
                                              gap: 1,
                                            }}
                                          >
                                            <ThumbDownAltOutlinedIcon />
                                            <Typography>
                                              {parseInt(
                                                videoDetail?.statistics?.dislikeCount
                                              ).toLocaleString('en-US')}
                                            </Typography>
                                          </Typography> */}
                                  </div>
                              </div>
                  </div>
               

                        {/* video list section */}
                <div className='related-videos'>
                    <h3 className='sm' >
                      Similar Videos
                    </h3>

                    <div className='related-videos-container'>
                      {data?.map((video) => (
                        <VideoList
                          video={video}
                          id={(video.id.videoId && video.id.videoId) || video.id}
                          key={(video.id.videoId && video.id.videoId) || video.id}
                        />
                      ))}
                    </div>
              </div>
            
          </div>
            

        )}
      </>
          
  );
};

export default VideoDetail;
