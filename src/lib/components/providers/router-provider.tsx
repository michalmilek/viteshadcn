import { AppRouter } from '@/lib/router';
import { Suspense } from 'react';


export const RouterProvider: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  );
};
