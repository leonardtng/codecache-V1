import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
// import LoginPopup from './LoginPopup';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { userState } from '../../contexts/UserState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        fontSize: '16px',
        float: 'right',
        marginRight: '9.8%',
      },
    },
    github: {
      padding: '0 9%',
    },
    dialog: {
      '& .MuiDialog-paperWidthSm': {
        maxWidth: 400,
      },
    },
    actions: {
      justifyContent: 'center',
      padding: "5%",
      '& .MuiButton-containedSecondary': {
        backgroundColor: '#24292e',
      },
    },
  }),
);

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginButton: React.FC = () => {
  const classes = useStyles();

  let [showPopup, setShowPopup] = useState(false);

  const handleClickOpen = () => {
    setShowPopup(true);
  };

  const handleClickClose = () => {
    setShowPopup(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" size="small" onClick={handleClickOpen}>
        <GitHubIcon />
        <div className={classes.github}>Login</div>
      </Button>
      <Dialog
        className={classes.dialog}
        open={showPopup}
        TransitionComponent={Transition}
        keepMounted
        disableScrollLock={true}
        onClose={handleClickClose}
        aria-labelledby="login"
        aria-describedby="login-alert"
      >
        <DialogTitle id="login">{"Login with Github"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="login-alert">
            Login with your Github account to link your Github account with CodeCache
          </DialogContentText>
        </DialogContent>
        <userState.Consumer>{({ toggleLogin }) => (
          <DialogActions className={classes.actions}>
            <Button variant="contained" color="secondary" size="small" onClick={toggleLogin}>
              <GitHubIcon />
              <div className={classes.github}>Github</div>
            </Button>
          </DialogActions>
        )}
        </userState.Consumer>
      </Dialog>
    </div>
  );
}

export default LoginButton;