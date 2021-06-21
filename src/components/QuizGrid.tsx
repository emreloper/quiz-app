import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useGetQuizzes } from '../graphql/useGetQuizzes';
import { QuizCard } from './QuizCard';
import { ScreenLoading } from './ScreenLoading';

export const QuizGrid = () => {
  const { data, loading } = useGetQuizzes();

  if (loading) return <ScreenLoading />;

  return (
    <SimpleGrid columns={[1, 2]} spacing={4}>
      {data?.quizzes.map((quiz) => (
        <QuizCard key={quiz.id} {...quiz} />
      ))}
    </SimpleGrid>
  );
};
