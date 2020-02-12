import React, { useState } from 'react';
import LoginAlert from './LoginAlert';
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
import { userState } from '../contexts/UserState';

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
  iconlabel: {
    display: 'flex',
    alignItems: 'left',
  }
});

interface Props {
  id: number;
  img: string;
  name: string;
  commits: number;
  views: number;
  likes: number;
}

const ProjectCard: React.FC<Props> = ({ id, img, name, commits, views, likes }) => {
  const classes = useStyles();

  const [color, setColor] = useState("#8f8f8f");
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleClickLike = () => {
    if (color === "#8f8f8f") {
      setColor("red");
      setCurrentLikes(currentLikes + 1);
    }
    else {
      setColor("#8f8f8f");
      setCurrentLikes(currentLikes - 1);
    }
    // Need to update the likes in the project in the database
  };

  return (
    <div className={classes.cardoutline}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid item xs={1}>
            <IconButton aria-label="commits" disabled>
              <MergeTypeIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            {commits}
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-label="views" disabled>
              <VisibilityIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            {views}
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={1}>
            <userState.Consumer>{({ isLoggedIn }) => {
              if (isLoggedIn) {
                return <IconButton aria-label="likes" style={{ color: color }} onClick={handleClickLike}>
                  <ThumbUpAltIcon />
                </IconButton>
              }
              return <LoginAlert color={color} />
            }}
            </userState.Consumer>
          </Grid>
          <Grid item xs={1}>
            {currentLikes}
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectCard;