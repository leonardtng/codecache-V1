import React from 'react';
import "../css/Popup.css";

const Popup: React.FC = () => {
  return (
    <div className="popup">
      <button className="btn btn-dark gh-login" type="submit">Login with Github</button>
      <button className="btn btn-dark gh-signup" type="submit">Signup with Github</button>
    </div>
  )
}

export default Popup