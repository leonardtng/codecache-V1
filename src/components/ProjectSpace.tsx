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

interface Props {
  currentSearch: string;
}

const ProjectSpace: React.FC<Props> = ({ currentSearch }) => {
  const classes = useStyles();

  const ProjectItems = projectList.map((project) => {
    if (project.name.includes(currentSearch)) {
      return <Grid item xs={4} key={project.id.toString()}>
        <ProjectCard id={project.id} img={project.img} name={project.name} description={project.description} commits={project.commits} views={project.views} likes={project.likes} />
      </Grid>
    }
  return null
  });

  return (
    <Grid container spacing={0} className={classes.cardspace}>
      {ProjectItems}
    </Grid>
  );
}

export default ProjectSpace;