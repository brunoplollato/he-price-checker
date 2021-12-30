import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect } from 'react';

interface hero {
  race: string,
  tiers: {
    common: Array<string>,
    rare: Array<string>,
    epic: Array<string>
  }
}

interface Heroes extends Array<hero> {};

type Rows = Row[]

type Row = {
  id: string,
  name: string,
  value: number
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Hero',
    width: 170,
    headerAlign: 'center',
  },
  {
    field: 'value',
    headerName: 'Price',
    width: 20,
    headerAlign: 'center',
  },
];

export default function BasicCard(heroes: heroes) {
  const rows: Rows = [];

  const fetchPrice = async (hero: string, tier: string) => {
    const res = await fetch(`https://marketplace-api.heroesempires.com/sale-items?class&desc=false&listedOnMarket=true&maxPrice&minPrice&orderBy=price&page=1&race&search=${hero}&size=1&tier=${tier}`)
    const { data } = await res.json();
    rows.push({
      id: data.items[0].id,
      name: data.items[0].name,
      value: data.items[0].sale.price
    })
  };
  
  useEffect(() => {
    heroes.heroes?.tiers?.common.map((hero: string) => {
      fetchPrice(hero, 'Common')
    });
    heroes.heroes?.tiers?.rare.map((hero: string) => {
      fetchPrice(hero, 'Rare')
    });
    heroes.heroes?.tiers?.epic.map((hero: string) => {
      fetchPrice(hero, 'Epic')
    });

  }, []);
  const avgPrice = rows.length > 0 ? rows?.map(({ value }) => value)?.reduce((a, b) => a + b) / rows?.length : 0;


  return (
    <Card sx={{
      minWidth: 275,
      margin: 3,
    }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {(heroes.heroes.race).charAt(0).toUpperCase() + (heroes.heroes.race).slice(1)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          { avgPrice } (HE)
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooterPagination={true}
            sx={{
              border: 0,
              '& .MuiDataGrid-columnHeaders': {
                display: 'none',
              },
            }}
          />
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}