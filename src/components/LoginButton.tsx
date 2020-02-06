import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popup from './Popup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
    popupbg: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
  }),
);

interface Props {
  showPopup: boolean;
  setShowPopup: () => void;
}

const PopupConditional: React.FC<Props> = ({ showPopup, setShowPopup }) => {
  const classes = useStyles();
  if (showPopup) {
    return <div className={classes.popupbg} onClick={setShowPopup}>
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