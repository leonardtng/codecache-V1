import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Zoom from '@material-ui/core/Zoom';
import { TransitionProps } from '@material-ui/core/transitions';
import Typography from '@material-ui/core/Typography';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sharebutton: {
      marginTop: '20px',
      '& .MuiIconButton-root': {
        backgroundColor: '#36E7E5',
      },
    },
    sideicontext: {
      padding: '5px 0',
    },
    dialog: {
      '& .MuiDialog-paperWidthSm': {
        maxWidth: 300,
      },
    },
    icongroup: {
      textAlign: 'center',
    },
    socialmediaicon: {
      padding: '5%'
    }
  }),
);

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

interface ShareButtonProps {
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

const ShareButton: React.FC<ShareButtonProps> = (props: ShareButtonProps) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const iconsize = 75

  return (
    <div className={classes.sharebutton}>
      <IconButton aria-label="share" style={{ color: "#ffffff" }} onClick={handleClickOpen}>
        <ShareIcon />
      </IconButton>
      <Typography variant="body2" color="textSecondary" component="p">
        <div className={classes.sideicontext}>Share</div>
      </Typography>
      <Dialog
        className={classes.dialog}
        open={open}
        TransitionComponent={Transition}
        disableScrollLock={true}
        onClose={handleClose}
        aria-labelledby="share-popup"
        aria-describedby="popup-content"
      >
        <DialogTitle id="share-popup">{"Share this Project"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="popup-content">
            If you like this project, share it with your friends!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={0} className={classes.icongroup}>
            <Grid item xs={4} className={classes.socialmediaicon}>
              <FacebookShareButton
                url={window.location.href}
                quote={'Check this out! Amazing project called ' + props.project.name + ' on CodeCache now!'}
              >
                <FacebookIcon size={iconsize} borderRadius={8} />
              </FacebookShareButton>
            </Grid>
            <Grid item xs={4} className={classes.socialmediaicon}>
              <WhatsappShareButton
                url={window.location.href}
                separator={'\n'}
                title={'Check this out! Amazing project called ' + props.project.name + ' on CodeCache now!'}
              >
                <WhatsappIcon size={iconsize} borderRadius={8} />
              </WhatsappShareButton>
            </Grid>
            <Grid item xs={4} className={classes.socialmediaicon}>
              <TelegramShareButton
                url={window.location.href}
                title={'Check this out! Amazing project called ' + props.project.name + ' on CodeCache now!'}
              >
                <TelegramIcon size={iconsize} borderRadius={8} />
              </TelegramShareButton>
            </Grid>
            <Grid item xs={4} className={classes.socialmediaicon}>
              <LinkedinShareButton
                url={window.location.href}
                title={props.project.name}
                summary={props.project.description}
                source={'Check this out! Amazing project on CodeCache!'}
              >
                <LinkedinIcon size={iconsize} borderRadius={8} />
              </LinkedinShareButton>
            </Grid>
            <Grid item xs={4} className={classes.socialmediaicon}>
              <RedditShareButton
                url={window.location.href}
                title={'Check this out! Amazing project called ' + props.project.name + ' on CodeCache now!'}
              >
                <RedditIcon size={iconsize} borderRadius={8} />
              </RedditShareButton>
            </Grid>
            <Grid item xs={4} className={classes.socialmediaicon}>
              <EmailShareButton
                url={window.location.href}
                separator={'\n\n'}
                subject={'Check this out! Amazing project called ' + props.project.name + ' on CodeCache now!'}
                body={props.project.description}
              >
                <EmailIcon size={iconsize} borderRadius={8} />
              </EmailShareButton>
            </Grid>
          </Grid>
        </DialogActions >
      </Dialog >
    </div >
  )
}

export default ShareButton;
