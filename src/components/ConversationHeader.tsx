import { useAuth } from "../context/AuthContext";
import TourDialog from "./TourDialog";
import UserProfile from "./UserProfile";
import UserPfp from "./UserPfp";
import { getInitials } from "../utils/UserInitials";
import SideBar from "./SideBar";

interface ConversationHeaderProps {
  tour1: boolean;
  step1: () => void;
  CloseTour: () => void;
  toggleMenu: () => void;
  menu: boolean;
  clearModalOpen: () => void;
  clearchat?: () => void;
  closeMenu: () => void;
  showProfile: boolean;
  profileShow: () => void;
  onReminder?: () => void;
  offReminder?: () => void;
  turnon: boolean,
  turnoff: boolean
}

const ConversationHeader: React.FC<ConversationHeaderProps> = ({
  tour1,
  step1,
  CloseTour,
  toggleMenu,
  clearModalOpen,
  menu,
  closeMenu,
  onReminder,
  showProfile,
  profileShow,
  offReminder,
  turnoff,
  turnon
}) => {
  const {auth}= useAuth();


  return (
    <div
      id="convo-header"
      className="px-4 flex items-center justify-between sm:px-10 relative py-6"
    >
      <div
        onClick={profileShow}
        className="flex cursor-pointer gap-x-3 items-center"
      >
        <UserPfp name={getInitials({ name: auth ? auth?.user?.full_name : "Guest" })} />
        <div className="flex flex-col gap-y-1">
          <p className="text-lg leading-5">{auth ? auth?.user?.full_name : "Guest"}</p>
          <span className="flex items-center gap-x-1">
            <img src="/active.svg" alt="" />
            <p className="text-sm text-[#00A739]">Active</p>
          </span>
        </div>
      </div>

      <button onClick={toggleMenu} className="sm:hidden">
        <img width={30} height={30} src="/menu.svg" alt="" />
      </button>

      {menu ? (
        <SideBar
          clearchat={clearModalOpen}
          closeMenu={closeMenu}
          className="absolute z-10 w-full flex flex-col active-menu justify-between top-0 left-0 right-0 sm:hidden"
        />
      ) : null}

      {showProfile ? (
        <UserProfile turnoff={turnoff} turnon={turnon}
          offReminder={offReminder}
          onReminder={onReminder}
          name={getInitials({ name: auth ? auth.user?.full_name : "G" })}
          className="absolute top-20 left-24"
          useremail={auth ? auth.user?.email : ""}
          username={auth ? auth.user?.full_name : "Guest"}
          reminder="Drink water"
        />
      ) : null}

      {tour1 ? (
        <TourDialog
          CloseTour={CloseTour}
          Next={step1}
          step={1}
          className={`absolute top-20 lg:top-14 sm:left-30 lg:left-44 z-10`}
          heading="Profile"
          subHeading="Manage your profile information and reminders."
          btnText="Next"
        />
      ) : null}
    </div>
  );
};

export default ConversationHeader;
