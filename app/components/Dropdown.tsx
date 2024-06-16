// app/components/Dropdown.tsx
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Dropdown({ options, onSelect, label }: { options: string[], onSelect: (option: string) => void, label: string }) {
  return (
    <FormControl fullWidth sx={{ marginY: 1 }}>
      <InputLabel>{label}</InputLabel>
      <Select onChange={(e) => onSelect(e.target.value)} label={label}>
        <MenuItem value="">
          <em>Select {label}</em>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
