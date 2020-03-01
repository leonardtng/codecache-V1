import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { currentProjectView } from '../../contexts/CurrentProjectView';

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
      <currentProjectView.Consumer>{(projectContext) => {
        return <Button size="small" className={classes.iconstyle} onClick={() => {projectContext.handleSetNavProject(false); handleClick()}}>
          Home
        </Button>
      }}
      </currentProjectView.Consumer>
    </span>
  )
}

export default HomeButton;
