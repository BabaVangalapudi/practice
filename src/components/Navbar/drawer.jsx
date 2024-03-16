import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Menu from '@mui/icons-material/Menu';

export default function DrawerMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} >
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
            backgroundColor:'black',
            height:'100%',
            fontWeight:'600'
          }}
        >
          <ListItemButton>Home</ListItemButton>
          <ListItemButton>About</ListItemButton>
          <ListItemButton>Projects</ListItemButton>
          <ListItemButton>Experience</ListItemButton>
          <ListItemButton>Contact</ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
