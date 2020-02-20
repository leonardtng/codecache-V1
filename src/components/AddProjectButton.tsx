import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

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

const AddProjectButton: React.FC = () => {
  const classes = useStyles();
  return (
    <span className={classes.buttonroot}>
      <Button size="small" className={classes.iconstyle}>
        Add Project
      </Button>
    </span>
  )
}

export default AddProjectButton;
