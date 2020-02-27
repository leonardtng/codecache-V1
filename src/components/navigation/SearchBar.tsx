import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import SearchIcon from '@material-ui/icons/Search';
import projectList from '../../data/projectList';
import { useLocation, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '80%',
      },
      '& .MuiInputBase-root': {
        fontSize: '70%',
      },
      '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-endAdornment': {
        transform: 'translateY(-9%)',
      },
    },
    paper: {
      fontSize: '70%',
    },
  }),
);

const useOutlinedInputStyles = makeStyles(theme => ({
  root: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#646464',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#f50057',
      borderWidth: '2px'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffffff',
    },
  }
}));

interface SearchBarProps {
  currentSearch: string;
  changeCurrentSearch: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const classes = useStyles();
  const textfieldStyle = useOutlinedInputStyles();

  const history = useHistory();
  const handleSearchInProject = () => { history.push("/"); }
  
  const location = useLocation();
  const nonProjectPages = ['/', '/profile'];

  return (
    <Autocomplete
      id="Search"
      className={classes.root}
      classes={{ paper: classes.paper }}
      options={projectList}
      disableOpenOnFocus
      size='small'
      onInputChange={(event: any, value: string) => {
        if (nonProjectPages.includes(location.pathname)) {
          event.preventDefault();
          props.changeCurrentSearch(value);
        } else {
          event.preventDefault();
          handleSearchInProject();
          props.changeCurrentSearch(value);
        }
      }}      
      autoComplete
      autoHighlight
      getOptionLabel={option => option.name}
      renderInput={params => (
        <TextField {...params} className={textfieldStyle.root} placeholder="Search..." variant="outlined"
          value={props.currentSearch}
          onClick={() => {
            if (!nonProjectPages.includes(location.pathname)) {
              handleSearchInProject();
          }}}
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