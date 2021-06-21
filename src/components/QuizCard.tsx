import { Box, Button, Heading, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';
import { GetQuizzes_quizzes } from '../types/globalTypes';

export const QuizCard = ({ id, name }: GetQuizzes_quizzes) => {
  return (
    <Box p={4} bg="white" shadow="xs">
      <Stack spacing="4">
        <Heading as="h3" size="md">
          {name}
        </Heading>
        <Stack direction="row">
          <Spacer />
          <Button colorScheme="teal" variant="solid">
            Start
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
