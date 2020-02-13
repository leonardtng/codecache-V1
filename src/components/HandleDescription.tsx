import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  maxheight: {
    maxHeight: '36vh',
  },
  media: {
    height: '36vh',
  },
  background: {
    height: '36vh',
    opacity: 0.3,
  },
  description: {
    transform: 'translate(0%, -92%)',
    fontSize: '1.1vw',
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
    if (description.length > 450) {
      var newDescription = description.slice(0, 446) + ' ...'
      return newDescription;
    };
    return description
  };

  if (showDescription) {
    return <Fade in={showDescription} timeout={350}>
      <div className={classes.maxheight}>
        <CardMedia
          className={classes.background}
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