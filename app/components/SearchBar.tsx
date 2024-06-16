// app/components/SearchBar.tsx
"use client";

import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', margin: 2 }}>
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for car models..."
        variant="outlined"
        sx={{ marginRight: 2 }}
      />
      <Button onClick={handleSearch} variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
}
