import React, { useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grey: {
      background: '#ffffff',
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
      className="root"
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
        <MenuItem className={classes.grey}>Logout</MenuItem>
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
