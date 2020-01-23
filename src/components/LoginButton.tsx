import React, { useState } from 'react';
import Popup from './Popup';
import '../css/LoginButton.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }),
);

const LoginButton: React.FC = () => {
  const classes = useStyles();
  let [showPopup, setShowPopup] = useState(false);

  if (showPopup === true) {
    return (
      <div className={classes.root}>
        <Button variant="contained" color="secondary" onClick={() => setShowPopup(showPopup = true)}>
          Login / Signup
          </Button>
        <div id="popup-bg" onClick={() => setShowPopup(showPopup = false)}>
          <Popup />
        </div>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={() => setShowPopup(showPopup = true)}>
        Login / Signup
      </Button>
    </div>
  )
}

export default LoginButton;
