"use client";
import React, { useState } from "react";
import Landing from "./Landing";
import Question from "./Question";
import Result from "./Result";
import GenerateResult from "./GenerateResult";
import { questionImages } from "@/assets/questionImages";

import { useTranslations } from "next-intl";

export default function Quiz() {
  const t = useTranslations("Question");
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
  const [answers, setAnswers] = useState<number[]>(Array(13).fill(null));

  const startQuiz = () => setStep(1);

  const handleNextQuestion = (selectedOption: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(updatedAnswers);

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
    setAnswers(Array(13).fill(null)); // Reset answers
    setStep(0);
  };

  const calculateResult = () => {
    const counts = [0, 0, 0, 0];
    answers.forEach((answer) => {
      if (answer !== null) {
        counts[answer]++;
      }
    });
    const totalAnswered = answers.filter((answer) => answer !== null).length;
    const percentages = counts.map((count) => (count / totalAnswered) * 100);

    const maxPercentage = Math.max(...percentages);
    const resultIndex = percentages.indexOf(maxPercentage);

    const animals = ["鴨嘴獸", "袋鼠", "袋熊", "無尾熊"];
    return animals[resultIndex];
  };

  const handleGenerateResult = () => {
    setStep(4);
  };
  const progress =
    step === 3 ? 100 : (currentQuestionIndex / questions.length) * 100;

  return (
    <div className="bg-primary">
      {step === 0 && <Landing onStart={startQuiz} />}
      {step === 1 && (
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
    </div>
  );
}
