import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";

import Image from "next/image";
import sampleResult from "../public/sample-result.png";

export default function Result({
  score,
  onRestart,
}: {
  score: number;
  onRestart: () => void;
}) {
  const resultRef = useRef<HTMLDivElement>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleSaveImage = () => {
    if (resultRef.current) {
      html2canvas(resultRef.current).then((canvas) => {
        const imageURL = canvas.toDataURL("image/png");
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(`
            <p>Long press the image below to save it to your gallery.</p>
            <img src="${imageURL}" alt="Result Image" />
          `);
          newWindow.document.title = "Save your result";
        } else {
          alert("Please enable popups for this site to save the image.");
        }
      });
    }
  };

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Result image here</h1>
      <Image
        src={sampleResult}
        width={200}
        height={300}
        alt="Picture of the author"
      />
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
        className={`px-4 py-2 rounded mt-4 ${
          linkCopied ? "bg-green-500 text-white" : "bg-gray-500 text-white"
        }`}
      >
        {linkCopied ? "Link Copied!" : "Copy Link"}
      </button>
    </div>
  );
}
