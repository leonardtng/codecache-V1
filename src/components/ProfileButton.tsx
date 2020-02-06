import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconstyle: {
      color: '#ffffff',
      padding: '7%',
    },
  }),
);

const ProfileButton: React.FC = () => {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = () => { history.push("./ProfilePage.tsx") };
  return (
    <IconButton onClick={handleClick}>
      <AccountCircleIcon className={classes.iconstyle} fontSize="large" />
    </IconButton>
  );
}

export default ProfileButton;
