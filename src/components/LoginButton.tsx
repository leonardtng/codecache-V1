import React, {useState} from 'react';
import Popup from './Popup'
import '../css/LoginButton.css'

const LoginButton: React.FC = () => {
  let [showPopup, setShowPopup] = useState(false);

  if (showPopup===true){
    return(
      <div className="col-md-2">
        <button type="button" className="btn btn-dark" onClick={() => setShowPopup(showPopup=true)}>Login/Signup</button>
        <div className='popup-bg' onClick={() => setShowPopup(showPopup=false)}>
          <Popup />
        </div>
      </div>

    )
  }

  return (
    <div className="col-md-2">
      <button type="button" className="btn btn-dark" onClick={() => setShowPopup(showPopup=true)}>Login/Signup</button>
    </div>
  )
}

export default LoginButton;
