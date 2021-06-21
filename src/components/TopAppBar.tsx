import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const TopAppBar = () => {
  return (
    <Box bg="white" shadow="sm">
      <Box maxW="7xl" mx="auto" px={4}>
        <Stack direction="row" spacing={4} alignItems="center" height={12}>
          <Text as="a" href="/" fontSize="xl">
            🙋‍♀️ Quiz Dashboard
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};
