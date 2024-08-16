import React from "react";

export default function Landing({ onStart }: { onStart: () => void }) {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <button
          onClick={onStart}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          開始測驗
        </button>
      </div>
    </>
  );
}
