// app/components/ManufacturerCard.tsx
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

export default function ManufacturerCard({ manufacturer, onSelect }: { manufacturer: string, onSelect: () => void }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardActionArea onClick={onSelect}>
        <CardContent>
          <Typography variant="h5" component="div">
            {manufacturer}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
