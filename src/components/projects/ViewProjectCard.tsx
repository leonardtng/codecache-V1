import React, { useState } from 'react';
import { withStyles, makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ShareButton from './ShareButton';
import LoginAlert from '../login/LoginAlert';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import GroupIcon from '@material-ui/icons/Group';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Typography from '@material-ui/core/Typography';
import { userState } from '../../contexts/UserState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      padding: '5vh',
    },
    icongroup: {
      textAlign: 'center',
      paddingTop: '7vh',
      paddingRight: '5vh',
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
    tagsheader: {
      fontSize: '16px',
      paddingTop: '4%',
      paddingBottom: '1%',
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
  }),
);

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

const ViewProjectCard: React.FC<ViewProjectCardProps> = (props: ViewProjectCardProps) => {
  const classes = useStyles();

  const [color, setColor] = useState<string>("#ffffff");
  const [currentLikes, setCurrentLikes] = useState<number>(props.project.likes);

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

  return (
    <Card className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2} className={classes.icongroup} >
          <div className={classes.likebutton}>
            <userState.Consumer>{(userContext) => {
              if (userContext.isLoggedIn) {
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
          <ShareButton project={props.project} />
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                <b>{props.project.name}</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CardActionArea className={classes.projectimg}>
                <CardMedia
                  component="img"
                  className={classes.projectimg}
                  alt={props.project.name}
                  image={props.project.img}
                  title={props.project.name}
                />
              </CardActionArea>
            </Grid>
            <Grid item xs={12} className={classes.description}>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.project.description}
                </Typography>
                <Typography className={classes.tagsheader} variant="h5" color="textPrimary">
                  Tags
                  </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  {props.project.tags.map((tag: string) => {
                    return <Button>{tag}</Button>
                  })}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12}>
              <CardActions>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">Collaborators</Typography>
                      <em>{"Number of people working on this project with read, write and admin permissions"}</em>
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
                  <span className={classes.icontext}>Collaborators</span> {props.project.collaborators}
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
                  <span className={classes.icontext}>Commits</span> {props.project.commits}
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
