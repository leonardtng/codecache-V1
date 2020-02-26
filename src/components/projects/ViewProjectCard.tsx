import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { currentProjectView } from '../../contexts/CurrentProjectView';
import projectList from '../../data/projectList';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    padding: '5vh',
  },
  projectimg: {
    width: 1000,
    height: '500px',
  }
});

const ViewProjectCard: React.FC = () => {
  const classes = useStyles();

  return (
    <currentProjectView.Consumer>{({ projectid, toggleProjectid }) => {
      const project = projectList[projectid];
      return <Card className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            <CardActionArea>
              <CardMedia
                className={classes.projectimg}
                component="img"
                alt={project.name}
                image={project.img}
                title={project.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>

        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
    }}
    </currentProjectView.Consumer>

  )
}

export default ViewProjectCard;
