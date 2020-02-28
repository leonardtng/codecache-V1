import React from 'react';
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
import { userState } from '../../contexts/UserState';
import { currentProfileView } from '../../contexts/CurrentProfileView';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardoutline: {
      position: 'relative',
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

interface ProfileCardProps {
  displayName: string;
  setDisplayName: (newDisplayName: string) => void;
  description: string;
  setDescription: (newDescription: string) => void;
  profileImage: string;
  totalCommits: number;
  totalViews: number;
  totalLikes: number;
}

const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const classes = useStyles();

  return (
    <div className={classes.cardoutline}>
      <Card className={classes.card}>
        <div className={classes.imagesectionheight}>
          <CardActionArea>
            <Avatar alt={props.displayName} src={props.profileImage} className={classes.avatarlarge} />
          </CardActionArea>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.displayName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <div className={classes.alignright}>
            <currentProfileView.Consumer>{(profileContext) => {
              return <userState.Consumer>{(userContext) => {
                if (userContext.isLoggedIn && (profileContext.profileid === userContext.id)) {
                  return <EditProfile displayName={props.displayName} description={props.description} editDisplayName={props.setDisplayName} editDescription={props.setDescription} />
                } return null
              }}
              </userState.Consumer>
            }}
            </currentProfileView.Consumer>
          </div>
        </CardContent>
        <CardContent>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem>
              <ListItemIcon>
                <MergeTypeIcon />
              </ListItemIcon>
              <ListItemText primary="Project Commits" />
              <ListItemText primary={props.totalCommits} className={classes.alignright} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Total Project Views" />
              <ListItemText primary={props.totalViews} className={classes.alignright} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ThumbUpAltIcon />
              </ListItemIcon>
              <ListItemText primary="Total Likes" />
              <ListItemText primary={props.totalLikes} className={classes.alignright} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProfileCard;
