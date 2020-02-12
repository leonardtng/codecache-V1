import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  maxheight: {
    maxHeight: '40vh',
  },
  media: {
    height: '36vh',
  },
  description: {
    fontSize: '2.3vh',
    padding: '2vh',
    height: '36vh',
  },
});

interface Props {
  img: string;
  name: string;
  description: string;
  showDescription: boolean;
}

const HandleDescription: React.FC<Props> = ({ img, name, description, showDescription }) => {
  const classes = useStyles();

  const modifyDescription = (description: any) => {
    if (description.length > 450) {
      var newDescription = description.slice(0, 446) + ' ...'
      return newDescription;
    };
    return description
  };

  if (showDescription) {
    return <Fade in={showDescription} timeout={350}>
      <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
        {modifyDescription(description)}
      </Typography>
    </Fade>

  } return (
    <div className={classes.maxheight}>
      <CardMedia
        className={classes.media}
        image={img}
        title={name}
      />
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
    </div >
  );
}

export default HandleDescription;