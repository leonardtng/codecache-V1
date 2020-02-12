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
  displayName: string;
  setDisplayName: (newDisplayName: string) => void;
  description: string;
  setDescription: (newDescription: string) => void;
}

const ProfileProjectSpace: React.FC<Props> = ({ username, displayName, setDisplayName, description, setDescription}) => {
  const classes = useStyles();

  const ProjectItems = projectList.map((project) => {
    if (project.owner === username) {
      return <Grid item xs={6} key={project.id.toString()}>
      <ProjectCard id={project.id} img={project.img} name={project.name} description={project.description} commits={project.commits} views={project.views} likes={project.likes}/>
    </Grid>
    }
    return null
  }

  );
  return (
    <Grid container spacing={0}>
      <Grid item xs={4} className={classes.adjustcard} >
        <ProfileCard displayName={displayName} setDisplayName={setDisplayName} description={description} setDescription={setDescription} projectCommits={10} totalProjectViews={200} totalLikes={30} />
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
