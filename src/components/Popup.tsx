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
      <div className="popup">

        <userState.Consumer>{({ isLoggedIn, toggleLogin }) => (
          <Button className="gh-login" variant="contained" color="primary" onClick={toggleLogin}>
            Login with Github
          </Button>)}
        </userState.Consumer>

        <Button className="gh-signup" variant="contained" color="primary">
          Signup with Github
         </Button>
      </div>
    </div>
  );
}

export default Popup;