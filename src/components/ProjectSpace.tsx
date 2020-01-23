import React from 'react';
import ProjectCard from './ProjectCard';
import '../css/ProjectSpace.css';
import projectList from '../data/projectList';
import Grid from '@material-ui/core/Grid';

const ProjectSpace: React.FC = () => {
  const ProjectItems = projectList.map((project) =>
    <Grid item xs={4} key={project.id.toString()}>
      <ProjectCard id={project.id} img={project.img} name={project.name} />
    </Grid>
  );
  return (
    <Grid container spacing={0} id="card-space">
      {ProjectItems}
    </Grid>
  )
}

export default ProjectSpace;