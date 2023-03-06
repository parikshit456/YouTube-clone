import { Box } from '@mui/material';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncDetails, fetchAsyncVideos, getAllVideos,getAllDetails, removeVideos, removeDetails } from '../features/videos/videoSlice';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
  const {id} = useParams();
  const channelDetail = useSelector(getAllDetails);
  console.log(channelDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncDetails(`channels?part=snippet&id=${id}`))
    dispatch(fetchAsyncVideos(`search?channelId=${id}&part=snippet&order=date`))
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
    return ()=>{
      dispatch(removeVideos())
      dispatch(removeDetails())
    }

  }, [id,dispatch]);
  return (        
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background:  'linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%)',
          zIndex:10,
          height:'300px'
        }} />

       {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>} 
      </Box>
      <Box display="flex" p={2} >
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos />
      </Box>
    </Box>
  )
}

export default ChannelDetail