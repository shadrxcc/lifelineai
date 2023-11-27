import Conversation, { ChatMessage } from "../components/Conversation";
import { useState } from "react";
import SideBar from "../components/SideBar";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Confirmation from "../components/Confirmation";
import Reminder from "../components/Reminder";
import FeedBack from "../components/FeedBack";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(true);
  const [tour1, setTour1] = useState(false);
  const [tour2, setTour2] = useState(false);
  const [tour3, setTour3] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [feedback, setFeedBack] = useState(false);
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [menu, setMenu] = useState(false);

  const [clearChat, setClearChat] = useState(false);

  const clearModalOpen = () => {
    setClearChat(true);
    menuToggle()
  };

  const clearModalClose = () => {
    setClearChat(false);
  };

  const menuToggle = () => {
    setMenu(!menu);
  };

  const OpenFeedback = () => {
    setFeedBack(true);
  };

  const CloseFeedback = () => {
    setFeedBack(false);
  };

  // const navigate = useNavigate()

  // const {isLoggedIn} = useAuth()
  // console.log(isLoggedIn)

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/login');
  //   }
  // }, [isLoggedIn, navigate]);

  const closePrivacy = () => {
    setPrivacyPolicy(false);
  };

  const clearConvo = () => {
    setChatLog([]);
    clearModalClose();
  };

  const openReminder = () => {
    setReminder(true);
  };

  const closeReminder = () => {
    setReminder(false);
  };

  const startGuide = () => {
    setPrivacyPolicy(false);
    setTour1(true);
  };

  const moveToStep2 = () => {
    setTour1(false);
    setTour2(true);
  };

  const moveToStep3 = () => {
    setTour2(false);
    setTour3(true);
  };

  const Finish = () => {
    setTour3(false);
  };

  const closeTour = () => {
    setTour1(false);
    setTour2(false);
    setTour3(false);
  };

  return (
    <>
      {privacyPolicy && (
        <PrivacyPolicy startGuide={startGuide} onClose={closePrivacy} />
      )}

      {reminder ? <Reminder onClose={closeReminder} /> : null}

      {feedback ? <FeedBack onClose={CloseFeedback} /> : null}

      {clearChat ? (
        <Confirmation clearConvo={clearConvo} onClose={clearModalClose} />
      ) : null}
      <div className="flex w-full ">
        <SideBar
          className="hidden sm:flex sm:flex-col sm:justify-between"
          clearchat={clearModalOpen}
          CloseTour={closeTour}
          step2={moveToStep3}
          tour2={tour2}
          tour3={tour3}
          finish={Finish}
        />

        <div className="flex-1">
          <Conversation
            clearModal={clearModalOpen}
            closeMenu={menuToggle}
            menu={menu}
            toggleMenu={menuToggle}
            chatLog={chatLog}
            setChatLog={setChatLog}
            like={OpenFeedback}
            dislike={OpenFeedback}
            setReminder={openReminder}
            CloseTour={closeTour}
            step1={moveToStep2}
            tour1={tour1}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
