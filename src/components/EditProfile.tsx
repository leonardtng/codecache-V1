import React, { useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: "90%",
      }
    },
    buttonstyle: {
      margin: theme.spacing(4),
    },
  }),
);

interface Props {
  editName: (name: string) => void;
  editDescription: (description: string) => void;
}

const EditProfile: React.FC<Props> = ({ editName, editDescription }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    editName(newName);
    editDescription(newDescription);
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCombine = (param1: any, param2: any) => {
    let param3 = param1.length;
    return param3.toString().concat(param2);
  }

  return (
    <React.Fragment>
      <Button variant="text" color="default" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-profile"
      >
        <DialogTitle id="edit-profile">Edit Profile</DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              autoComplete="off"
              variant="outlined"
              onChange={(e) => { setNewName(e.target.value) }}
            />
            <TextField
              id="description"
              label="Description"
              inputProps={{ maxLength: 500 }} multiline={true}
              rows="4"
              variant="outlined"
              onChange={(e) => { setNewDescription(e.target.value) }}
              helperText={handleCombine(newDescription, "/500")}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button className={classes.buttonstyle} variant="contained" color="secondary" onClick={handleSubmit}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default EditProfile;
