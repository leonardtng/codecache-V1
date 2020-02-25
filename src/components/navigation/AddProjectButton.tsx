import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { handleCombineTextLength } from '../../utils/common';
import ImageUpload from './ImageUpload';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import tagsList from '../../data/tagsList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconstyle: {
      color: '#ffffff',
    },
    addprojectbuttonroot: {
      '& .MuiButton-root': {
        margin: '13% 0%',
        fontSize: '54%',
      },
    },
    form: {
      '& > *': {
        margin: '3% 0',
      },
    },
    submitbuttonroot: {
      justifyContent: 'center',
      '& .MuiButton-root': {
        margin: '3%',
      },
    }
  }),
);

const AddProjectButton: React.FC = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <span className={classes.addprojectbuttonroot}>
      <Button size="small" className={classes.iconstyle} onClick={handleClickOpen}>
        Add Project
      </Button>
      <Dialog
        open={open}
        style={{ textAlign: "center" }}
        onClose={handleClose}
        aria-labelledby="add-project"
        aria-describedby="user-needs-to-login-to-access-this-function"
      >
        <DialogTitle id="add-project">{"Add Project"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="user-needs-to-login-to-access-this-function">
            <form className={classes.form}>
              <TextField
                fullWidth
                id="title"
                label="Title"
                inputProps={{ maxLength: 50 }}
                autoComplete="off"
                variant="outlined"
                onChange={(e) => { setName(e.target.value) }}
                helperText={handleCombineTextLength(name, "/50")}
              />
              <TextField 
                fullWidth
                id="urllink" 
                label="URL Link" 
                autoComplete="off"
                variant="outlined"
                helperText='Link to your Git repository' 
              />
              <TextField
                fullWidth
                id="description"
                label="Description"
                autoComplete="off"
                inputProps={{ maxLength: 1000 }} multiline={true}
                rows="8"
                variant="outlined"
                onChange={(e) => { setDescription(e.target.value) }}
                helperText={handleCombineTextLength(description, "/1000")}
              />
              <ImageUpload />
              <Autocomplete
                multiple
                id="tags-standard"
                options={tagsList}
                getOptionLabel={option => option.tag}
                renderInput={params => (
                  <TextField
                    {...params}
                    fullWidth
                    variant="standard"
                    label="Tags"
                  />
                )}
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.submitbuttonroot}>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  )
}

export default AddProjectButton;
