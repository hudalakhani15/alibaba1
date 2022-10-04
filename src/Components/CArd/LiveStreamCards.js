import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function LiveStreamCards({img,text,date}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex',width:"85%",margin:"0 auto" ,height:"300px",boxShadow:"2px 2px 4px 1px gray"}}>
         <CardMedia
        component="img"
        sx={{ width: "35%" }}
        image={img}
        alt="Live from space album cover"
      />

<h4 style={{position:"absolute" ,
                  marginTop:"40px",
                  width:"370px",
                  marginLeft:"38px",
                  fontWeight:"500",
                  color:"white",
                //   border:"2px solid red",
                  fontSize:"30px",
                  lineHeight:"30x",
                  paddingRight:"30px",
                  textShadow:"0 2px 4px rgb(0 0 0 / 12%)"
                  }}>
          
          {/* {h2}  */}

          {text}
     </h4>

      <h3
       style={{
        padding:"10px 16px",
       
        position:"absolute",
        marginTop:"100px",
        marginLeft:"38px",
        overflow:"hidden",
        color:"white",
        fontSize:"20px",
        borderRadius:"20px",
        fontWeight:"500"
    }}
      
      >{date} </h3>

     <span style={{
         padding:"10px 16px",
         backgroundColor:"black",
         position:"absolute",
         marginTop:"220px",
         marginLeft:"38px",
         overflow:"hidden",
         color:"white",
         fontSize:"20px",
         borderRadius:"20px",
         fontWeight:"500"
     }}>
          view More

     </span>


      <Box sx={{ display: 'flex', flexDirection: 'column' ,alignItems:"center",width:"32%"}}>
        <CardContent sx={{ flex: '1 auto' ,margin:"0 auto"}}>
          
             <img src="	https://s.alicdn.com/@sc04/kf/H9737a474942e422cb2e6041365d9222dc.jpg_220x220.jpg" height="150" alt="img"/>

        </CardContent>
        <Box sx={{ display: 'flex',flexDirection:"column", alignItems: 'center', pl: 1, pb: 1 ,margin:"1rem auto"}}>
         
         <strong>Rs 555.16</strong>
         <img src="https://img.alicdn.com/imgextra/i3/O1CN01PlLiQH1nh0ZGfyQ3W_!!6000000005120-1-tps-51-45.gif
" height="20"/>
          
        </Box>
      </Box>



      <Box sx={{ display: 'flex', flexDirection: 'column',width:"32%"}}>
        <CardContent sx={{ flex: '1 auto' ,margin:"0 auto"}}>
          
             <img src="	https://s.alicdn.com/@sc04/kf/Hc828e3413b324b68ad7c1a20181c2a6a3.jpg_220x220.jpg" height="150" alt="img"/>

        </CardContent>
        <Box sx={{ display: 'flex',flexDirection:"column", alignItems: 'center', pl: 1, pb: 1 ,margin:"1rem auto"}}>
         
         <strong>Rs 3,44.16</strong>
         <img src="https://img.alicdn.com/imgextra/i3/O1CN01PlLiQH1nh0ZGfyQ3W_!!6000000005120-1-tps-51-45.gif
" height="20"/>
          
        </Box>
      </Box>
     
    </Card>
  );
}