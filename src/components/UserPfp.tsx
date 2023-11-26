interface UserPfpType {
    name: string
}

const UserPfp = ({name} : UserPfpType) => {
  return (
    <div className="bg-[#F8F8F8] w-fit rounded-full p-2.5">
      <div className="bg-black rounded-[4px] flex justify-center flex-shrink-0 w-[32px] p-1.5">
        <p className="text-sm text-white font-medium font-inter">{name}</p>
      </div>
    </div>
  );
};

export default UserPfp;
