import { Navigate } from 'react-router-dom'
import React from "react";

interface Props {
    component: React.ComponentType
    path?: string
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')

    if (isAuthenticated === 'true') {
        return <RouteComponent />
    }

    return <Navigate to="/" />
}
