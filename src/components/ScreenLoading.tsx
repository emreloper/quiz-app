import { Container, Skeleton, Stack } from '@chakra-ui/react';
import React from 'react';

export const ScreenLoading = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <Skeleton colorScheme="whiteAlpha" h={6} />
        <Skeleton colorScheme="whiteAlpha" h={6} />
        <Skeleton colorScheme="whiteAlpha" h={6} />
        <Skeleton colorScheme="whiteAlpha" h={6} />
      </Stack>
    </Container>
  );
};
