"use client";
import React, { useState } from "react";
import Landing from "./Landing";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
  const questions = [
    {
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      question: "What is your favorite animal?",
      options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Burger", "Pasta"],
    },
  ];
  const [step, setStep] = useState(0); // 0: Landing, 1: Question, 2: Result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => setStep(1);

  const handleAnswer = (index: number) => {
    setScore(score + index);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep(2);
    }
  };

  const restartQuiz = () => {
    setStep(0);
    setCurrentQuestionIndex(0);
    setScore(0);
  };
  return (
    <>
      {step === 0 && <Landing onStart={startQuiz} />}
      {step === 1 && (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      )}
      {step === 2 && <Result score={score} onRestart={restartQuiz} />}
    </>
  );
}
