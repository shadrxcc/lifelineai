import { useState } from "react";
import { BotChatProps } from "../@types/index.d";

export const BotChat = ({ message, like, dislike }: BotChatProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying text to clipboard:", error);
    }
  };

  return (
    <div
      id="bot-chat"
      className="flex flex-col xl:flex-row py-4 px-4 gap-3 items-start sm:px-8 lg:px-20"
    >
      <p className="user-message text-[#40A9FF] flex-1 text-base leading-6">
        {message}
      </p>

      <div className="flex gap-x-2 items-center">
        <button onClick={handleCopy} className="p-1">
          {copied ? (
            <img src="/check.svg" alt="" />
          ) : (
            <img src="/copy.svg" alt="" />
          )}
        </button>
        <button onClick={like} className="p-1">
          <img src="/like.svg" alt="" />
        </button>
        <button onClick={dislike} className="p-1">
          <img src="/dislike.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
