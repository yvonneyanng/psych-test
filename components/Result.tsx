import React, { useRef } from "react";
import html2canvas from "html2canvas";

export default function Result({
  score,
  onRestart,
}: {
  score: number;
  onRestart: () => void;
}) {
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSaveImage = () => {
    if (resultRef.current) {
      html2canvas(resultRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "result.png";
        link.click();
      });
    }
  };
  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Result image here</h1>
      <button
        onClick={onRestart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Restart Quiz
      </button>
      <button
        onClick={handleSaveImage}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Save Image
      </button>
      <button
        onClick={handleCopyLink}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Copy Link
      </button>
    </div>
  );
}
