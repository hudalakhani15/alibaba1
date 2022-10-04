import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Typography } from '@mui/material';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{  display: 'flex', alignItems: 'center', width: "100%" ,borderRadius:" 50px" }}
    >
        <div style={{width:"18%", borderRight:"1px solid darkgray" ,height:"50px"}}>
         <select style={{height:"40px",width:"80%",border:"none",outline:"none" ,fontSize:"1.1rem",fontWeight:"200",color:"black",margin:"5px 15px"}}>
             <option>Products</option>
             <option>Suppliers</option>

         </select>
         </div>
      
      <InputBase
        sx={{ ml: 1, flex: 1 ,fontSize:"20px",fontWeight:"bold",boxShadow:"none"}}
        placeholder="What Are You Looking for..."
        inputProps={{ 'aria-label': 'What Are You Looking for...' }}
      />
     
      <IconButton fontSize="small" sx={{ p: '10px' ,color:"gray" }}>
        <CameraAltOutlinedIcon />
      </IconButton>

      {/* <Divider sx={{ height: 28, m: 0.8 }} orientation="vertical" /> */}
       <Button sx={{
       width:"20%",backgroundColor:" #eb6709 ",
       borderTopRightRadius:"50px",borderBottomRightRadius:"50px",
       height:"50px",
       color:"white",
       '&:hover': {
        background: "#f00",
     },
       }}> <IconButton type="submit"  aria-label="search"> 
        <SearchIcon fontSize="medium" sx={{color:"white"}}/>  
        
      </IconButton>
      <Typography sx={{color:"white",fontSize:"20px",textTransform:"capitalize"}}> Search </Typography>
      </Button>
    </Paper>
  );
}
