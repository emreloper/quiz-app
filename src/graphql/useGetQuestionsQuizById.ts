import { gql, useQuery } from '@apollo/client';
import {
  GetQuestionsByQuizId,
  GetQuestionsByQuizIdVariables,
} from '../types/globalTypes';

const GET_QUESTIONS_BY_QUIZ_ID = gql`
  query GetQuestionsByQuizId($id: uuid!) {
    quizzes(where: { id: { _eq: $id } }) {
      id
      name
      questions {
        id
        quiz_id
        text
        options
        answer
      }
    }
  }
`;

export const useGetQuestionsByQuizId = (id: string) => {
  return useQuery<GetQuestionsByQuizId, GetQuestionsByQuizIdVariables>(
    GET_QUESTIONS_BY_QUIZ_ID,
    { variables: { id } }
  );
};
