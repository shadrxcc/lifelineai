import { UserChatProps } from "../@types/index.d";

export const UserChat = ({ message }: UserChatProps) => {
  return (
    <div className="flex items-center gap-x-4 py-4 px-4 sm:px-8 lg:px-20">
      <img src="/pfp-2.svg" alt="" />
      <p className="user-message text-[#1C1C1C] text-base leading-6">
        {message}
      </p>
    </div>
  );
};
