import React from 'react';
import clsx from 'clsx';
import courseList from '../data/courseList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        padding: theme.spacing(1),
      },
      margin: '0px 2%',
      width: 194,
    },
    black: {
      background: 'linear-gradient(45deg, #536976 30%, #292e49 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px #314755',
    },
  }),
);

const CourseButtons: React.FC = () => {
  const classes = useStyles();
  const courses = courseList.map((course) =>
    <Button variant="contained" color="primary" className={clsx(classes.root, classes.black)} key={course.id}>
      {course.name}
    </Button>
  );

  return (
    <div>
      {courses}
    </div>
  );
}

export default CourseButtons;