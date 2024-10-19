import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createStore, Provider as JotaiProvider } from 'jotai';
import { Bounce, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface ProviderProps {
  children: React.ReactNode;
}

const jotaiStore = createStore();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Retry failed queries up to 3 times
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff starting at 1s, up to 30s
      staleTime: 30 * 60 * 1000, // Data is fresh for 5 minutes
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus
      refetchOnReconnect: true, // Refetch if the browser reconnects
      refetchOnMount: false, // Disable refetching on component mount if data is cached
    },
    mutations: {
      retry: false, // No retry for mutations by default
    },
  },
});

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <JotaiProvider store={jotaiStore}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </QueryClientProvider>
    </JotaiProvider>
  );
};
