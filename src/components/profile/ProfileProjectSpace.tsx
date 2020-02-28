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
  currentSort: string;
  username: string;
  displayName: string;
  setDisplayName: (newDisplayName: string) => void;
  description: string;
  setDescription: (newDescription: string) => void;
  profileImage: string;
  totalCommits: number;
  totalViews: number;
  totalLikes: number;
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

  const sortProjectList = (projectList: Array<Project>, currentSort: string) => {
    if (currentSort === 'Likes') {
      return projectList.sort((a: Project, b: Project) => { return a.likes - b.likes }).reverse();
    } else if (currentSort === 'Commits') {
      return projectList.sort((a: Project, b: Project) => { return a.commits - b.commits }).reverse();
    } else if (currentSort === 'Views') {
      return projectList.sort((a: Project, b: Project) => { return a.views - b.views }).reverse();
    } else {
      return projectList.sort((a: Project, b: Project) => { return (a.likes + a.commits + a.views) - (b.likes + b.commits + b.views) }).reverse();
    }
  }

  const clone = [...projectList];

  const ProjectItems = sortProjectList(clone, props.currentSort).map((project) => {
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
          profileImage={props.profileImage}
          totalCommits={props.totalCommits} 
          totalViews={props.totalViews} 
          totalLikes={props.totalLikes} 
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
