import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import "../CssFiles/Navbar.css"
import Input from "./Input"
import { Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';



export default function MenuAppBar() {
  // const [auth, setAuth] = React.useState(true);
  //  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    // setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
    <Box className="box_nav" >
     
  
      <AppBar position="fixed" top="4rem"
      sx={{boxShadow:"none", position:"fixed", top:"0",backgroundColor:"white",display:"flex",flexDirection:"row",justifyContent:"space-between" , alignItems:"center" ,pl:"20px",pr:"20px"}}
      className="box_nav"
       >
        

          
          <div> <img  alt="logo" src="https://gw.alicdn.com/tfs/TB1hVGkvVP7gK0jSZFjXXc5aXXa-365-49.svg" width="250"/> </div>
          

           <Grid sm={9} lg={6}className="nv_input">

             <div> <Input /> </div>

            </Grid>

          
            <Grid lg={3} >
             <div>

            {/* {auth && (
              <> */}
              <div style={{color:"gray",display:"flex",alignItems:"center"}}>
              <IconButton
                
                onClick={handleMenu}
                
              >
                <PersonIcon sx={{padding:"1" , margin:"1", fontSize:"25px"}} />
              </IconButton>

                <div>
                 <Typography>Sign In</Typography>
                 <Typography>Join Free</Typography>
    
                 </div>


                  
                  <div style={{display:"flex",justifyContent:"space-around",alignItems :"center" ,width:"50%"}}>
                  <div>
                 <IconButton  sx={{padding:"1" , margin:"1"}}  >
                <SmsOutlinedIcon sx={{fontSize:"15px"}} />
              </IconButton>
              
                 <Typography>Message</Typography>
                 
               
    
                 
                 </div>


                 <div>
                 <IconButton  sx={{padding:"1" , margin:"1"}}  >
                <LocalAtmOutlinedIcon sx={{fontSize:"15px"}} />
              </IconButton>
              
                 <Typography>Dollars</Typography>
                 
               
    
                 
                 </div>


                 <div>
                 <IconButton  sx={{padding:"1"}}  >
                <ShoppingCartOutlinedIcon sx={{fontSize:"15px"}} />
              </IconButton>
              
                 <Typography>Cart</Typography>
                 
               
    
                 
                 </div>
                 </div>
                 </div>

    
               
{/*               
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem  onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Grid>
                    <h1>aojdsj</h1>
                </Grid>
              </Menu>
           
           
           
            </>
            
          )} */}
              </div>
          </Grid>
          
            
          

       
      </AppBar>
      
    </Box>
    
    </>
  );
}