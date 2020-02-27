import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconstyle: {
      color: '#ffffff',
    },
    buttonroot: {
      '& .MuiButton-root': {
        margin: '13% 0%',
        fontSize: '54%',
      },
    },
  }),
);

const HomeButton: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => { history.push("./") };

  return (
    <span className={classes.buttonroot}>
      <Button size="small" className={classes.iconstyle} onClick={handleClick}>
        Home
      </Button>
    </span>
  )
}

export default HomeButton;
