import React from "react";

export default function Question({
  question,
  options,
  onAnswer,
}: {
  question: string;
  options: string[];
  onAnswer: (index: number) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
