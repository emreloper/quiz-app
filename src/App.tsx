import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { AppShell } from './components/AppShell';

const Dashboard = React.lazy(() => import('./screens/Dashboard'));

export const App = () => {
  return (
    <ChakraProvider>
      <AppShell>
        <React.Suspense fallback="Loading...">
          <Dashboard />
        </React.Suspense>
      </AppShell>
    </ChakraProvider>
  );
};
