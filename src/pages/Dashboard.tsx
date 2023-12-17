import Conversation from "../components/Conversation";
import { useState, useContext } from "react";
import SideBar from "../components/SideBar";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Confirmation from "../components/Confirmation";
import Reminder from "../components/Reminder";
import FeedBack from "../components/FeedBack";
import SaveConfirmation from "../components/SaveConfirmation";
import TurnOnConfirmation from "../components/TurnOnReminder";
import { ConversationContext } from "../context/conversationcontext";

const Dashboard = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(true);
  const [tour1, setTour1] = useState(false);
  const [tour2, setTour2] = useState(false);
  const [tour3, setTour3] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [feedback, setFeedBack] = useState(false);
  
  const [menu, setMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [turnoff, setTurnOff] = useState(true);
  const [onReminder, setOnReminder] = useState(false);
  const [offReminder, setOffReminder] = useState(false);
  const [turnOn, setTurnOn] = useState(false);

  const {setHistory, setChatLog} = useContext(ConversationContext);


  const offReminderClose = () => {
    setOffReminder(false);
  };

  const onReminderClose = () => {
    setOnReminder(false);
  };

  const toggleOn = () => {
    setTurnOff(false);
    setOnReminder(true);
    setShowProfile(false);
    setTurnOn(true);
  };

  const toggleOff = () => {
    setTurnOn(false);
    setOffReminder(true);
    setShowProfile(false);
    setTurnOff(true);
  };

  const profileShow = () => {
    setShowProfile(!showProfile);
  };

  const [clearChat, setClearChat] = useState(false);

  const clearModalOpen = () => {
    setClearChat(true);
    menuToggle();
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

  const closePrivacy = () => {
    setPrivacyPolicy(false);
  };

  const clearConvo = () => {
    setChatLog([]);
    setHistory([]);
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
      {offReminder ? <SaveConfirmation onClose={offReminderClose} /> : null}
      {onReminder ? <TurnOnConfirmation onClose={onReminderClose} /> : null}

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
            turnoff={turnoff}
            offReminder={toggleOff}
            turnon={turnOn}
            onReminder={toggleOn}
            showProfile={showProfile}
            profileShow={profileShow}
            clearModal={clearModalOpen}
            closeMenu={menuToggle}
            menu={menu}
            toggleMenu={menuToggle}
           
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
