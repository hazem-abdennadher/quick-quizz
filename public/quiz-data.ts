export const quiz = {
  totalQuestions: 2,
  questions: [
    {
      id: 1,
      question: 'What is the purpose of the GROUP BY clause in SQL?',
      answers: [
        'To sort the results of a query based on a column or a group of columns.',
        'To aggregate rows with a function where values of a column are the same.',
        'To count the number of rows matching the selection.',
        'To choose which columns the query shall return.',
      ],
      correctAnswer: 2,
      explanation: {
        title:
          'To aggregate rows with a function where values of a column are the same.',
        description:
          'The passage explains that the GROUP BY clause is used to group rows on a given column C (aggregating rows with a function where values of C column are the same).',
      },
    },
    {
      id: 2,
      question:
        'What package can be used in Python to connect to an SQLite database?',
      answers: ['sqlite3', 'numpy', 'pandas', 'matplotlib'],
      correctAnswer: 2,
      explanation: {
        title: 'numpy',
        description:
          'The passage states that the sqlite3 package can be used in Python to connect to an SQLite database.',
      },
    },
  ],
};
