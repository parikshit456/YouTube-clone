import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { Box,Typography } from '@mui/material'
import Videos from './Videos'
import { useDispatch } from 'react-redux'
import { fetchAsyncVideos, removeVideos } from '../features/videos/videoSlice'

const SearchFeed = () => {
const {searchTerm} = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAsyncVideos(`search?part=snippet&q=${searchTerm}`))
      dispatch(removeVideos());
  }, [searchTerm]);
  return (
    <Box p={2} sx={{overflowY:"auto", height:'90vh',flex:2}}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{
        color:"white"
    }}>
     Search Results for: <span style={{color:"#FC1503"}}>{searchTerm}</span> videos
    </Typography>
    <Box display="flex" p={2} >
        <Box sx={{mr:{sm:'100px'}}} />
          <Videos />
      </Box>
 </Box>
  )
}

export default SearchFeed