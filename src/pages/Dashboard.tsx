import Conversation from "../components/Conversation";
import { useState } from "react";
import SideBar from "../components/SideBar";
import PrivacyPolicy from "../components/PrivacyPolicy";

const Dashboard = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(true);
  // const showPrivacy = () => {
  //   setPrivacyPolicy(true);
  // };

  const closePrivacy = () => {
    setPrivacyPolicy(false);
  };
  return (
    <>
      {privacyPolicy && <PrivacyPolicy onClose={closePrivacy} />}
      <div className="flex w-full ">
        <div className="">
          <SideBar />
        </div>
        <div className="flex-1">
          <Conversation />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
