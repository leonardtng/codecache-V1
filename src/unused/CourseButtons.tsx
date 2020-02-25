import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import tagsList from '../../data/tagsList';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        padding: theme.spacing(1),
      },
      margin: '0px 2%',
      width: 140,
    },
    black: {
      background: 'linear-gradient(45deg, #536976 30%, #292e49 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      padding: '0 6%',
      boxShadow: '0 3px 5px 2px #314755',
    },
  }),
);

const CourseButtons: React.FC = () => {
  const classes = useStyles();

  const courses = tagsList.map((course) =>
    <Button variant="contained" color="primary" className={clsx(classes.root, classes.black)} key={course.id}>
      {course.tag}
    </Button>
  );
  
  return (
    <div>
      {courses}
    </div>
  );
}

export default CourseButtons;