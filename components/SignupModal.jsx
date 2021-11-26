import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const modalBoxStyle = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const submitButtonStyle = {
  marginTop: 1,
};

const SignupModal = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose} aria-labelledby="modal-signup-title">
    <Box sx={modalBoxStyle}>
      <Typography id="modal-signup-title" variant="h6" component="h2">
        Sign up
      </Typography>
      <form>
        <TextField
          label="Email"
          variant="outlined"
          size="small"
          margin="dense"
          fullWidth
          required
        />
        <Button sx={submitButtonStyle} type="submit" variant="contained" fullWidth>
          Continue
        </Button>
      </form>
    </Box>
  </Modal>
);

export default SignupModal;
