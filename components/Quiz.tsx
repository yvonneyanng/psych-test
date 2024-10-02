"use client";
import React, { useState } from "react";
import Landing from "./Landing";
import Question from "./Question";
import Result from "./Result";
import GenerateResult from "./GenerateResult";
import Description from "./Description";
import { questionImages } from "@/assets/questionImages";
import { useTranslations } from "next-intl";

export default function Quiz() {
  const t = useTranslations("Question");
  const optionPoints = [10, 20, 30, 40];
  const questions = Array.from({ length: 13 }, (_, index) => {
    const questionNumber = `q${index + 1}`;
    return {
      question: t(`${questionNumber}.title`),
      image: questionImages[questionNumber],
      options: [
        t(`${questionNumber}.options.1`),
        t(`${questionNumber}.options.2`),
        t(`${questionNumber}.options.3`),
        t(`${questionNumber}.options.4`),
      ],
    };
  });

  const [step, setStep] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState<number[]>(Array(13).fill(0));

  const startQuiz = () => setStep(1);

  const handleNextQuestion = (selectedOption: number) => {
    const updatedAnswers = [...points];
    updatedAnswers[currentQuestionIndex] = optionPoints[selectedOption];
    setPoints(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep(3);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleGoToLanding = () => {
    setCurrentQuestionIndex(0);
    setStep(0);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setPoints(Array(13).fill(0));
    setStep(0);
  };

  const calculateResult = () => {
    const totalPoints = points.reduce(
      (sum: number, point: number) => sum + point,
      0
    );

    if (totalPoints <= 130) {
      return 0;
    } else if (totalPoints <= 260) {
      return 1;
    } else if (totalPoints <= 390) {
      return 2;
    } else {
      return 3;
    }
  };

  const handleGenerateResult = () => {
    setStep(4);
  };

  const progress =
    step === 3
      ? 100
      : ((currentQuestionIndex + (step === 1 ? 0 : 1)) /
          (questions.length + 1)) *
        100;

  return (
    <>
      {step === 0 && <Landing onStart={startQuiz} />}
      {step === 1 && (
        <Description
          progress={progress}
          onGoToLanding={handleGoToLanding}
          onStartQuiz={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <Question
          question={questions[currentQuestionIndex].question}
          id={currentQuestionIndex}
          image={questions[currentQuestionIndex].image}
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
      {step === 4 && (
        <Result onRestart={handleRestart} result={calculateResult()} />
      )}
    </>
  );
}
