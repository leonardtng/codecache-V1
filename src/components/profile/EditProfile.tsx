import React, { useState } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { handleCombineTextLength } from '../../utils/common';
import Zoom from '@material-ui/core/Zoom';
import { TransitionProps } from '@material-ui/core/transitions';
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

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

interface EditProfileProps {
  displayName: string;
  description: string;
  editDisplayName: (newDisplayName: string) => void;
  editDescription: (description: string) => void;
}

const EditProfile: React.FC<EditProfileProps> = (props: EditProfileProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [newDisplayName, setNewDisplayName] = useState(props.displayName);
  const [newDescription, setNewDescription] = useState(props.description);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.editDisplayName(newDisplayName);
    props.editDescription(newDescription);
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" color="default" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        fullWidth={true}
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        disableScrollLock={true}
        aria-labelledby="edit-profile"
      >
        <DialogTitle id="edit-profile">Edit Profile</DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              inputProps={{ maxLength: 500 }}
              autoComplete="off"
              variant="outlined"
              defaultValue={newDisplayName}
              onChange={(e) => { setNewDisplayName(e.target.value) }}
              helperText={handleCombineTextLength(newDescription, "/50")}
            />
            <TextField
              id="description"
              label="Description"
              inputProps={{ maxLength: 500 }} multiline={true}
              autoComplete="off"
              rows="4"
              variant="outlined"
              defaultValue={newDescription}
              onChange={(e) => { setNewDescription(e.target.value) }}
              helperText={handleCombineTextLength(newDescription, "/500")}
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
