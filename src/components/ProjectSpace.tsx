import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard';
import projectList from '../data/projectList';

const useStyles = makeStyles({
  cardspace: {
    position: 'relative',
    top: '300px'
  },
});


const ProjectSpace: React.FC = () => {
  const classes = useStyles();

  const ProjectItems = projectList.map((project) =>
    <Grid item xs={4} key={project.id.toString()}>
      <ProjectCard img={project.img} name={project.name} />
    </Grid>
  );
  
  return (
    <Grid container spacing={0} className={classes.cardspace}>
      {ProjectItems}
    </Grid>
  );
}

export default ProjectSpace;