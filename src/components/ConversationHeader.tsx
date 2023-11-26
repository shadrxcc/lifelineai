import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import TourDialog from "./TourDialog";
import UserProfile from "./UserProfile";
import UserPfp from "./UserPfp";
import { getInitials } from "../utils/UserInitials";

interface ConversationHeaderProps {
  tour1: boolean;
  step1: () => void;
  CloseTour: () => void;
}

const ConversationHeader: React.FC<ConversationHeaderProps> = ({ tour1, step1, CloseTour }) => {
  const authContext = useAuth();

  const [showProfile, setShowProfile] = useState(false);

  const profileShow = () => {
    setShowProfile(!showProfile);
  };

  if (!authContext) {
    return null;
  }

  const { user } = authContext;

  return (
    <div id="convo-header" className="px-4 sm:px-10 relative py-6">
      <div
        onClick={profileShow}
        className="flex cursor-pointer gap-x-3 items-center"
      >
        <UserPfp name={getInitials({ name: user ? user.full_name : "" })}/>
        <div className="flex flex-col gap-y-1">
          <p className="text-lg leading-5">
            {user ? user.full_name : "Jane Doe"}
          </p>
          <span className="flex items-center gap-x-1">
            <img src="/active.svg" alt="" />
            <p className="text-sm text-[#00A739]">Active</p>
          </span>
        </div>
      </div>

      

      {showProfile ? (
        <UserProfile
          className="absolute left-24"
          useremail={user ? user.email : ""}
          username={user ? user.full_name : "Jane Doe"}
          reminder="Drink water"
        />
      ) : null}

      {tour1 ? <TourDialog CloseTour={CloseTour} Next={step1}
        step={1}
        className={`absolute top-20 lg:top-14 sm:left-30 lg:left-44 z-10`}
        heading="Profile"
        subHeading="Manage your profile information and medical history."
        btnText="Next"
      /> : null}
    </div>
  );
}

export default ConversationHeader