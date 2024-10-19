import { DashboardLayout } from '@/lib/dashboard';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  return Boolean(localStorage.getItem('authToken'));
};

export const ProtectedRoute = () => {
  const isAuthorized = isAuthenticated();
  console.log('🚀 ~ ProtectedRoute ~ isAuthorized:', isAuthorized);
  return isAuthorized ? <DashboardLayout><Outlet /></DashboardLayout> : <Navigate to="/login" />;
};

