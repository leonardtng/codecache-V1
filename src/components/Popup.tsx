import React from 'react';
import "../css/Popup.css";
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
  }),
);

const Popup: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <userState.Consumer>{({ isLoggedIn, toggleLogin }) => (
        <div className="popup">
          <Button className="gh-login" variant="contained" color="primary" onClick={toggleLogin}>
            Login with Github
          </Button>
          <Button className="gh-signup" variant="contained" color="primary" onClick={toggleLogin}>
            Signup with Github
          </Button>
        </div>
      )}
      </userState.Consumer>
    </div>
  );
}

export default Popup;