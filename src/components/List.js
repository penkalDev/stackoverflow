import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const TagList = ({ tags }) => {
    
  return (
    <List>
      {tags && tags.map((tag, index) => (
        <ListItem key={index}>
          <ListItemText primary={tag.name} secondary={`Count: ${tag.count}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default TagList;






