// app/components/CarModelDetails.tsx
"use client";

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Dropdown from './Dropdown';

export default function CarModelDetails({ model, onDetailsSelect }: { model: any, onDetailsSelect: (details: any) => void }) {
  const [transmission, setTransmission] = useState('');
  const [fuelType, setFuelType] = useState('');

  const handleSelect = () => {
    const selectedVariant = model.variants.find((variant: any) => variant.transmission === transmission && variant.type === fuelType);
    onDetailsSelect(selectedVariant);
  };

  return (
    <Box sx={{ margin: 2 }}>
      <Typography variant="h6">{model.name}</Typography>
      <Dropdown options={['Manual', 'Automatic']} onSelect={setTransmission} label="Transmission" />
      <Dropdown options={['Petrol', 'Diesel', 'Electric', 'Hybrid']} onSelect={setFuelType} label="Fuel Type" />
      <Button onClick={handleSelect} variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Show Details
      </Button>
    </Box>
  );
}
