import React from 'react';
import { Helmet } from 'react-helmet';
import { QuizGrid } from '../components/QuizGrid';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Quiz App</title>
      </Helmet>
      <QuizGrid />
    </>
  );
};

export default Dashboard;
