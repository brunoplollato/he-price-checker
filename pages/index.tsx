import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import BasicCard from '../src/BasicCard';

interface hero {
  race: string,
  tiers: {
    common: Array<string>,
    rare: Array<string>,
    epic: Array<string>
  }
}

interface Heroes extends Array<hero> {};

const Heroes: Heroes = [
  {
    race: 'beast',
    tiers: {
      common: [
        'wolf',
        'catapult',
        'mutant rabbit'
      ],
      rare: [
        'balerion',
        'chiron',
        'lionidas',
        'zak',
        'rafiki',
        'tusk',
        'bertha'
      ],
      epic: [
        'syllabear'
      ]
    }
  },
  {
    race: 'elf',
    tiers: {
      common: [
        'chiken bomer',
        'fairy dragon',
      ],
      rare: [
        'lynn',
        'gumiho',
        'faegon',
        'golemus',
        'ruvina',
        'tolan',
        'midu'
      ],
      epic: [
        'farah',
        'mrs hazard'
      ]
    }
  },
  {
    race: 'goblin',
    tiers: {
      common: [
        'ballista',
        'trainee sniper',
      ],
      rare: [
        'pigrider',
        'dinger',
        'bomber',
        'timble',
        'diggy',
        'tomee',
        'ragnuk'
      ],
      epic: [
        'lorki',
        'pharmacist'
      ]
    }
  },
  {
    race: 'human',
    tiers: {
      common: [
        'caster minion',
        'warrior minion',
      ],
      rare: [
        'kha',
        'jeatah',
        'durin',
        'vy',
        'akyla'
      ],
      epic: [
        'swift',
        'liona',
        'sonata'
      ]
    }
  },
  {
    race: 'undead',
    tiers: {
      common: [
        'friendly golem',
        'knight minion',
      ],
      rare: [
        'dusk',
        'kaiser',
        'jubaba',
        'leoric',
        'elisa',
        'victor',
        'seth'
      ],
      epic: [
        'haze',
        'keepy',
      ]
    }
  },
];

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {
            Heroes.map((item, index) => (
              <BasicCard heroes={item} />
            ))
          }
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
