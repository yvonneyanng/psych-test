"use client";
import React, { useState } from "react";
import Landing from "./Landing";
import Question from "./Question";
import Result from "./Result";
import GenerateResult from "./GenerateResult";

export default function Quiz() {
  const questions = [
    {
      question: "What is your favorite color?",
      options: ["Red", "Blue"],
    },
    {
      question: "What is your favorite animal?",
      options: ["Dog", "Cat"],
    },
    {
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi"],
    },
  ];
  const [step, setStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => setStep(1);

  const handleNextQuestion = (index: number) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep(3); // Go to GenerateResult after the last question
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleGoToLanding = () => {
    setCurrentQuestionIndex(0);
    setStep(0); // Go back to the landing page
  };

  const handleGenerateResult = () => {
    setStep(4); // Move to the Result component after generating the result
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setStep(0);
  };

  // Calculate progress as a percentage, considering the extra step for GenerateResult
  const totalSteps = questions.length + 2; // Include GenerateResult and Result steps
  const progress =
    step === 3
      ? 100 // 100% when on the GenerateResult screen
      : (currentQuestionIndex / questions.length) * 100;

  return (
    <>
      {step === 0 && <Landing onStart={startQuiz} />}
      {step === 1 && (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleNextQuestion}
          onGoBack={handlePreviousQuestion}
          onGoToLanding={handleGoToLanding}
          isFirstQuestion={currentQuestionIndex === 0}
          progress={progress}
        />
      )}
      {step === 3 && (
        <GenerateResult
          onGenerate={handleGenerateResult}
          onGoToLanding={handleGoToLanding}
          progress={progress}
        />
      )}
      {step === 4 && <Result score={score} onRestart={handleRestart} />}
    </>
  );
}
