import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProjectOwner from './ProjectOwner';
import ViewProjectCard from './ViewProjectCard';
import ViewOthers from './ViewOthers';
import { currentProjectView } from '../../contexts/CurrentProjectView';
import projectList from '../../data/projectList';

const ViewProject: React.FC = () => {
  return (
    <currentProjectView.Consumer>{({ projectid, toggleProjectid }) => {
      const project = projectList[projectid];
      return <Grid container spacing={0}>
        <Grid item xs={2}>
          <ProjectOwner project={project} />
        </Grid>
        <Grid item xs={8}>
          <ViewProjectCard project={project} />
          <ViewOthers />
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    }}
    </currentProjectView.Consumer>
  )
}

export default ViewProject;
