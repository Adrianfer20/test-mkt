// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import SectionLoading from './SectionLoading';



const ProtectedRoute = ({ redirectPath = '/test-mkt/login', loadingComponent: LoadingComponent = null }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return LoadingComponent ? <LoadingComponent /> : <SectionLoading/>;
    }

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
