import TourDialog from "./TourDialog";
import UserProfile from "./UserProfile";

export default function ConversationHeader() {
  return (
    <div id="convo-header" className="px-10 relative py-6">
      <div className="flex gap-x-3 items-center">
        <img src="/pfp.svg" alt="" />
        <div className="flex flex-col gap-y-1">
          <p className="text-lg leading-5">Jane Doe</p>
          <span className="flex items-center gap-x-1">
            <img src="/active.svg" alt="" />
            <p className="text-sm text-[#00A739]">Active</p>
          </span>
        </div>
      </div>

      <UserProfile className="absolute hidden left-24"
        useremail="Janedoe@gmail.com"
        username="Jane Doe"
        reminder="Drink water"
      />

      <TourDialog
        step={1}
        className="absolute hidden top-14 left-48 z-10"
        heading="Profile"
        subHeading="Manage your profile information and medical history."
        btnText="Next"
      />
    </div>
  );
}
