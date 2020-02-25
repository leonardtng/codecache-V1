import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiButtonBase-root': {
        margin: '27% 0',
        padding: '0',
      },
    },
    iconstyle: {
      color: '#ffffff',
    },
  }),
);

const NotificationButton: React.FC = () => {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <IconButton aria-controls="notifications" aria-haspopup="true">
        <NotificationsIcon className={classes.iconstyle} fontSize="small" />
      </IconButton>
      {/* POPUP TODO */}
    </span>
  )
}

export default NotificationButton;
