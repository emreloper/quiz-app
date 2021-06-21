import { Box, Spacer } from '@chakra-ui/react';
import React from 'react';
import { TopAppBar } from './TopAppBar';

export const AppShell: React.FC = ({ children }) => {
  return (
    <Box bg="gray.200">
      <Box minH="100vh">
        <TopAppBar />
        <Spacer h={6} />
        <Box maxW="7xl" px={4} mx="auto">
          {children}
        </Box>
      </Box>
    </Box>
  );
};
