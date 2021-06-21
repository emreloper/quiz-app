import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../common/route';

export const TopAppBar = () => {
  return (
    <Box bg="white" shadow="sm">
      <Box maxW="7xl" mx="auto" px={4}>
        <Stack direction="row" spacing={4} alignItems="center" height={12}>
          <Text as={Link} to={ROUTE.DASHBOARD} fontSize="xl">
            🙋‍♀️ Quiz Dashboard
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};
