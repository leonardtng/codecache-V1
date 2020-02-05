import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";

const ProfileButton: React.FC = () => {
  let history = useHistory();
  const handleClick = () => { history.push("./ProfilePage.tsx") };
  return (
    <IconButton onClick={handleClick}>
      <AccountCircleIcon id="icon-style" fontSize="large" />
    </IconButton>
  );
}

export default ProfileButton;
