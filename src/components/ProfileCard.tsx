import React from 'react'
import ProfileImage from '../images/ProfileImage.png'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardoutline: {
      position: 'fixed',
      zIndex: 0,
      padding: '8%',
      '&:hover': {
        msTransform: 'translate(0px, -10px)',  /* IE 9 */
        webkitTransform: 'translate(0px, -10px)', /* Safari 3-8 */
        transform: 'translate(0px, -10px)',
      },
    },
    card: {
      maxWidth: '27.5vw',
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
  }),
);

const ProfileCard: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardoutline}>
      <Card className={classes.card}>
        <CardActionArea>
          <div className={classes.imagesectionheight}>
            <Avatar alt="Serene Tay" src={ProfileImage} className={classes.avatarlarge} />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Serene Tay
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Currently working in a fintech company and learning about IT. Hope you like my projects.
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default ProfileCard;
