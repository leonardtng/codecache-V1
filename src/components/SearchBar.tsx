import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from '@material-ui/icons/FilterList';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: 1000,
      },
    },
  }),
);

const SearchBar: React.FC = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-search" label="Search" type="search" variant="outlined" InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      />
    </form>
  )
}

export default SearchBar;