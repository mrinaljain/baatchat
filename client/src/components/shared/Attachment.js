import React from "react";

const Attachment = ({ file, url }) => {
  switch (file) {
    case "video":
      return (
        <video controls className="w-full h-auto rounded-lg">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );

    case "image":
      return (
        <img
          src={url}
          alt="attachment"
          className="w-full h-auto rounded-lg object-cover"
        />
      );

    case "mp3":
      return (
        <audio controls className="w-full">
          <source src={url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );

    case "document":
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:underline"
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6l-4-4H6zM5 4a1 1 0 011-1h4v3a2 2 0 002 2h3v7a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm8 4a1 1 0 00-1-1H7a1 1 0 000 2h5a1 1 0 001-1z"
              clipRule="evenodd"
            />
          </svg>
          Download Document
        </a>
      );

    default:
      return null;
  }
};

export default Attachment;
