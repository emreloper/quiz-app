/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetQuestionsByQuizId
// ====================================================

export interface GetQuestionsByQuizId_quizzes_questions {
  __typename: 'questions';
  id: any;
  quiz_id: any;
  text: string;
  options: string;
  answer: string;
}

export interface GetQuestionsByQuizId_quizzes {
  __typename: 'quizzes';
  id: any;
  name: string;
  /**
   * An array relationship
   */
  questions: GetQuestionsByQuizId_quizzes_questions[];
}

export interface GetQuestionsByQuizId {
  /**
   * fetch data from the table: "quizzes"
   */
  quizzes: GetQuestionsByQuizId_quizzes[];
}

export interface GetQuestionsByQuizIdVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetQuizzes
// ====================================================

export interface GetQuizzes_quizzes_questions {
  __typename: 'questions';
  id: any;
  answer: string;
}

export interface GetQuizzes_quizzes {
  __typename: 'quizzes';
  id: any;
  name: string;
  /**
   * An array relationship
   */
  questions: GetQuizzes_quizzes_questions[];
}

export interface GetQuizzes {
  /**
   * fetch data from the table: "quizzes"
   */
  quizzes: GetQuizzes_quizzes[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
