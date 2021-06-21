import {
  Box,
  Button,
  Container,
  Heading,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate } from 'react-router-dom';
import { setAnswer } from '../common/answer-store';
import { createRoutePath, ROUTE } from '../common/route';
import { useGetAnswerByQuestionId } from '../graphql/useGetAnswerByQuestionId';
import { useGetQuestionsByQuizId } from '../graphql/useGetQuestionsQuizById';
import { ScreenLoading } from './ScreenLoading';

interface QuestionContentProps {
  quizId: string;
  questionNo: number;
}

export const QuestionContent = ({
  quizId,
  questionNo,
}: QuestionContentProps) => {
  const { data, loading } = useGetQuestionsByQuizId(quizId);
  const quiz = data?.quizzes[0];
  const question = quiz?.questions[questionNo - 1];
  const options = question?.options.split(',');
  const isFirstQuestion = questionNo === 1;
  const isLastQuestion = questionNo === quiz?.questions.length;
  const answer = useGetAnswerByQuestionId(question?.id);

  if (loading) return <ScreenLoading />;

  if (typeof question === 'undefined') return <Navigate to="/not-found/" />;

  if (questionNo < 1 || questionNo > (quiz?.questions?.length ?? 0))
    return <Navigate to="/not-found/" />;

  return (
    <>
      <Helmet>
        <title>{quiz?.name} | Quiz App</title>
      </Helmet>
      <Container>
        <Heading size="lg">Quiz: {quiz?.name}</Heading>
        <Spacer h={6} />
        <Text fontSize="lg">{question.text}</Text>
        <Spacer h={6} />
        <RadioGroup
          value={answer?.option}
          onChange={(selected) => {
            setAnswer({
              quizId: question.quiz_id,
              questionId: question.id,
              option: selected,
            });
          }}
        >
          <Stack spacing={2}>
            {options?.map((option) => (
              <Box key={option} bg="white" px={3} py={2}>
                <Radio colorScheme="teal" value={option}>
                  {option}
                </Radio>
              </Box>
            ))}
          </Stack>
        </RadioGroup>
        <Spacer h={6} />
        <Stack direction="row">
          {isFirstQuestion === false && (
            <Button
              as={Link}
              to={createRoutePath(ROUTE.QUESTION, {
                quizId: question.quiz_id,
                questionNo: questionNo - 1,
              })}
              colorScheme="gray"
            >
              Back
            </Button>
          )}
          <Spacer />
          <Button
            as={Link}
            to={
              isLastQuestion
                ? createRoutePath(ROUTE.DASHBOARD)
                : createRoutePath(ROUTE.QUESTION, {
                    quizId: question.quiz_id,
                    questionNo: questionNo + 1,
                  })
            }
            colorScheme="teal"
          >
            {isLastQuestion ? 'Finish' : 'Next'}
          </Button>
        </Stack>
      </Container>
    </>
  );
};
