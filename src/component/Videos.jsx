import { Stack,Box } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { getAllVideos } from '../features/videos/videoSlice'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

const Videos = ({direction}) => {
  const videos = useSelector(getAllVideos);
  console.log(videos.items)
  // if(videos!==null ) console.log(videos.payload.items)
  return videos!=null && videos.items!=null && (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start"  >
      {
        (videos.items).map((item,index)=>{
          return <Box key={index} sx={{margin:"10px"}}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}


          </Box>
        })
      }
    </Stack>
  )
}

export default Videos