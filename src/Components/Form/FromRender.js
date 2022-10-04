import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

const FromRender = () => {
    return (
        <div style={{width:"85%",margin:"2rem auto"}}>
            <div style={{display:"flex",alignItems:"center" , margin:"1rem 0"}}>
            <img height="40" src="https://img.alicdn.com/tfs/TB1BNqtyND1gK0jSZFKXXcJrVXa-96-68.png" alt="logo"/>
            <h1 style={{margin:"0 1rem"}}>REQUEST FOR QUOTATION</h1>
            <p style={{color:"gray",fontWeight:"bold",fontSize:"1.2rem"}}>Custom service...</p>
            </div>



            <div
                style={{display:"flex", position:"relative"}}
            >
                <div style={{width:"50%"}}>
                <img width="600" height="375" src="https://img.alicdn.com/tfs/TB1RrnvyuT2gK0jSZFvXXXnFXXa-800-375.png" alt="img"/>
                 <h1
                    style={{
                        position:"absolute",
                        top:"10px",
                        color:"white",
                        left:"50px"
                    }}
                 
                 >Global Sourcing Marketplace
                 
                 </h1>


                 <h2
                    style={{
                        position:"absolute",
                        top:"100px",
                        color:"white",
                        left:"50px"
                    }}
                 
                 >RFQs 1888900+
                 
                 </h2>


                 <h2
                    style={{
                        position:"absolute",
                        top:"100px",
                        color:"white",
                        left:"290px"
                    }}
                 
                   >
                       21H Avg Quotation                 
                 </h2>


                 <Button
                    style={{
                        position:"absolute",
                        bottom:"30px",
                        color:"white",
                        left:"50px",
                        border:"2px solid white"
                    }}
                 
                 >Learn more
                 
                 </Button>
                </div>

                <div style={{border:"10px solid #9999",width:"65%"}}>

       



    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '90%',margin:"1rem auto",justifyContent:"center",textAlign:"center"},
      }}
      noValidate
      autoComplete="off"
    >
        <h1 >One Request, Multiple Quotes </h1>
        <p>
"Voodoo Incense Burner" from  G***** received 3 quotation(s)
  </p>


      <TextField placeholder="What are you Looking for.." id="outlined-basic" label="Outlined" variant="outlined" style={{width:"85%",margin:"20px"}}/>
      <TextField placeholder="Quantity" id="outlined-basic" label="Outlined" variant="outlined" style={{width:"40%",margin:"20px"}}/>
      <TextField placeholder="  Piece/Pieces" id="outlined-basic" label="Outlined" variant="outlined" style={{width:"40%",margin:"20px"}}/>
      <Button style={{backgroundColor:"darkorange",width:"30%",color:"White",fontWeight:"bold",fontSize:"0.9rem",margin:"0 1.5rem"}}>Request For Quotation</Button>
     
    </Box>
 
                
                    </div>
            </div>
        </div>
    )
}

export default FromRender
