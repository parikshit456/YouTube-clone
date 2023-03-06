import { Stack } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCategory, updateSelectedCategory } from '../features/videos/videoSlice';
import { categories } from '../utils/constants'

const Sidebar = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  console.log(selectedCategory)
  const dispatch = useDispatch();
    // const selectedCategory = "New";

    const clickHandler = (categoryName) => {
      dispatch(updateSelectedCategory(categoryName))
    }
  return (
    <Stack  direction="row" sx={{overflowY:"auto",height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}> 
        {categories.map((category)=>{
            return <button onClick={() => clickHandler(category.name)} className='category-btn' style={{backgroundColor: selectedCategory===category.name && "#FC1503",color:"white"}}>
                <span style={{marginRight:"15px",color:category.name===selectedCategory ? "white" : "red"}}>{category.icon}</span>
                <span style={{opacity:category.name===selectedCategory ? "1" :"0.8"}}>{category.name}</span>
            </button>
        })}
    </Stack>
  )
}

export default Sidebar