"use client";

import { useState } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import ManufacturerCard from './components/ManufacturerCard';
import CarModelDetails from './components/CarModelDetails';
import data from './data/cardata.json';

export default function HomePage() {
  const [selectedManufacturer, setSelectedManufacturer] = useState<any | null>(null);
  const [selectedModel, setSelectedModel] = useState<any | null>(null);
  const [filteredCars, setFilteredCars] = useState(data);
  const [carDetails, setCarDetails] = useState<any | null>(null); // New state for car details

  const handleSearch = (query: string) => {
    const result = data.filter((car) => car.models.some((model) => model.name.toLowerCase().includes(query.toLowerCase())));
    setFilteredCars(result);
  };

  const handleManufacturerSelect = (manufacturer: any) => {
    setSelectedManufacturer(manufacturer);
    setSelectedModel(null);
    setCarDetails(null); // Reset car details
  };

  const handleModelSelect = (model: any) => {
    setSelectedModel(model);
    setCarDetails(null); // Reset car details
  };

  const handleDetailsSelect = (details: any) => {
    setCarDetails(details);
  };

  return (
    <Container sx={{ minHeight: '100vh', paddingTop: 4 }}>
      <SearchBar onSearch={handleSearch} />
      {!carDetails && (
        <Grid container spacing={2}>
          {selectedManufacturer ? (
            selectedManufacturer.models.map((model: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} key={index} onClick={() => handleModelSelect(model)}>
                <ManufacturerCard manufacturer={model.name} onSelect={() => handleModelSelect(model)} />
              </Grid>
            ))
          ) : (
            filteredCars.map((car: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} key={index} onClick={() => handleManufacturerSelect(car)}>
                <ManufacturerCard manufacturer={car.manufacturer} onSelect={() => handleManufacturerSelect(car)} />
              </Grid>
            ))
          )}
        </Grid>
      )}
      {selectedModel && !carDetails && <CarModelDetails model={selectedModel} onDetailsSelect={handleDetailsSelect} />}
      {carDetails && (
        <Box sx={{ margin: 2 }}>
          <Typography variant="h5" sx={{ color: '#D0E355' }}>Car Details</Typography>
          <Typography variant="body1">Type: {carDetails.type}</Typography>
          <Typography variant="body1">Transmission: {carDetails.transmission}</Typography>
          <Typography variant="body1">Price: {carDetails.price}</Typography>
          <Typography variant="body1">Details: {carDetails.details}</Typography>
        </Box>
      )}
    </Container>
  );
}
