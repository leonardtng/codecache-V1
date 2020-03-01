import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import logo from '../../images/Codecache.svg';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { currentProjectView } from '../../contexts/CurrentProjectView';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logostyle: {
      width: '85%',
      height: '85%',
      display: 'flex',
      objectFit: 'contain',
      marginLeft: 'auto',
    },
    logocontain: {
      width: '125%',
      height: '125%',
    },
  }),
);

const Logo: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
    // TODO Go back to top of page and clear search, filter and sort
  }

  return (
    <currentProjectView.Consumer>{(projectContext) => {
      return <Button className={classes.logostyle} fullWidth onClick={() => { projectContext.handleSetNavProject(false); handleClick() }}>
        <img className={classes.logocontain} src={logo} alt="codecache" />
      </Button>
    }}
    </currentProjectView.Consumer>
  );
}

export default Logo