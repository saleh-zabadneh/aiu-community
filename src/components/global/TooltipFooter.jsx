import React from "react";

function TooltipFooter({ name, linkedinUrl, visible }) {
  if (!visible) return null;

  return (
    <div className="absolute p-2 bg-white border rounded shadow-lg">
      <div className="flex items-center">
        <span className="mr-2">{name}</span>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/linkedin-icon.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
      </div>
    </div>
  );
}

export default TooltipFooter;
