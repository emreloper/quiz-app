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
import { Link } from 'react-router-dom';
import { createRoutePath, ROUTE } from '../common/route';
import { UseGetQuestionsByQuizId } from '../graphql/useGetQuestionsQuizById';

interface QuestionContentProps {
  quizId: string;
  questionNo: number;
}

export const QuestionContent = ({
  quizId,
  questionNo,
}: QuestionContentProps) => {
  const { data } = UseGetQuestionsByQuizId(quizId);
  const quiz = data?.quizzes[0];
  const question = quiz?.questions[questionNo - 1];
  const options = question?.options.split(',');
  const isFirstQuestion = questionNo === 1;
  const isLastQuestion = questionNo === quiz?.questions.length;

  return (
    <Container>
      <Heading size="lg">Quiz: {quiz?.name}</Heading>
      <Spacer h={6} />
      <Text fontSize="lg">{question?.text}</Text>
      <Spacer h={6} />
      <RadioGroup>
        <Stack spacing={2}>
          {options?.map((option) => (
            <Box bg="white" px={3} py={2}>
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
              quizId: question?.quiz_id,
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
                  quizId: question?.quiz_id,
                  questionNo: questionNo + 1,
                })
          }
          colorScheme="teal"
        >
          {isLastQuestion ? 'Finish' : 'Next'}
        </Button>
      </Stack>
    </Container>
  );
};
