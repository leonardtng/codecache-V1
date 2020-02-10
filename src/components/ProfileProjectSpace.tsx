import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProfileCard from '../components/ProfileCard';
import ProjectCard from '../components/ProjectCard';
import projectList from '../data/projectList';

const useStyles = makeStyles({
  adjustcard: {
    position: 'relative',
    top: '6.5vw',
  },
});

interface Props {
  username: string;
  name: string;
  setName: (newName: string) => void;
  description: string;
  setDescription: (newDescription: string) => void;
}

const ProfileProjectSpace: React.FC<Props> = ({ username, name, setName, description, setDescription}) => {
  const classes = useStyles();

  const ProjectItems = projectList.map((project) => {
    if (project.owner === username) {
      return <Grid item xs={6} key={project.id.toString()}>
      <ProjectCard img={project.img} name={project.name} />
    </Grid>
    }
    return null
  }

  );
  return (
    <Grid container spacing={0}>
      <Grid item xs={4} className={classes.adjustcard} >
        <ProfileCard name={name} setName={setName} description={description} setDescription={setDescription} projectCommits={10} totalProjectViews={200} totalLikes={30} />
      </Grid>
      <Grid item xs={8} className={classes.adjustcard}>
        <Grid container spacing={0}>
          {ProjectItems}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProfileProjectSpace;
