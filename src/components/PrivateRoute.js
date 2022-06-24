import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    if (!localStorage.getItem('token')) { //karna belum login, ngga boleh langsung masuk ke route tersebut jadi akan diarahkan ke route /login
       return <Navigate to='/login' state={ {from: location} }/>
    }

    return children
}

export default PrivateRoute;
