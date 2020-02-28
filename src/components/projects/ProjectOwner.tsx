import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '70%',
      margin: '10%'
    },
    viewprofilebutton: {
      fontSize: '12px',
      float: 'right',
    },
    small: {
      width: '2rem',
      height: '2rem',
    },
    projectowner: {
      textAlign: 'left',
      paddingTop: '12px',
      paddingLeft: '13px',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }),
);

interface ProjectOwnerProps {
  project: {
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
  };
}

const ProjectOwner: React.FC<ProjectOwnerProps> = (props: ProjectOwnerProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <CardContent>
            <Avatar alt={props.project.owner} src="/static/images/avatar/1.jpg" className={classes.small} />
          </CardContent>
        </Grid>
        <Grid item xs={8}>
          <Typography className={classes.projectowner} variant="body2" color="textSecondary" component="p">
            {props.project.owner}
          </Typography>
          <CardActions>
            <Button size="small" className={classes.viewprofilebutton}>View Profile</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ProjectOwner;
