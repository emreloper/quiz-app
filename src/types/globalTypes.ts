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
