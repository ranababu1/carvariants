import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onSelect(event.target.value);
  };

  return (
    <FormControl fullWidth sx={{ marginY: 1 }}>
      <InputLabel>{label}</InputLabel>
      <Select onChange={handleChange} label={label} defaultValue="">
        <MenuItem value="">
          <em>Select {label}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;