import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
// import img from "../../images/1.png"
export default function CheckboxListSecondary({img}) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '120%',  bgcolor: 'white' }}>
      {[
          "Consumers Electronics",
          "Apparel",
          "Vehicles & Accessories",
          "Sports & Entertainment",
          "Machinery",
          "Home & GArden",
          "Beauty & Personal Care",
          "All Categories"
          
      ].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            sx={{height:"55px",fontWeight:"bold"}}
            key={value}
            secondaryAction={
              <KeyboardArrowRightIcon
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${img}.jpg`}
                  
                />
              </ListItemAvatar>
             {value}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}