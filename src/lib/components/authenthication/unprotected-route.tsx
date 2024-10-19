import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  return Boolean(localStorage.getItem('authToken'));
};


export const UnprotectedRoute = () => {
  return isAuthenticated() ? <Navigate to="/dashboard" /> : <Outlet />;
};
