import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import logo from '../images/Codecache.svg';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logostyle: {
      width: '85%',
      height: '85%',
      display: 'flex',
      objectFit: 'contain',
      marginLeft: 'auto',
    },
  }),
);

const Logo: React.FC = () => {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = () => { history.push("/") }

  return (
    <IconButton className={classes.logostyle} onClick={handleClick}>
      <img src={logo} alt="codecache" />
    </IconButton>
  );
}

export default Logo