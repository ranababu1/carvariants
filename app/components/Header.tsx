// app/components/Header.tsx
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Car Variants and Prices
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
