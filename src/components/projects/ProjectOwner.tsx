import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import accountsList from '../../data/accountsList';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nooutline: {
      '& .MuiPaper-outlined': {
        border: 'none',
      },
    },
    root: {
      width: '70%',
      margin: '0 15%',
    },
    viewprofilebutton: {
      fontSize: '12px',
      float: 'right',
    },
    small: {
      width: '2.5rem',
      height: '2.5rem',
    },
    projectowner: {
      textAlign: 'left',
      paddingTop: '12px',
      paddingLeft: '13px',
    },
  }),
);

interface ProjectOwnerProps {
  project: {
    id: number;
    owner: string;
    img: string;
    name: string;
    description: string;
    commits: number;
    views: number;
    likes: number;
    collaborators: number;
    tags: string[];
  };
}

const ProjectOwner: React.FC<ProjectOwnerProps> = (props: ProjectOwnerProps) => {
  const classes = useStyles();

  const getOwner = () => {
    for (let account of accountsList) {
      if (account.username === props.project.owner) {
        return account
      } else {
        continue
      }
    }
    return accountsList[0] //return default account if account not found, change to error when backend setup
  };

  const owner = getOwner();

  const history = useHistory();
  const handleClickViewProfile = () => {
    history.push("/profile");
  };

  return (
    <div className={classes.nooutline}>
      <Card className={classes.root} variant="outlined">
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <CardContent>
              <Avatar alt={owner.username} src={owner.img} className={classes.small} />
            </CardContent>
          </Grid>
          <Grid item xs={8}>
            <Typography className={classes.projectowner} variant="body2" color="textSecondary" component="p">
              {owner.username}
            </Typography>
            <CardActions>
              <Button size="small" className={classes.viewprofilebutton} onClick={handleClickViewProfile}>
                View Profile
            </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default ProjectOwner;
