import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { userState } from '../../contexts/UserState';
import { useLocation, useHistory } from 'react-router-dom';

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
    menubg: {
      backgroundColor: '#E4E4E4',
    },
    menuitemstyle: {
      background: '#E4E4E4',
      color: '#707070',
    },
  }),
);

interface Props {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}

const DisplayMenu: React.FC<Props> = ({ anchorEl, handleClose }) => {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = () => { history.push("/") }
  let location = useLocation();

  return (
    <Menu
      id="menu"
      classes={{ paper: classes.menubg }}
      disableScrollLock={true}
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem className={classes.menuitemstyle}>Help</MenuItem>
      <userState.Consumer>{({ isLoggedIn, toggleLogin }) => {
        if (location.pathname === '/profile') {
          return <MenuItem className={classes.menuitemstyle} onClick={function todo() {
            toggleLogin();
            handleClick();
          }}>Logout</MenuItem>}
        return <MenuItem className={classes.menuitemstyle} onClick={toggleLogin}>Logout</MenuItem>
      }}
      </userState.Consumer>
    </Menu>
  );
}

const MenuButton = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <span className={classes.root}>
      <IconButton aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <MoreHorizIcon className={classes.iconstyle} fontSize="small" />
      </IconButton>
      <DisplayMenu anchorEl={anchorEl} handleClose={handleClose} />
    </span>
  );
}

export default MenuButton;