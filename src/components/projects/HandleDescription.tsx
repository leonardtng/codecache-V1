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

interface HandleDescriptionProps {
  img: string;
  name: string;
  description: string;
  showDescription: boolean;
}

const HandleDescription: React.FC<HandleDescriptionProps> = (props: HandleDescriptionProps) => {
  const classes = useStyles();

  const modifyDescription = (description: string) => {
    if (description.length > 235) {
      const newDescription = description.slice(0, 230) + ' ...'
      return newDescription;
    };
    return description
  };

  if (props.showDescription) {
    return <Fade in={props.showDescription} timeout={350}>
      <div className={classes.maxheight}>
        <CardMedia
          component="img"
          className={classes.background}
          alt={props.name}
          image={props.img}
          title={props.name}
        />
        <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
          {modifyDescription(props.description)}
        </Typography>
      </div>
    </Fade>

  } return (
    <div className={classes.maxheight}>
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.name}
      />
    </div >
  );
}

export default HandleDescription;