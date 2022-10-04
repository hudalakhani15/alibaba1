import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "../../CssFiles/Navbar.css"


const ExpandMore = styled((props) => {
    console.log(props)
    
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
    const {logo,tittle,img1,img2,desc} = props
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <>
    <Card className="Card_style">
      
           <div style={{display:"flex",alignItems:"center" ,height:"80px",margin:"0 1rem"}}>
            <img src={logo} alt="s" height="25" />          
            <h3 style={{marginLeft:"10px"}}> {tittle}</h3>
             </div>
        
      

      
      <div style={{display :"flex",justifyContent:"space-around",margin:"0 auto"}}>
      <CardMedia
        component="img"
        height="154"
        image={img1}
        alt="Paella dish"
         className="imgCard"
        style={{width:"170px"}}
       
      />

       <CardMedia
        component="img"
        height="154"
        image={img2}
        alt="Paella dish"
        className="imgCard"
        sx={{width:"170px",}}
      />
     
      </div>
       
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",textAlign:"center",margin:"1.5rem 0"}}>
         <div>
             <h3>{desc}</h3>
             <p style={{color:"gray",fontSize:"1.1rem",fontWeight:"400"}}>{desc}</p>
        </div>


       <div>
           <h3>{desc}</h3>
           <p style={{color:"gray",fontSize:"1.1rem",fontWeight:"400"}}>{desc}</p>
       </div></div>
    
     
        
          
        
      
    </Card>
    
    </>
  );
}