export enum ROUTE {
  DASHBOARD = '/',
  QUESTION = '/:quizId/:questionNo/',
}

type Args =
  | [ROUTE.DASHBOARD]
  | [ROUTE.QUESTION, { quizId: string; questionNo: number }];

export function createRoutePath(...args: Args) {
  const [path, params] = args;

  // Save some CPU power for routes without params
  if (typeof params === 'undefined') return path;

  // Create a path by replacing params in the route definition
  return Object.entries(params).reduce(
    (previousValue: string, [param, value]) =>
      previousValue.replace(`:${param}`, '' + value),
    path
  );
}
