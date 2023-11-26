interface chatInitials {
  initials: string;
}

const ChatInitials = ({ initials }: chatInitials) => {
  return (
    <div className="bg-black rounded-full flex justify-center flex-shrink-0 w-[35px] p-2">
      <p className="text-sm text-white font-medium font-inter">{initials}</p>
    </div>
  );
};

export default ChatInitials;
