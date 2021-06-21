import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useGetQuizzes } from '../graphql/useGetQuizzes';
import { QuizCard } from './QuizCard';

export const QuizGrid = () => {
  const { data } = useGetQuizzes();

  return (
    <SimpleGrid columns={[1, 2]} spacing={4}>
      {data?.quizzes.map((quiz) => (
        <QuizCard key={quiz.id} {...quiz} />
      ))}
    </SimpleGrid>
  );
};
