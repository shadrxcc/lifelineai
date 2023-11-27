import { BotChatProps } from "../@types/index.d";

export const BotChat = ({ message, like, dislike }: BotChatProps) => {
  return (
    <div
      id="bot-chat"
      className="flex py-4 px-4 gap-x-3 items-start sm:px-8 lg:px-20"
    >
      <p className="user-message text-[#40A9FF] flex-1 text-base leading-6">
        {message}
      </p>

      <div className="flex gap-x-2 items-center">
        <button className="p-1">
          <img src="/copy.svg" alt="" />
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
