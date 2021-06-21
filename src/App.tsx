import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE } from './common/route';
import { AppShell } from './components/AppShell';
import { ScreenLoading } from './components/ScreenLoading';
import NotFound from './screens/NotFound';

const Dashboard = React.lazy(() => import('./screens/Dashboard'));
const Question = React.lazy(() => import('./screens/Question'));

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppShell>
          <React.Suspense fallback={<ScreenLoading />}>
            <Routes>
              <Route path={ROUTE.DASHBOARD} element={<Dashboard />} />
              <Route path={ROUTE.QUESTION} element={<Question />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </AppShell>
      </BrowserRouter>
    </ChakraProvider>
  );
};
