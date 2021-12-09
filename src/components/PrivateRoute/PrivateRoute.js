// import React, { useContext } from 'react';
// import { Redirect, Route } from 'react-router';
// import { UserContext } from '../../App';

// const PrivateRoute = ({ children, ...rest }) => {
//     const [loggedInUser, setLoggedInUser]=useContext(UserContext);


import React, { useContext } from 'react';
import { UserContext } from '../../App';

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
   
    let location = useLocation();
    if (loggedInUser.email || sessionStorage.getItem('token')) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
