import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React,{useEffect} from 'react'
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchAsyncDetails, fetchAsyncVideos, getAllDetails, getAllVideos, getLoading, removeDetails, removeVideos } from '../features/videos/videoSlice';
import Videos from './Videos';

const VideoDetail = () => {
  const videoDetails =  useSelector(getAllDetails);
  const isloading = useSelector(getLoading);
 console.log(isloading)
  console.log(videoDetails)
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncDetails(`videos?part=snippet,statistics&id=${id}`))
    dispatch(fetchAsyncVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`))
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
    return ()=>{
      dispatch(removeVideos())
      dispatch(removeDetails())
    }
  }, [id,dispatch]);
  return(
    <Box minHeight="95vh">
     {isloading ? <div style={{color:"white",textAlign:"center",marginTop:"100px"}}>Loading...</div> :  <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
           {videoDetails.snippet && <Typography color="#fff" variant='subtitle1' fontWeight="bold" px={2} py={1.5}>{videoDetails.snippet.title || ""}</Typography>} 
          { videoDetails.snippet &&  <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} px={2}>
              <Link to={`/channel/${videoDetails.snippet.channelId}`}>
                <Typography color="#fff" variant={{sm:'subtitle1',md:'subtitle2'}}>{videoDetails.snippet.channelTitle || ""}</Typography>
                <CheckCircle sx={{fontSize:'12px', color:'gray',ml:'5px'}} />
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity:0.7}}>{parseInt(videoDetails.statistics.viewCount).toLocaleString()} views</Typography>
                <Typography variant='body1' sx={{ opacity:0.7}}>{parseInt(videoDetails.statistics.likeCount).toLocaleString()} likes</Typography>
              
              </Stack>
            </Stack>}
          </Box>
        </Box>
      <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center"><Videos direction="column"/></Box>

      </Stack>}
    </Box>
  )
}

export default VideoDetail