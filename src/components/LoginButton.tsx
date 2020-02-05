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

interface Props {
  showPopup: boolean;
  setShowPopup: () => void;
}

const PopupConditional: React.FC<Props> = ({ showPopup, setShowPopup }) => {
  if (showPopup) {
    return <div id="popup-bg" onClick={setShowPopup}>
      <Popup />
    </div>
  }
  return null
}

const LoginButton: React.FC = () => {
  const classes = useStyles();
  let [showPopup, setShowPopup] = useState(false);

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={() => setShowPopup(showPopup = true)}>
        Login / Signup
      </Button>
      <PopupConditional showPopup={showPopup} setShowPopup={() => setShowPopup(showPopup = false)} />
    </div>
  );
}

export default LoginButton;