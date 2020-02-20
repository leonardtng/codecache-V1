import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import logo from '../images/Codecache.svg';
import Button from '@material-ui/core/Button';
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
    <Button className={classes.logostyle} onClick={handleClick}>
      <img src={logo} alt="codecache" />
    </Button>
  );
}

export default Logo