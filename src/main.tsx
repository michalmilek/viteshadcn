import { RouterProvider } from '@/lib/components';
import { Providers } from '@/lib/components';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <RouterProvider />
    </Providers>
  </StrictMode>,
);
