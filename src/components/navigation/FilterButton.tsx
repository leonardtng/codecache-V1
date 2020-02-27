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
      top: 50,
      left: '22%',
      minWidth: '21.5vw',
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
    sort: {
      zIndex: -1,
      position: 'absolute',
      margin: theme.spacing(1),
      top: 65,
      left: '11%',
      '& .MuiButton-label': {
        width: '7.5vw',
      },
      '& .MuiButton-root': {
        fontSize: '0.8vw',
      },
    },
    menu: {
      width: 'inherit'
    },
  }),
);

interface FilterButtonProps {
  currentFilter: Array<string>;
  changeCurrentFilter: (filter: string) => void;
  currentSort: string;
  changeCurrentSort: (sort: string) => void;
  handleFilterOpen: () => void;
  handleNavFilterOpen: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = (props: FilterButtonProps) => {
  const classes = useStyles();

  const [checked, setChecked] = useState<boolean>(false);

  const handleClick = () => {
    setChecked(prev => !prev);
    props.handleFilterOpen();
    props.handleNavFilterOpen();
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.buttonroot}>
      <Button className={classes.filtericon} variant="contained" onClick={handleClick}>
        <TuneIcon />
      </Button>
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit  {...(checked ? { timeout: 300 } : { timeout: 0 })}>
        <Autocomplete
          id="filter"
          className={classes.filter}
          multiple
          options={tagsList}
          onChange={(event: object, value: any) => {
            console.log(value);
            if (value.length === 0) {
              props.changeCurrentFilter('');
            }
            let i;
            for (i = 0; i < value.length; i++) {
              props.changeCurrentFilter(value[i]);
            };
          }}
          getOptionLabel={option => option}
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
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit {...(checked ? { timeout: 300 } : { timeout: 0 })}>
        <div className={classes.sort}>
          <Button aria-controls="simple-menu" aria-haspopup="true" variant="outlined" onClick={handleSortClick}>
            {props.currentSort}
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
            <MenuItem onClick={() => { props.changeCurrentSort('Popular'); handleClose() }}>Popular</MenuItem>
            <MenuItem onClick={() => { props.changeCurrentSort('Commits'); handleClose() }}>Commits</MenuItem>
            <MenuItem onClick={() => { props.changeCurrentSort('Likes'); handleClose() }}>Likes</MenuItem>
            <MenuItem onClick={() => { props.changeCurrentSort('Views'); handleClose() }}>Views</MenuItem>
          </Menu>
        </div>
      </Slide>
    </div >
  )
}

export default FilterButton;
