import { BotChatProps } from "../@types/index.d";

export const BotChat = ({ message }: BotChatProps) => {
  return (
    <div
      id="bot-chat"
      className="flex items-center gap-x-4 py-4 px-4 sm:px-8 lg:px-20"
    >
      <p className="user-message text-[#40A9FF] text-base leading-6">
        {message}
      </p>
    </div>
  );
};
