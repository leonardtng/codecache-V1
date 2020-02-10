import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  cardoutline: {
    position: 'relative',
    zIndex: 0,
    padding: "3vw",
    '&:hover': {
      msTransform: 'translate(0px, -10px)',  /* IE 9 */
      webkitTransform: 'translate(0px, -10px)', /* Safari 3-8 */
      transform: 'translate(0px, -10px)',
    },
  },
  card: {
    maxWidth: 500,
    margin: 'auto',
  },
  media: {
    height: 300,
  },
});

interface Props {
  img: string;
  name: string;
}

const ProjectCard: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.cardoutline}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid item xs={2}>
            <MergeTypeIcon />
            <span>100</span>
            {/* WORK ON THE LOGIC */}
          </Grid>
          <Grid item xs={2}>
            <VisibilityIcon />
            <span>100</span>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={2}>
            <IconButton aria-label="like" edge="end">
              <ThumbUpAltIcon />
            </IconButton>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectCard;