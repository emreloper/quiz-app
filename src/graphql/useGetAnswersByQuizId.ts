import { useReactiveVar } from '@apollo/client';
import { answersVar } from '../common/answer-store';

export const useGetAnswersByQuizId = (quizId: string) => {
  const answers = useReactiveVar(answersVar);

  return answers.filter((answer) => quizId === answer.quizId);
};
