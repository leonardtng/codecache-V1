import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import projectList from '../../data/projectList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '8% 0',
    },
    viewothers: {
      float: 'left',
    },
  }),
);

interface Project {
  id: number;
  owner: string;
  img: string;
  name: string;
  description: string;
  commits: number;
  views: number;
  likes: number;
  collaborators: number;
  tags: string[];
}

interface ViewOthersProps {
  project: Project;
}

const ViewOthers: React.FC<ViewOthersProps> = (props: ViewOthersProps) => {
  const classes = useStyles();

  const clone = [...projectList].sort((a: Project, b: Project) => { return (a.likes + a.commits + a.views) - (b.likes + b.commits + b.views) }).reverse();;

  const getSimilarProjects = (clone: Array<Project>) => {
    const similarProjects = [];
    for (let project of clone) {
      if ((project.tags.some((tag: string) => { return props.project.tags.includes(tag) })) && (project.id !== props.project.id)) {
        similarProjects.push(project);
        clone.splice(project.id, 1);
      } else {
        continue
      }
    }

    if (similarProjects.length < 3) {
      for (let project of clone) {
        similarProjects.push(project);
        clone.splice(project.id, 1);
        if (similarProjects.length === 3) { break } else { continue };
      }
    } else {
      for (let i = 0; i < (similarProjects.length - 3); i++) {
        similarProjects.pop();
      }
    }
    return similarProjects
  }

  return (
    <Grid className={classes.root} container spacing={0}>
      <Grid item xs={12}>
        <Typography className={classes.viewothers} variant="h6" component="h2" gutterBottom>
          View Others
        </Typography>
      </Grid>
      {getSimilarProjects(clone).map((project) => {
        return <Grid item xs={4}>
          <ProjectCard
            id={project.id}
            img={project.img}
            name={project.name}
            description={project.description}
            commits={project.commits}
            views={project.views}
            likes={project.likes} />
        </Grid>
      })}
    </Grid>
  )
}

export default ViewOthers;
