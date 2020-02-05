import React, { useState } from 'react'
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from '@material-ui/icons/FilterList';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import '../css/FilterMenu.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menubg: {
      backgroundColor: '#ffff',
    },
    menuitemstyle: {
      background: '#ffff',
      color: '#707070'
    },
  }),
);

interface Props {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}

const DisplayFilterMenu: React.FC<Props> = ({ anchorEl, handleClose }) => {
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
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <MenuItem className={classes.menuitemstyle}>Commits</MenuItem>
      <MenuItem className={classes.menuitemstyle}>Likes</MenuItem>
      <MenuItem className={classes.menuitemstyle}>Views</MenuItem>
    </Menu>
  );
}


const FilterMenu: React.FC = () => {
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
        <FilterListIcon id="filter-icon-style" fontSize="large" />
      </IconButton>
      <DisplayFilterMenu anchorEl={anchorEl} handleClose={handleClose} />
    </span>
  );
}

export default FilterMenu;
