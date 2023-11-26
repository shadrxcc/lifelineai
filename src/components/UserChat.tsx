import { UserChatProps } from "../@types/index.d";
import { useAuth } from "../context/AuthContext";
import { getInitials } from "../utils/UserInitials";
import ChatInitials from "./ChatInitials";

export const UserChat = ({ message }: UserChatProps) => {
  const { user } = useAuth();
  return (
    <div className="flex items-center gap-x-4 py-4 px-4 sm:px-8 lg:px-20">
      <ChatInitials
        initials={getInitials({ name: user ? user.full_name : "G" })}
      />
      <p className="user-message text-[#1C1C1C] text-base leading-6">
        {message}
      </p>
    </div>
  );
};
