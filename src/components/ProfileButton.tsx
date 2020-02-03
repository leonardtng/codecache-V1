import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const ProfileButton = () => {
  return (
    <IconButton>
      <AccountCircleIcon id="icon-style" fontSize="large" />
    </IconButton>
  )
}

export default ProfileButton;
