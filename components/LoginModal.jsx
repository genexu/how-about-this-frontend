import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { AuthContext, actions as authActions } from '@/containers/AuthProvider';
import { auth } from '@/api/auth';

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

const LoginModal = ({ open, onClose }) => {
  const { dispatch } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const { isLoading, mutateAsync } = useMutation(
    async ({ account, password }) => {
      const res = await auth({ account, password });
      return res.data;
    },
    {
      onSuccess: (data) => {
        dispatch({
          type: authActions.SET_AUTH_DATA,
          payload: { token: data.token, expiresAt: data.expires_at },
        });

        onClose();
      },
    },
  );

  const onSubmit = async (data) => {
    const { account, password } = data;
    await mutateAsync({ account, password });
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-login-title">
      <Box sx={modalBoxStyle}>
        <Typography id="modal-login-title" variant="h6" component="h2">
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('account')}
            label="Account"
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            required
          />
          <TextField
            {...register('password')}
            label="Password"
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
            required
          />
          <Button
            sx={submitButtonStyle}
            type="submit"
            variant="contained"
            disabled={isLoading}
            fullWidth
          >
            Login
          </Button>
          {isLoading && <LinearProgress />}
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
