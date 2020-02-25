import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TuneIcon from '@material-ui/icons/Tune';
import Slide from '@material-ui/core/Slide';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import tagsList from '../../data/tagsList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filtericon: {
      float: 'left',
    },
    buttonroot: {
      '& .MuiButton-root': {
        margin: '5.1%',
        padding: '2.4% 0',
        minWidth: '27%',
      },
    },
    filter: {
      zIndex: -1,
      position: 'absolute',
      margin: theme.spacing(1),
      top: 40,
      left: '10%',
      width: '21.5vw',
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
    sort: {
      zIndex: -1,
      position: 'absolute',
      margin: theme.spacing(1),
      top: 52,
      left: '33.5%',
      '& .MuiButton-label': {
        width: '7.5vw',
      },
      '& .MuiButton-root': {
        fontSize: 15,
      },
    },
    menu: {
      width: 'inherit'
    },
  }),
);

interface Props {
  handleFilterOpen: () => void;
  handleNavFilterOpen: () => void;
}

const FilterButton: React.FC<Props> = ({ handleFilterOpen, handleNavFilterOpen }) => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(prev => !prev);
    handleFilterOpen();
    handleNavFilterOpen();
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [currentSort, setCurrentSort] = useState('Popular');

  return (
    <div className={classes.buttonroot}>
      <Button className={classes.filtericon} variant="contained" onClick={handleClick}>
        <TuneIcon />
      </Button>
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit  {...(checked ? { timeout: 200 } : {})}>
        <Autocomplete
          className={classes.filter}
          multiple
          id="filter"
          options={tagsList}
          getOptionLabel={option => option.tag}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              label="Filter"
              placeholder="Tags"
            />
          )}
        />
      </Slide>
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit {...(checked ? { timeout: 200 } : {})}>
        <div className={classes.sort}>
          <Button aria-controls="simple-menu" aria-haspopup="true" variant="outlined" onClick={handleSortClick}>
            {currentSort}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            disableScrollLock={true}
            className={classes.menu}
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
            <MenuItem onClick={() => { setCurrentSort('Popular'); handleClose() }}>Popular</MenuItem>
            <MenuItem onClick={() => { setCurrentSort('Recently Added'); handleClose() }}>Recently Added</MenuItem>
            <MenuItem onClick={() => { setCurrentSort('Commits'); handleClose() }}>Commits</MenuItem>
            <MenuItem onClick={() => { setCurrentSort('Likes'); handleClose() }}>Likes</MenuItem>
            <MenuItem onClick={() => { setCurrentSort('Views'); handleClose() }}>Views</MenuItem>
          </Menu>
        </div>
      </Slide>
    </div >
  )
}

export default FilterButton;
