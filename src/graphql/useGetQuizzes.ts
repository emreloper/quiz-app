import { gql, useQuery } from '@apollo/client';
import { GetQuizzes } from '../types/globalTypes';

const GET_QUIZZES = gql`
  query GetQuizzes {
    quizzes {
      id
      name
    }
  }
`;

export const useGetQuizzes = () => {
  return useQuery<GetQuizzes>(GET_QUIZZES);
};
