import { setAnswer } from './answer-store';

describe('answer-store.ts', () => {
  it('should add and answer to the store', () => {
    const answer = { quizId: '1', questionId: '1', option: 'yes' };

    expect(setAnswer(answer)).toEqual([answer]);
  });

  it('should replace an answer in the store', () => {
    setAnswer({ quizId: '1', questionId: '1', option: 'yes' });

    const answer = { quizId: '1', questionId: '1', option: 'no' };

    expect(setAnswer(answer)).toEqual([answer]);
  });
});
