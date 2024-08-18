import React, { useRef, useState } from "react";

import Image from "next/image";
import sampleResult from "../public/placeholder-image.png";

export default function Result({
  score,
  onRestart,
}: {
  score: number;
  onRestart: () => void;
}) {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-start pt-24 h-screen bg-zinc-400">
      {/* <h1 className="text-3xl font-bold mb-10">Result image here</h1> */}
      <Image src={sampleResult} width={300} alt="Picture of the author" />
      <div className="flex w-72 mt-10 justify-between">
        <button
          onClick={onRestart}
          className="flex-1 mx-1 bg-gray-300 text-black px-4 py-2 rounded"
        >
          再測一次
        </button>
        <button
          onClick={handleCopyLink}
          className={`flex-1 mx-1 px-4 py-2 rounded ${
            linkCopied ? "bg-green-500 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {linkCopied ? "連結已複製!" : "複製連結"}
        </button>
      </div>
    </div>
  );
}
