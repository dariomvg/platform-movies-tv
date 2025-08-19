"use client";
import { useState } from "react";
import "@/styles/trailer-content.css";

export default function TrailerContent({
  videoId,
  title,
}: {
  videoId: string;
  title?: string;
}) {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  return (
    <div
      className="container-trailer-content"
      onClick={() => setIsPlayerVisible(true)}>
      {isPlayerVisible ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&color=red`}
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="container-thumnail">
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title || "YouTube thumbnail"}
            width="100%"
            height="100%"
            className="thumnail"
            loading="lazy"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            width="50"
            height="50"
            className="icon-trailer">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
