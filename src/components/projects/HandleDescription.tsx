import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  maxheight: {
    maxHeight: '12.5rem',
  },
  media: {
    height: '12.5rem',
  },
  background: {
    height: '12.5rem',
    opacity: 0.3,
  },
  description: {
    transform: 'translate(0, -12.5rem)',
    textAlign: 'justify',
    padding: '2vh',
    height: '36vh',
    color: '#5e5e5e',
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
    if (description.length > 275) {
      var newDescription = description.slice(0, 270) + ' ...'
      return newDescription;
    };
    return description
  };

  if (showDescription) {
    return <Fade in={showDescription} timeout={350}>
      <div className={classes.maxheight}>
        <CardMedia
          component="img"
          className={classes.background}
          alt={name}
          image={img}
          title={name}
        />
        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
          {modifyDescription(description)}
        </Typography>
      </div>
    </Fade>

  } return (
    <div className={classes.maxheight}>
      <CardMedia
        className={classes.media}
        image={img}
        title={name}
      />
    </div >
  );
}

export default HandleDescription;