import React, { useState } from 'react';
import LoginAlert from '../login/LoginAlert';
import HandleDescription from '../profile/HandleDescription';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { userState } from '../../contexts/UserState';

const useStyles = makeStyles({
  cardoutline: {
    position: 'relative',
    zIndex: 0,
    padding: "5vh",
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
  nopadding: {
    padding: 0,
  },
  fontsize: {
    '& .MuiGrid-item': {
      margin: 'auto',
    },
    '& .MuiSvgIcon-root': {
      height: '125%',
      width: '125%',
    },
    fontSize: '0.7rem',
  },
  likebutton: {
    '& .MuiIconButton-root': {
      padding: '2px 5px',
    },
  },
});

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

interface Props {
  id: number;
  img: string;
  name: string;
  description: string;
  commits: number;
  views: number;
  likes: number;
}

const ProjectCard: React.FC<Props> = ({ id, img, name, description, commits, views, likes }) => {
  const classes = useStyles();

  const [showDescription, setShowDescription] = useState(false);

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
      <Card className={classes.card} >
        <CardActionArea onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
          <CardContent classes={{ root: classes.nopadding }}>
            <HandleDescription img={img} name={name} description={description} showDescription={showDescription} />
          </CardContent>
        </CardActionArea>
        <Typography variant="h6">
          {name}
        </Typography>
        <CardActions>
          <Grid container spacing={0} className={classes.fontsize}>
            <Grid item xs={1}>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">Commits</Typography>
                    <em>{"Number of individual changes contributed to the project"}</em>
                  </React.Fragment>
                }
              >
                <div>
                  <IconButton size="small" aria-label="commits" disabled>
                    <MergeTypeIcon />
                  </IconButton>
                </div>
              </HtmlTooltip>
            </Grid>
            <Grid item xs={1}>
              {commits}
            </Grid>
            <Grid item xs={1}>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">Views</Typography>
                    <em>{"Number of accounts that has viewed this project"}</em>
                  </React.Fragment>
                }
              >
                <div>
                  <IconButton size="small" aria-label="views" disabled>
                    <VisibilityIcon />
                  </IconButton>
                </div>
              </HtmlTooltip>
            </Grid>
            <Grid item xs={1}>
              {views}
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={1} className={classes.likebutton}>
              <userState.Consumer>{({ isLoggedIn }) => {
                if (isLoggedIn) {
                  return <IconButton size="small" aria-label="likes" style={{ color: color }} onClick={handleClickLike}>
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
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectCard;