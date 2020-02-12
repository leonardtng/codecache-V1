import React, { useState } from 'react'
import LoginButton from './LoginButton';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

interface Props {
  color: string;
}

const LoginAlert: React.FC<Props> = ({ color }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="likes" style={{ color: color }} onClick={handleClickOpen}>
        <ThumbUpAltIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
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
