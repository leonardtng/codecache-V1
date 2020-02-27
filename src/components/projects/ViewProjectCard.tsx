import React, { useState } from 'react';
import LoginAlert from '../login/LoginAlert';
import { useLocation } from 'react-router';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import GroupIcon from '@material-ui/icons/Group';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import { userState } from '../../contexts/UserState';
import projectList from '../../data/projectList';
import { FacebookShareButton } from "react-share";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    padding: '5vh',
  },
  title: {
    float: 'left',
    paddingBottom: '3%',
  },
  projectimg: {
    width: 400,
    height: 400,
    marginBottom: '3%',
  },
  description: {
    textAlign: 'justify',
    '& .MuiCardContent-root': {
      padding: '3% 0',
    },
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
  commiticon: {
    paddingLeft: '50px',
  },
  icontext: {
    paddingRight: '10px',
  },
  likebutton: {
    '& .MuiIconButton-root': {
      backgroundColor: '#FEC047',
    },
  },
  sharebutton: {
    marginTop: '20px',
    '& .MuiIconButton-root': {
      backgroundColor: '#36E7E5',
    },
  },
  sideicontext: {
    padding: '5px 0',
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

interface ViewProjectCardProps {
  projectid: number;
};

const ViewProjectCard: React.FC<ViewProjectCardProps> = (props: ViewProjectCardProps) => {
  const classes = useStyles();
  const project = projectList[props.projectid];

  const [color, setColor] = useState<string>("#ffffff");
  const [currentLikes, setCurrentLikes] = useState<number>(project.likes);

  const handleClickLike = () => {
    if (color === "#ffffff") {
      setColor("red");
      setCurrentLikes(currentLikes + 1);
    }
    else {
      setColor("#ffffff");
      setCurrentLikes(currentLikes - 1);
    }
    // Need to update the likes in the project in the database
  };

  const location = useLocation();

  return (
    <Card className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2} >
          <div className={classes.likebutton}>
            <userState.Consumer>{({ isLoggedIn }) => {
              if (isLoggedIn) {
                return <IconButton aria-label="likes" style={{ color: color }} onClick={handleClickLike}>
                  <ThumbUpAltIcon />
                </IconButton>
              }
              return <LoginAlert color={color} />
            }}
            </userState.Consumer>
            <Typography variant="body2" color="textSecondary" component="p">
              <div className={classes.sideicontext}>Like</div>
            </Typography>
          </div>
          <div className={classes.sharebutton}>
          <FacebookShareButton
            url={location.pathname}
            quote={'Check this out! Amazing project called ' + project.name + ' on CodeCachenow!'}
          >
              <IconButton aria-label="share" style={{ color: "#ffffff" }}>
                <ShareIcon />
              </IconButton>
              <Typography variant="body2" color="textSecondary" component="p">
                <div className={classes.sideicontext}>Share</div>
              </Typography>
          </FacebookShareButton>
          </div>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                {project.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CardActionArea className={classes.projectimg}>
                <CardMedia
                  component="img"
                  className={classes.projectimg}
                  alt={project.name}
                  image={project.img}
                  title={project.name}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={12} className={classes.description}>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12}>
              <CardActions>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">Collaborators</Typography>
                      <em>{"Number of project owners"}</em>
                    </React.Fragment>
                  }
                >
                  <div>
                    <IconButton size="small" aria-label="collaborators" disabled>
                      <GroupIcon />
                    </IconButton>
                  </div>
                </HtmlTooltip>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span className={classes.icontext}>Collaborators</span> {project.collaborators}
                </Typography>
                <HtmlTooltip
                  className={classes.commiticon}
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
                <Typography variant="body2" color="textSecondary" component="p">
                  <span className={classes.icontext}>Commits</span> {project.commits}
                </Typography>
              </CardActions>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </Card >
  )
}

export default ViewProjectCard;
