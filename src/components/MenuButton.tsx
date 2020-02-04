import React, { useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { userState } from '../contexts/UserState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menubg: {
      backgroundColor: '#E4E4E4',
    },
    grey: {
      background: '#E4E4E4',
      color: '#707070'
    },

  }),
);

interface Props {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}

const DisplayMenu: React.FC<Props> = ({ anchorEl, handleClose }) => {
  const classes = useStyles();
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
      <MenuItem className={classes.grey}>Help</MenuItem>
      <userState.Consumer>{({ isLoggedIn, toggleLogin }) =>
        <MenuItem className={classes.grey} onClick={toggleLogin}>Logout</MenuItem>
      }
      </userState.Consumer>

    </Menu>
  )
}

const MenuButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <span>
      <IconButton aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon id="icon-style" fontSize="large" />
      </IconButton>
      <DisplayMenu anchorEl={anchorEl} handleClose={handleClose} />
    </span>
  )
}

export default MenuButton;