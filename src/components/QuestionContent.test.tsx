import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FIXTURE_GET_QUESTIONS_BY_QUIZ_ID from '../fixtures/GET_QUESTIONS_BY_QUIZ_ID.json';
import { GET_QUESTIONS_BY_QUIZ_ID } from '../graphql/useGetQuestionsQuizById';
import { QuestionContent } from './QuestionContent';

const mocks = [
  {
    request: {
      query: GET_QUESTIONS_BY_QUIZ_ID,
      variables: {
        id: '03daf064-0b47-40c5-9b39-0d81a5f58397',
      },
    },
    result: FIXTURE_GET_QUESTIONS_BY_QUIZ_ID,
  },
];

describe('QuestionContent.tsx', () => {
  it('should load the questions', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={
                <QuestionContent
                  quizId="03daf064-0b47-40c5-9b39-0d81a5f58397"
                  questionNo={1}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </MockedProvider>
    );

    let element;

    await waitFor(() => (element = screen.getByText('Tokyo')));

    expect(element).toMatchInlineSnapshot(`
<span
  class="chakra-radio__label css-1y8kf23"
>
  Tokyo
</span>
`);
  });
});
