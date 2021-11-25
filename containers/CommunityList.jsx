import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

const CommunityList = () => {
  return (
    <Paper>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>H</Avatar>
            </ListItemIcon>
            <ListItemText primary="-" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>H</Avatar>
            </ListItemIcon>
            <ListItemText primary="-" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>H</Avatar>
            </ListItemIcon>
            <ListItemText primary="-" />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
};

export default CommunityList;
