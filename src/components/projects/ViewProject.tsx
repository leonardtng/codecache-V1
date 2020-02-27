import React from 'react';
import Grid from '@material-ui/core/Grid';
import ViewProjectCard from './ViewProjectCard';
import ViewOthers from './ViewOthers';
import { currentProjectView } from '../../contexts/CurrentProjectView';

const ViewProject: React.FC = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={10}>
        <currentProjectView.Consumer>{({ projectid, toggleProjectid }) => {
          return <ViewProjectCard projectid={projectid} />
        }}
        </currentProjectView.Consumer>
        <ViewOthers />
      </Grid>
      <Grid item xs={1}>
      </Grid>
    </Grid>
  )
}

export default ViewProject;
