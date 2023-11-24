 
import * as React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';

import Badge from '@mui/material/Badge';

export default function BadgeIcon(){
return (
    <MenuItem className='mr-0 p-0 ml-0'>
        <IconButton
          size="small"
          aria-label="show 17 new notifications"
          color="success"
        >
          <Badge badgeContent={7} color="error">
            <NotificationsIcon className='text-gray-50' />
          </Badge>
        </IconButton> 
      </MenuItem> 
);

}

