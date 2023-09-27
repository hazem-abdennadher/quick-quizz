'use client';
import { FunctionComponent, useMemo, useState } from 'react';
import Container from '../common/container';
import QuizQuestion from '../ui/quiz-question';
import { quiz } from '@/public/quiz-data';
import Answer from '../ui/answer';
import { Button } from '../ui/button';
import Explanantion from '../ui/explanation';
import Results from '../ui/results';

interface QuizzProps {}

const Quiz: FunctionComponent<QuizzProps> = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [finishQuiz, setFinishQuiz] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [revealResults, setRevealResults] = useState<boolean>(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions, totalQuestions } = useMemo(() => quiz, []);

  const { answers, correctAnswer, question, explanation } = useMemo(
    () => questions[activeQuestion],
    [activeQuestion, questions]
  );

  const SelectAndCheckAnswer = (index: number) => {
    setSelectedAnswer(index);
    setRevealResults(true);
  };
  const NextQuestion = () => {
    setResult((prev) =>
      selectedAnswer === correctAnswer
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
            score: prev.score + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    setRevealResults(false);
    if (activeQuestion !== totalQuestions - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setFinishQuiz(true);
    }
    setSelectedAnswer(null);
  };
  return (
    <Container className="flex w-full justify-center flex-col gap-12 max-w-lg rounded-lg min-h-[600px]">
      {finishQuiz ? (
        <Results
          score={result.score}
          isGood={result.correctAnswers >= result.wrongAnswers}
        />
      ) : (
        <>
          <QuizQuestion
            questionNumber={activeQuestion + 1}
            allQuestionsNumebr={totalQuestions}
            question={question}
          />
          <div className="flex flex-col gap-5 items-start w-full">
            {answers.map((answer, index) => {
              return (
                <Answer
                  key={index}
                  answer={answer}
                  isCorrect={
                    correctAnswer === index + 1 ||
                    correctAnswer === selectedAnswer
                  }
                  revealIsCorrect={
                    (revealResults && selectedAnswer === index + 1) ||
                    (revealResults && correctAnswer === index + 1)
                  }
                  index={index}
                  onClick={() => SelectAndCheckAnswer(index + 1)}
                  disabled={selectedAnswer !== null}
                />
              );
            })}
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <Explanantion disabled={!selectedAnswer} {...explanation} />

            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer disabled:cursor-default disabled:opacity-50 transition-all ease-in-out duration-300"
              disabled={!selectedAnswer}
              onClick={() => NextQuestion()}
            >
              Next Question
            </button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Quiz;
