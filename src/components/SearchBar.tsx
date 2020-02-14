import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FilterMenu from './FilterMenu';

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

interface Props {
  handleSearch: (search: string) => void;
}

const SearchBar: React.FC<Props> = ({ handleSearch }) => {
  const classes = useStyles();

  const [search, setSearch] = useState('');

  const handleChange = (e: any) => {
    e.preventDefault();
    handleSearch(search);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleChange}>
      <TextField id="outlined-search" label="Search" type="search" variant="outlined" InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <FilterMenu />
          </InputAdornment>
        ),
      }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;