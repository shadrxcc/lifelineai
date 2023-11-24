const UserProfile = ({
  reminder,
  username,
  className,
  useremail,
}: {
  reminder: string;
  username: string;
  className?: string;
  useremail: string;
}) => {
  return (
    <div
      className={`px-4 py-5 rounded-xl bg-white w-[375px] flex flex-col gap-y-5 shadow-lg mx-auto border border-gray-50 ${className}`}
    >
      <div className="flex items-center gap-x-4">
        <img src="/pfp.svg" alt="" />
        <div className="flex flex-col gap-y-0.5">
          <p className="text-lg font-semibold leading-6">{username}</p>
          <p className="text-sm leading-5 text-[#616161]">{useremail}</p>
          <span className="flex items-center gap-x-2">
            <p id="cancel-text" className="text-sm font-normal leading-5">
              View medical history
            </p>
            <img src="/chevron-right.svg" alt="" />
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-1.5">
        <p className="text-sm leading-5 text-[#434343]">{reminder}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <img src="/alarm.svg" alt="" />
            <span className="px-3 py-1.5 bg-[#EEE] rounded-lg text-xs leading-4 text-[#434343]">
              20/11/23 (2pm)
            </span>
          </div>

          <img src="/Switch.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
