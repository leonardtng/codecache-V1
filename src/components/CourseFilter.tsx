import React from 'react';
import Grid from '@material-ui/core/Grid';
import CourseButtons from './CourseButtons';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CourseFilter: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={1}>
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
  )
}

export default CourseFilter;