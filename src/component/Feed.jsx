import React,{useEffect} from 'react'

import { Box,Stack,Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import {fetchFromApi} from '../utils/fetchFromApi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncVideos, getAllVideos, getSelectedCategory, removeVideos } from '../features/videos/videoSlice'

const Feed = () => {
    const selectedCategory = useSelector(getSelectedCategory)

    // console.log(selectedCategory)
    const dispatch = useDispatch();
    useEffect(() => {
        

        // fetchFromApi('search?part=snippet&q=New').then((data) =>{
        //     console.log(data);
        // })
    console.log(selectedCategory)

        dispatch(fetchAsyncVideos(`search?part=snippet&q=${selectedCategory}`))
        window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
        return ()=>{
            dispatch(removeVideos())
          }
    }, [selectedCategory,dispatch]);
  return (
    <Stack sx={{
        flexDirection:{sx:"column",md:"row"}
    }}>
         <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d', px:{sx:0,md:2}}}>
            <Sidebar />
         <Typography className="copyright" variant='body2' sx={{mt:1.5,color:'#fff'}}>Copyright 2023</Typography>

         </Box>
         <Box p={2} sx={{overflowY:"auto", height:'90vh',flex:2}}>
            <Typography variant='h4' fontWeight="bold" mb={2} sx={{
                color:"white"
            }}>
             {selectedCategory} <span style={{color:"#FC1503"}}>videos</span>
            </Typography>
            <Videos />
         </Box>
    </Stack>
  )
}

export default Feed