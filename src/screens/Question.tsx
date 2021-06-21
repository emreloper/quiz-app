import React from 'react';
import { useParams } from 'react-router-dom';
import { QuestionContent } from '../components/QuestionContent';

const Question = () => {
  const params = useParams();

  return (
    <QuestionContent
      quizId={params.quizId}
      questionNo={Number(params.questionNo)}
    />
  );
};

export default Question;
