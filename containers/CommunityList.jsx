import { useQuery } from 'react-query';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import { getCommunities } from '@/api/community';

const CommunityListItem = ({ item }) => (
  <ListItem key={item.key} disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <Avatar>H</Avatar>
      </ListItemIcon>
      <ListItemText primary={item.name} secondary={item.key} />
    </ListItemButton>
  </ListItem>
);

const CommunityListItemSkeleton = () => (
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <Skeleton variant="circular" width={40} height={40} />
      </ListItemIcon>
      <Skeleton variant="rectangular" width="100%" height={40} />
    </ListItemButton>
  </ListItem>
);

const CommunityList = () => {
  const { data: communities } = useQuery('communities', async () => {
    const res = await getCommunities;
    return res.data;
  });

  return (
    <Paper>
      <List subheader={<ListSubheader component="div">Communities</ListSubheader>}>
        {communities ? (
          communities.map((item) => <CommunityListItem key={item.key} item={item} />)
        ) : (
          <>
            <CommunityListItemSkeleton />
            <CommunityListItemSkeleton />
            <CommunityListItemSkeleton />
          </>
        )}
      </List>
    </Paper>
  );
};

export default CommunityList;
