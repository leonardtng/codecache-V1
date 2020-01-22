import React from 'react';
import ProjectCard from './ProjectCard';
import '../css/ProjectSpace.css';
import projects from '../data/projects';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const ProjectSpace: React.FC = () => {
  const classes = useStyles();
  const ProjectItems = projects.map((project) =>
    <Grid item xs={4} key={project.id.toString()}>
      <ProjectCard id={project.id} img={project.img} name={project.name} />
    </Grid>
  );
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {ProjectItems}
      </Grid>
    </div>
  )
}

export default ProjectSpace