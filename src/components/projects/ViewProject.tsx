import React from 'react';
import Grid from '@material-ui/core/Grid';
import ViewProjectCard from './ViewProjectCard';
import ViewOthers from './ViewOthers';


const ViewProject: React.FC = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={10}>
        <ViewProjectCard />
        <ViewOthers />
      </Grid>
      <Grid item xs={1}>
      </Grid>
    </Grid>
  )
}

export default ViewProject;
