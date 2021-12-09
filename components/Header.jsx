import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginModal from '@/components/LoginModal';
import SignupModal from '@/components/SignupModal';

const Header = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HowAboutThis
            <Chip label="Coming soon" color="primary" variant="outlined" sx={{ marginLeft: 2 }} />
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={() => setIsLoginModalOpen(true)}>
              Login
            </Button>
            <Button variant="contained" onClick={() => setIsSignupModalOpen(true)}>
              Sign up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <LoginModal open={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <SignupModal open={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)} />
    </>
  );
};

export default Header;
