
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import CommentIcon from '@mui/icons-material/Comment';
// import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function GutterlessList() {
  return (
    <List sx={{ width: '100%', maxWidth: "100%", }}>
      {[
          "Machinery / Vehicles & Accessories",
          "Consumer Electronics / Home Appliances",
          "Apparel / Fashion Accessories",
          "Lights & Lighting / Construction & Real state",
          "Home & Garden / Furniture",
          "Lights & Lighting / Construction & Real state",
          "Consumer Electronics / Home Appliances",
          "Machinery / Vehicles & Accessories",
          "Machinery / Vehicles & Accessories",
          



      ].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
          
              <KeyboardArrowRightIcon fontSize="medium" className="modal_ic"/>
           
          }
          className="modal_list"
        >
          <ListItemText primary={value} />
        </ListItem>
      ))}
    </List>
  );
}