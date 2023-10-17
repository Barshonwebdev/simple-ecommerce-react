import React, { useContext } from 'react';
import { AuthContext } from '../providers/authProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    let location=useLocation();
    
    if(loading){
        return <div>loading...</div>;
    }
    if (user){
        return children;
    }
    return <Navigate to='/login' replace state={{from: location}}></Navigate>
};

export default PrivateRoutes;