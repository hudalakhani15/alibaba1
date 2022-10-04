import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BigCardInner from './BigCardInner';

// import { fontSize } from '@mui/system';

export default function BigCard({Rightimg,h2}) {
  const theme = useTheme();

  return (
      <>
    <Card sx={{ display: 'flex'  , width:"85%" ,margin:"1rem auto",height:"370px"}}>

    <CardMedia
        component="img"
        sx={{ width: 390  }}
        image={Rightimg}
        alt="Live from space album cover"
        
      />

      <h2 style={{position:"absolute" ,
                  marginTop:"40px",
                  width:"270px",
                  marginLeft:"38px",
                  fontWeight:"500",
                  color:"white",
                //   border:"2px solid red",
                  fontSize:"30px",
                  lineHeight:"30x",
                  paddingRight:"30px",
                  textShadow:"0 2px 4px rgb(0 0 0 / 12%)"
                  }}>
          
          {h2} 
     </h2>

     <span style={{
         padding:"10px 16px",
         backgroundColor:"white",
         position:"absolute",
         marginTop:"280px",
         marginLeft:"38px",
         overflow:"hidden",
         fontSize:"20px",
         borderRadius:"20px",
         fontWeight:"500"
     }}>
          Source Now

     </span>

      {/* <img src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"/> */}
      <Box sx={{ display: 'flex' ,width:"auto",flexDirection: 'column' }}>
         <div style={{display:"flex",justifyContent:"space-between" }}>

        <div >
             <BigCardInner 
               icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
               h2="Premium OEM Factories"
               text="Customization service Avail"
               veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
               img="https://s.alicdn.com/@sc04/kf/Hf05dcc64de6248dda23e1d3c13ee7172p.jpg_120x120.jpg"

             />
               <BigCardInner 
               icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
               h2="Delivered Duty Paid"
               text="Include Shipping and duty fees"
               veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
               img="https://s.alicdn.com/@sc04/kf/Hfc02d13dd5724a9c88646363df76c7a7r.jpg_220x220.jpg"

             />
             
        </div>

        <div >
             <BigCardInner 
               icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
               h2="Top sales"
               text="Computer Hardware & Software"
               veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
               img="https://s.alicdn.com/@sc04/kf/Hf75403f8478448f7b8658f99aacbe2b31.png_220x220.png"

             />
               <BigCardInner 
               icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
               h2="Camera  & Accessories"
               text="Customization service Avail"
               veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
               img="https://s.alicdn.com/@sc04/kf/Hfec28163b23c4b4da7dc2af08791f785U.jpg_220x220.jpg"

             />
        </div>


        <div >
             <BigCardInner 
               icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
               h2="Premium OEM Factories"
               text="Customization service Avail"
               veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
               img="https://s.alicdn.com/@sc04/kf/Hfec28163b23c4b4da7dc2af08791f785U.jpg_220x220.jpg"

             />
               <BigCardInner 
               icon="https://img.alicdn.com/tfs/TB1neG1rHj1gK0jSZFOXXc7GpXa-32-32.png"
               h2="Premium OEM Factories"
               text="Customization service Avail"
               veri="https://img.alicdn.com/tfs/TB1d7y4p4jaK1RjSZKzXXXVwXXa-42-10.svg"
               img="https://s.alicdn.com/@sc04/kf/Hfec28163b23c4b4da7dc2af08791f785U.jpg_220x220.jpg"

             />
             
        </div>


        </div>
        
      </Box>
      
     
    </Card>



    </>
  );
}