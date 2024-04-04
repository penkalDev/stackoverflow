import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function Sort({ value, onChange }) {
  return (
    
    <div>
        <InputLabel id="sort-label">Sort by</InputLabel>
        <FormControl fullWidth>
        
          <Select
            labelId="sort-label"
            id="sort-select"
            value={value}
            onChange={onChange}
          >
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="name">Name</MenuItem>
          </Select>
        </FormControl>
    </div>
  );
}

export default Sort;

