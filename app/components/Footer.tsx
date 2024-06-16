// app/components/Footer.tsx
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Footer() {
  return (
    <AppBar position="static" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
          &copy; 2024 Car Information
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
