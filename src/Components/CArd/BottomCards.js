import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BottomCards({img,text,price,des}) {
  return (
    <Card className="btm_card_hover" sx={{ p:"10px",maxWidth: 345 ,height:550,margin:"1rem 0"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="350"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <strong> $ {price} </strong>
        </Typography>
        <Typography variant="body1" color="text.secondary">
           {text}
        </Typography>
      </CardContent>
      <CardActions>
        {des}
      </CardActions>
    </Card>
  );
}