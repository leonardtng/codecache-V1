import React, { useState } from 'react'
import LoginButton from './LoginButton';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Zoom from '@material-ui/core/Zoom';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

interface LoginAlertProps {
  color: string;
}

const LoginAlert: React.FC<LoginAlertProps> = (props: LoginAlertProps ) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="likes" style={{ color: props.color }} onClick={handleClickOpen}>
        <ThumbUpAltIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        disableScrollLock={true}
        aria-labelledby="login-alert"
        aria-describedby="user-needs-to-login-to-access-this-function"
      >
        <DialogTitle id="login-alert">{"You are not logged in"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="user-needs-to-login-to-access-this-function">
            You need to login to like projects. Login now?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoginButton />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginAlert;
