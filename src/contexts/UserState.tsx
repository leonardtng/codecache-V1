import React, { createContext, useState } from 'react';

export const userState = createContext({isLoggedIn: false, toggleLogin: () => {}});

const UserState: React.FC = (props) => {
    let [isLoggedIn, setUserState] = useState(false);

    return(
        <userState.Provider value={ {isLoggedIn: false, toggleLogin: () => {isLoggedIn? setUserState(false) : setUserState(true);}} }>
            {props.children}
        </userState.Provider>
    )
}

export default UserState;