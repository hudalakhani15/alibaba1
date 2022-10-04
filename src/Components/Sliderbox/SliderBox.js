import * as React from 'react';
import Box from '@mui/material/Box';
import SliderBoxItem from "./SliderBoxItems";
import ImgSlider from "./Imgslider"


 function BoxSx() {
  return (
    <>
    <Box
      sx={{
        width: "80%",
        height: 550,
        dispaly:"flex",
        backgroundColor: 'white',
        margin:"2rem auto",
        border:"1px solid lightgray",
        boxShadow:"1px 1px 5px 1px lightgray"
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}

     
    >

      
      
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px auto"}}>
       
      <div>
      <h1 style={{margin:"1rem 2rem"}}>My Markets</h1>
      <hr/>
    <SliderBoxItem
       img="https://sc02.alicdn.com/kf/HTB1gUuPUkzoK1RjSZFl761i4VXaw.png_50x50xz.jpg"/>
   </div>
             {/* img="https://sc02.alicdn.com/kf/HTB12RuNUmzqK1RjSZFH7623CpXa6.png_50x50xz.jpg" */}

       <ImgSlider />

       </div>
      </Box>

    </>
  );
}

export default BoxSx  