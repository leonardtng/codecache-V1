import React, { useState } from 'react'
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
  projectCommits: number;
  totalProjectViews: number;
  totalLikes: number;
}

const ProfileCard: React.FC<Props> = ({ projectCommits, totalProjectViews, totalLikes }) => {
  const classes = useStyles();
  const [name, setName] = useState('Serene Tay');
  const [description, setDescription] = useState('Currently working in a fintech company and learning about IT. I can code in Python, Javascript, PHP, C++, C#, HTML, CSS. Looking for part-time opportunities for me to practice my skills.')

  const editName = (name: string) => {
    setName(name);
    //pass newName from children to this function as name and set parent name prop
  };

  const editDescription = (description: string) => {
    setDescription(description);
    //pass newDescription from children to this function as description and set parent name prop
  };

  return (
    <div className={classes.cardoutline}>
      <Card className={classes.card}>
        <div className={classes.imagesectionheight}>
          <CardActionArea>
            <Avatar alt={name} src={ProfileImage} className={classes.avatarlarge} />
          </CardActionArea>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <div className={classes.alignright}>
            <EditProfile editName={editName} editDescription={editDescription} />
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
