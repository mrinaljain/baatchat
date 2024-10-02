import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = ({ children, isUser, redirect = "/login" }) => {

   if (!isUser) {
      return <Navigate to={redirect} />
   }
   return children ? children : <Outlet />;
}

export default ProtectRoute;


// Protected route will redirect the user based on user access
