import { useReactiveVar } from '@apollo/client';
import { answersVar } from '../common/answer-store';

export const useGetAnswerByQuestionId = (questionId: string) => {
  const answers = useReactiveVar(answersVar);

  return answers.find((answer) => questionId === answer.questionId);
};
