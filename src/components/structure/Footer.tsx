import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    position: 'relative',
    width: '100%',
    maxHeight: '75px',
    top: '5vh',
  },
  footerstyle: {
    textAlign: "center",
    fontSize: "large",
    color: "#ffffff",
    backgroundColor: '#23343B',
  },
  padding: {
    padding: '1%',
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Grid container spacing={0} className={classes.footer}>
      <Grid item xs={12} className={classes.footerstyle}>
        <div className={classes.padding}>
           © {year} CodeCache Limited
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
