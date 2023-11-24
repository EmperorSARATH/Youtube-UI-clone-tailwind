import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Sarath from '../assets/sarath.jpg';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2} className='mt-3'>
      <Avatar alt="Sarath" src={Sarath} /> 
    </Stack>
  );
}
