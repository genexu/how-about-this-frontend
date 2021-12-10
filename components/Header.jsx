import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginModal from '@/components/LoginModal';
import SignupModal from '@/components/SignupModal';
import { useUserMe } from '@/hooks/queries/user';

const Header = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { data: user } = useUserMe();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HowAboutThis
            <Chip label="Coming soon" color="primary" variant="outlined" sx={{ marginLeft: 2 }} />
          </Typography>
          <Stack direction="row" spacing={2}>
            {user ? (
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary={user.username} secondary={user.account} />
              </ListItemButton>
            ) : (
              <>
                <Button variant="outlined" onClick={() => setIsLoginModalOpen(true)}>
                  Login
                </Button>
                <Button variant="contained" onClick={() => setIsSignupModalOpen(true)}>
                  Sign up
                </Button>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <LoginModal open={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <SignupModal open={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />
    </>
  );
};

export default Header;
