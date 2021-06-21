import { Box, Button, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { createRoutePath, ROUTE } from '../common/route';
import { GetQuizzes_quizzes } from '../types/globalTypes';

export const QuizCard = ({ id, name, questions }: GetQuizzes_quizzes) => {
  return (
    <Box p={4} bg="white" shadow="xs">
      <Stack spacing="4">
        <Heading as="h3" fontSize="lg">
          {name}
        </Heading>
        <Stack direction="row" alignItems="center">
          <Text>{questions.length} Questions</Text>
          <Spacer />
          <Button
            as={Link}
            to={createRoutePath(ROUTE.QUESTION, {
              quizId: id,
              questionNo: 1,
            })}
            colorScheme="teal"
            variant="solid"
          >
            Start
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
