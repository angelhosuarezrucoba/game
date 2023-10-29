import React from "react";
import {Navigate, Outlet} from 'react-router-dom'

export const UnprotectedRoutes = () => {
    const token = localStorage.getItem("token");
    return token ? <Navigate to="/home"/> : <Outlet/>;
}