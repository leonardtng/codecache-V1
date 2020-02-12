import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { userState } from '../contexts/UserState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    popup: {
      position: 'absolute',
      left: '40%',
      right: '40%',
      top: '25%',
      bottom: '25%',
      margin: 'auto',
      borderRadius: '20px',
      background: '#ffffff',
    },
    ghlogin: {
      position: 'relative',
      width: '80%',
      top: '10%',
    },
    ghsignup: {
      position: 'relative',
      width: '80%',
      top: '70%',
    },
  }),
);

const LoginPopup: React.FC = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <userState.Consumer>{({ toggleLogin }) => (
        <div className={classes.popup}>
          <Button className={classes.ghlogin} variant="contained" color="primary" onClick={toggleLogin}>
            Login with Github
          </Button>
          <Button className={classes.ghsignup} variant="contained" color="primary" onClick={toggleLogin}>
            Signup with Github
          </Button>
        </div>
      )}
      </userState.Consumer>
    </div>
  );
}

export default LoginPopup;