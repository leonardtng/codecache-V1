import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TuneIcon from '@material-ui/icons/Tune';
import Slide from '@material-ui/core/Slide';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import tagsList from '../data/tagsList'

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
      top: 55,
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
      top: 55,
      left: '33.5%',
      width: '7.5vw',
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }),
);

const SortOptions = [
  { sortBy: 'Popular' },
  { sortBy: 'Recently Added' },
  { sortBy: 'Commits' },
  { sortBy: 'Likes' },
  { sortBy: 'Views' },
];

const FilterButton: React.FC = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(prev => !prev);
  }

  return (
    <div className={classes.buttonroot}>
      <Button className={classes.filtericon} variant="contained" onClick={handleClick}>
        <TuneIcon />
      </Button>
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
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
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit {...(checked ? { timeout: 1000 } : {})}>
        <Autocomplete
          className={classes.sort}
          id="sort"
          options={SortOptions}
          getOptionLabel={option => option.sortBy}
          renderInput={params => (
            <TextField

              {...params}
              variant="standard"
              label="Sort"
              placeholder="Popular"
            />
          )}
        />
      </Slide>
    </div >
  )
}

export default FilterButton;
