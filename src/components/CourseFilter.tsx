import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CourseButtons from './CourseButtons';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    largeFont : {
      textAlign: 'right',
      fontSize: "x-large",
    },
  }),
);

const CourseFilter: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} className={classes.largeFont}>
        <b>Course</b>
      </Grid>
      <Grid item xs={11}>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
      </Grid>
      <Grid item xs={10}>
        <CourseButtons />
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}

export default CourseFilter;