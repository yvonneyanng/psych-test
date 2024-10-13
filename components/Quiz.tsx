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
  const [optionCounts, setOptionCounts] = useState<number[]>(Array(4).fill(0));

  const startQuiz = () => setStep(1);

  const handleNextQuestion = (selectedOption: number) => {
    const updatedAnswers = [...points];
    updatedAnswers[currentQuestionIndex] = optionPoints[selectedOption];
    setPoints(updatedAnswers);

    const updatedOptionCounts = [...optionCounts];
    updatedOptionCounts[selectedOption] += 1;
    setOptionCounts(updatedOptionCounts);

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
    setOptionCounts(Array(4).fill(0));
    setStep(0);
  };

  const calculateResult = () => {
    const totalPoints = points.reduce((sum, point) => sum + point, 0);

    const maxClicks = Math.max(...optionCounts);
    const mostClickedOptions = optionCounts
      .map((count, index) => (count === maxClicks ? index : null))
      .filter((index) => index !== null);

    let resultType;
    let percentage;

    if (mostClickedOptions.length === 1) {
      resultType = mostClickedOptions[0];
      percentage = Math.round((maxClicks / 13) * 100);
    } else {
      resultType =
        totalPoints <= 130
          ? 0
          : totalPoints <= 260
          ? 1
          : totalPoints <= 390
          ? 2
          : 3;
      percentage = Math.round((totalPoints / 520) * 100);
    }
    return { resultType, percentage };
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
        <Result
          onRestart={handleRestart}
          result={calculateResult().resultType}
          percentage={calculateResult().percentage}
        />
      )}
    </>
  );
}
