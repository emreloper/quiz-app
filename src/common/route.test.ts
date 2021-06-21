import { createRoutePath, ROUTE } from './route';

describe('route.ts', () => {
  it('should create a path without parameters', () => {
    expect(createRoutePath(ROUTE.DASHBOARD)).toMatchInlineSnapshot(
      JSON.stringify('/')
    );
  });

  it('should create a path with parameters', () => {
    expect(
      createRoutePath(ROUTE.QUESTION, { quizId: 'some-quiz-id', questionNo: 1 })
    ).toMatchInlineSnapshot(JSON.stringify('/some-quiz-id/1/'));
  });
});
