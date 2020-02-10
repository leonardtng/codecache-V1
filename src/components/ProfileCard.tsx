import React from 'react'
import ProfileImage from '../images/ProfileImage.png'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditProfile from './EditProfile';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardoutline: {
      position: 'fixed',
      zIndex: 0,
      padding: '3vw',
    },
    card: {
      width: '27.5vw',
      margin: 'auto',
    },
    imagesectionheight: {
      margin: 'auto',
      height: '12vw',
      width: '12vw',
    },
    avatarlarge: {
      margin: 'auto',
      padding: '1vw',
      width: '10vw',
      height: '10vw',
    },
    alignright: {
      textAlign: "right",
      float: "right",
    },
  }),
);

interface Props {
  displayName: string;
  setDisplayName: (newDisplayName: string) => void;
  description: string;
  setDescription: (newDescription: string) => void;
  projectCommits: number;
  totalProjectViews: number;
  totalLikes: number;
}

const ProfileCard: React.FC<Props> = ({ displayName, setDisplayName, description, setDescription, projectCommits, totalProjectViews, totalLikes }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardoutline}>
      <Card className={classes.card}>
        <div className={classes.imagesectionheight}>
          <CardActionArea>
            <Avatar alt={displayName} src={ProfileImage} className={classes.avatarlarge} />
          </CardActionArea>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {displayName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <div className={classes.alignright}>
            <EditProfile editDisplayName={setDisplayName} editDescription={setDescription} />
          </div>
        </CardContent>
        <CardContent>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem>
              <ListItemIcon>
                <MergeTypeIcon />
              </ListItemIcon>
              <ListItemText primary="Project Commits" />
              <ListItemText primary={projectCommits} className={classes.alignright} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Total Project Views" />
              <ListItemText primary={totalProjectViews} className={classes.alignright} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ThumbUpAltIcon />
              </ListItemIcon>
              <ListItemText primary="Total Likes" />
              <ListItemText primary={totalLikes} className={classes.alignright} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProfileCard;
