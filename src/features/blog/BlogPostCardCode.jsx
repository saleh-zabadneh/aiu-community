import React, { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FiStar } from "react-icons/fi";
import { Card } from "@/components/hover.dev/utils/Card";
import { BubbleButton } from "@/components/hover.dev/button/BubbleButton";
import { Markup } from "@/components/hover.dev/code/Markup";
import { PulseLine } from "@/components/hover.dev/utils/PulseLine";
import { Link } from "react-router-dom";

export const BlogPostCardCode = ({ post }) => {
  const [selected, setSelected] = useState("js");

  return (
    <Card className="max-w-3xl pt-3 mx-auto">
      <Link to={`/blog/it/posts/${post.id}`}>
        <div className="px-6 pb-3 mb-6">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="mt-2 text-sm text-gray-500">
            {post.content.length > 100
              ? `${post.content.substring(0, 100)}...`
              : post.content}
          </p>
        </div>
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
            code={
              post.code_snippets && post.code_snippets.length > 200
                ? `${post.code_snippets.substring(0, 200)}...`
                : post.code_snippets
                  ? post.code_snippets
                  : `import { initializeSDK } from "your-package";

const app = initializeSDK({
    apiKey: "Anas Al3rsa"
});

app.doCoolThing();`
            }
            lang={selected === "js" ? "javascript" : "python"}
          />
          {post.code_snippets && post.code_snippets.length > 300 && (
            <div className="mt-2 text-xs text-gray-500 cursor-pointer">
              Click to see full code
            </div>
          )}
        </div>
        <PulseLine />
      </Link>
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
