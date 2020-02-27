import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ProfileCard from './ProfileCard';
import ProjectCard from '../projects/ProjectCard';
import projectList from '../../data/projectList';

const useStyles = makeStyles({
  adjustcard: {
    position: 'relative',
    height: '100%',
  },
});

interface ProfileProjectSpaceProps {
  currentSearch: string;
  currentFilter: Array<string>;
  username: string;
  displayName: string;
  setDisplayName: (newDisplayName: string) => void;
  description: string;
  setDescription: (newDescription: string) => void;
}

const ProfileProjectSpace: React.FC<ProfileProjectSpaceProps> = (props: ProfileProjectSpaceProps) => {
  const classes = useStyles();

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

  const compareFilter = (project: Project, currentFilter: Array<string>) => {
    let i;
    let check = false;
    if (currentFilter.length === 0) {
      check = true;
    } else {
      for (i = 0; i < currentFilter.length; i++) {
        if (project.tags.includes(currentFilter[i])) {
          check = true;
        } else {
          check = false;
          break;
        };
      }
    }
    return check
  }

  const ProjectItems = projectList.map((project) => {
    if (project.owner === props.username) {
      if (project.name.toLowerCase().includes(props.currentSearch.toLowerCase()) && compareFilter(project, props.currentFilter)) {
        return <Grid item xs={12} sm={4} key={project.id.toString()}>
          <ProjectCard 
            id={project.id} 
            img={project.img} 
            name={project.name} 
            description={project.description} 
            commits={project.commits} 
            views={project.views} 
            likes={project.likes}
          />
        </Grid>
      }
      return <Box height={'85vh'}>
      </Box>
    }
    return null
  }

  );
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={4} className={classes.adjustcard} >
        <ProfileCard 
          displayName={props.displayName} 
          setDisplayName={props.setDisplayName} 
          description={props.description} 
          setDescription={props.setDescription} 
          projectCommits={10} 
          totalProjectViews={200} 
          totalLikes={30} 
        />
      </Grid>
      <Grid item xs={12} sm={8} className={classes.adjustcard}>
        <Grid container spacing={0}>
          {ProjectItems}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProfileProjectSpace;
