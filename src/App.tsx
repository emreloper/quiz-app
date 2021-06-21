import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/route';
import { AppShell } from './components/AppShell';

const Dashboard = React.lazy(() => import('./screens/Dashboard'));
const Question = React.lazy(() => import('./screens/Question'));

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppShell>
          <React.Suspense fallback="Loading...">
            <Routes>
              <Route path={ROUTE.DASHBOARD} element={<Dashboard />} />
              <Route path={ROUTE.QUESTION} element={<Question />} />
            </Routes>
          </React.Suspense>
        </AppShell>
      </BrowserRouter>
    </ChakraProvider>
  );
};
