import App from '@/App';
import { Login } from '@/features/login';
import { ProtectedRoute, UnprotectedRoute } from '@/lib/components/authenthication';
import { ErrorPage } from '@/lib/components/error-page';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  useEffect(() => {
    localStorage.setItem('authToken', '123');
  }, []);
  return (
    <Router>
      <Routes>
        {/* Redirect root path to /dashboard */}
        <Route path="/" element={<App />} />

        {/* Unprotected routes for unauthenticated users */}
        <Route element={<UnprotectedRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected routes for authenticated users */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<div>Dashboard</div>} />
        </Route>

        {/* Catch all for any undefined route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
