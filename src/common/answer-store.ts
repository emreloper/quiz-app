import { makeVar } from '@apollo/client';

export interface Answer {
  quizId: string;
  questionId: string;
  option: string;
}

const CACHE_KEY = 'QUIZ_APP_ANSWERS';

export const answersVar = makeVar<Answer[]>(
  JSON.parse(window.localStorage.getItem(CACHE_KEY) ?? '[]')
);

export const setAnswer = (answer: Answer) => {
  // Don't mutate the state directly. Create a copy.
  const answers = answersVar().slice(0);
  const existingIndex = answers.findIndex(
    ({ questionId }) => questionId === answer.questionId
  );

  if (existingIndex === -1) {
    answers.push(answer);
  } else {
    answers[existingIndex] = answer;
  }

  window.localStorage.setItem(CACHE_KEY, JSON.stringify(answers));

  return answersVar(answers);
};
