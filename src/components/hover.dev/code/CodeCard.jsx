import React, { useState } from "react";
import { Markup } from "./Markup";
import { SiGithub } from "react-icons/si";
import { FiStar } from "react-icons/fi";
import { Card } from "../utils/Card";
import { BubbleButton } from "../button/BubbleButton";
import { PulseLine } from "../utils/PulseLine";

export const CodeCard = () => {
  const [selected, setSelected] = useState("js");

  return (
    <Card className="max-w-3xl pt-3 mx-auto">
      <div className="flex items-center justify-between px-6 pb-3 mb-6 border-b -mx-9 border-zinc-700">
        <div className="flex items-center gap-3">
          <ToggleChip
            onClick={() => setSelected("js")}
            selected={selected === "js"}
          >
            JavaScript
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("py")}
            selected={selected === "py"}
          >
            Python
          </ToggleChip>
        </div>
        <BubbleButton className="text-xs">
          <SiGithub />
          <FiStar className="hidden sm:inline" />
          <span className="hidden sm:inline">1,234</span>
        </BubbleButton>
      </div>
      <div className="px-6 -mx-6 overflow-x-scroll no-scrollbar">
        <Markup
          code={selected === "js" ? javascriptCode : pythonCode}
          lang={selected === "js" ? "javascript" : "python"}
        />
      </div>
      <PulseLine />
    </Card>
  );
};

const ToggleChip = ({ children, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-1.5 py-0.5 text-sm font-medium transition-colors ${selected ? "bg-blue-600 text-zinc-50" : "bg-zinc-900 text-zinc-50 hover:bg-zinc-700"}`}
    >
      {children}
    </button>
  );
};

const javascriptCode = `import { aiuSDK } from "AIU-package";

const app = initializeSDK({
    apiKey: "helloAIUCommunity"
});

app.run_community();`;

const pythonCode = `import your_package

app = your_package.init({
    "api_key": "sk_abc123"
})

app.run_community()`;
