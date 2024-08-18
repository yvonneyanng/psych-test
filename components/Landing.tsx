import React from "react";

export default function Landing({ onStart }: { onStart: () => void }) {
  return (
    <div className="h-screen flex flex-col justify-start items-center bg-zinc-400 space-y-5 pt-32">
      <div className="bg-gray-300 h-72 w-60 flex justify-center items-center">
        測驗說明
      </div>
      <button
        onClick={onStart}
        className="bg-gray-300 text-black px-4 py-2 rounded"
      >
        開始測驗
      </button>
    </div>
  );
}
