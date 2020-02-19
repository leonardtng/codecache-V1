import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const FilterOptions = [
  { filterBy: 'Popular' },
  { filterBy: 'Recently Added' },
  { filterBy: 'Commits' },
  { filterBy: 'Likes' },
  { filterBy: 'Views' },
];

const FilterBox: React.FC = () => {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={FilterOptions}
      getOptionLabel={option => option.filterBy}
      style={{ width: 200 }}
      renderInput={params => (
        <TextField {...params} label="Filter" variant="outlined" fullWidth />
      )}
    />
  );
}

export default FilterBox