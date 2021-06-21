import React from 'react';
import { useGetQuizzes } from './graphql/useGetQuizzes';

export const App = () => {
  const { data } = useGetQuizzes();
  return <div>{JSON.stringify(data)}</div>;
};
