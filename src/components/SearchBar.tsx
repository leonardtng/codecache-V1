import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import SearchIcon from '@material-ui/icons/Search';
import projectList from '../data/projectList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 246,
      },
      '& .MuiInputBase-root': {
        fontSize: '15px',
      },
      '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment': {
        transform: 'translateY(-9%)',
      },
    },
    paper: {
      fontSize: '15px',
    },
  }),
);

const useOutlinedInputStyles = makeStyles(theme => ({
  root: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: '#646464',
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: '#000000',
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: '#ffffff',
    },
  }
}));

interface Props {
  currentSearch: string;
  changeCurrentSearch: (search: string) => void;
}

const SearchBar: React.FC<Props> = ({ currentSearch, changeCurrentSearch }) => {
  const classes = useStyles();
  const textfieldStyle = useOutlinedInputStyles();

  return (
    <Autocomplete
      id="Search"
      className={classes.root}
      classes={{ paper: classes.paper }}
      options={projectList}
      disableOpenOnFocus
      size='small'
      onInputChange={(event: any, value: string) => { event.preventDefault(); changeCurrentSearch(value) }}
      autoComplete
      autoHighlight
      getOptionLabel={option => option.name}
      renderInput={params => (
        <TextField {...params} style={{ height: '36px' }} className={textfieldStyle.root} placeholder="Search..." variant="outlined"
          value={currentSearch}
          onChange={(event) => {
            event.preventDefault();
            changeCurrentSearch(event.target.value);
          }}
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       <SearchIcon />
        //     </InputAdornment>
        //   ),
        // }}
        />
      )}
    />
  );
}

export default SearchBar;