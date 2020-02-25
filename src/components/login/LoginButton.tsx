import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import LoginPopup from './LoginPopup';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    github: {
      padding: '0 9%',
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
      <LoginPopup />
    </div>
  }
  return null
}

const LoginButton: React.FC = () => {
  const classes = useStyles();
  
  let [showPopup, setShowPopup] = useState(false);
  
  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" size="small" onClick={() => setShowPopup(showPopup = true)}>
        <GitHubIcon />
        <div className={classes.github}>Login</div>
      </Button>
      <PopupConditional showPopup={showPopup} setShowPopup={() => setShowPopup(showPopup = false)} />
    </div>
  );
}

export default LoginButton;