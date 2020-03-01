import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { userState } from '../../contexts/UserState';
import { currentProfileView } from '../../contexts/CurrentProfileView';
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

const ProfileButton: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (username: string) => { history.push('/' + username) };

  return (
    <span className={classes.buttonroot}>
      <currentProjectView.Consumer>{(projectContext) => {
        return <currentProfileView.Consumer>{(profileContext) => {
          return <userState.Consumer>{(userContext) => {
            return <Button size="small" className={classes.iconstyle} onClick={() => { projectContext.handleSetNavProject(false); profileContext.toggleProfileid(userContext.id); handleClick(userContext.username) }}>
              Profile
            </Button>
          }}
          </userState.Consumer>
        }}
        </currentProfileView.Consumer>
      }}
      </currentProjectView.Consumer>
    </span >
  );
}

export default ProfileButton;
